// const fs = require("fs");

require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const app = express();
const path = require("path");
const cookieSession = require("cookie-session");
const OAuth2Strategy = require("passport-oauth2").Strategy;
const passport = require("passport");
const fs = require("fs");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");
const axios = require("axios").default;
const port = process.env.PORT || "3000";
const ApprovedLists = require("./server/routes/ApprovedList/app");
const Webhook = require("./server/routes/Webhooks");
const { UsersTable } = require("./models");

const requestNewAccessToken = (refreshToken) => {
  return axios.post(`${process.env.CALENDLY_AUTH_BASE_URL}/oauth/token`, {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
};

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(express.static(path.join(__dirname, "public")));

// cookie configuration
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: [process.env.COOKIE_SECRET || "randomstringhere"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// oauth
const isUserAuthenticated = async (req, res, next) => {
  if (req.user) {
    const user = await User.findById(req.user.id);

    if (user) {
      req.user = {
        id: user.id,
      };
      return next();
    } else {
      req.session = null;
      res.redirect("/dashboard");
    }
  }
};

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: process.env.CALENDLY_AUTH_BASE_URL + "/oauth/authorize",
      tokenURL: process.env.CALENDLY_AUTH_BASE_URL + "/oauth/token",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.REDIRECT_URI,
    },
    async (accessToken, refreshToken, _profile, cb) => {
      try {
        const { data } = await axios.get(
          process.env.CALENDLY_API_BASE_URL + "/users/me",
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        );

        let user = await UsersTable.findOne({
          where: { Calendly_ID: data.resource.uri },
        });

        if (!user) {
          user = await UsersTable.create({
            Calendly_ID: data.resource.uri,
            Refresh_Token: refreshToken,
            Access_Token: accessToken,
            cancel_message:
              "This meeting has been automatically cancelled by Protectly (protectly.cloud) because the invitee was not on a list of approved users. Please reach out to the meeting host to get your email address added to their list of approved users. powered by Protectly (protectly.cloud)",
          });

          // create webhook subscription
          if (process.env.NODE_ENV === "production") {
            await axios.post(
              process.env.CALENDLY_API_BASE_URL + "/webhook_subscriptions",
              {
                url: process.env.WEBHOOK_URL,
                events: ["invitee.created"],
                organization: data.resource.current_organization,
                user: data.resource.uri,
                scope: "organization",
              },
              {
                headers: {
                  Authorization: "Bearer " + accessToken,
                },
              }
            );
          }
        }

        cb(null, { id: user.id });
      } catch (e) {
        console.error(e);
        cb();
      }
    }
  )
);
passport.serializeUser((user, next) => {
  next(null, user);
});
passport.deserializeUser((user, next) => {
  next(null, user);
});

app.get("/oauth", passport.authenticate("oauth2"));

app.get(
  "/oauth/callback",
  passport.authenticate("oauth2", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/dashboard");
  }
);

// routes
app.use("/api/webhook", Webhook);
app.use("/api/dashboard", ApprovedLists);
app.use("/api/userinfo", async (req, res) => {
  const user = await UsersTable.findOne({
    where: {
      id: req.user.id,
    },
  });
  const options = {
    method: "GET",
    url: user.Calendly_ID,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.Access_Token,
    },
  };
  try {
    const response = await axios.request(options);
    return res.json(response.data.resource);
  } catch (error) {
    if (error.response.status !== 401) {
      return res.sendStatus(400);
    }
  }

  try {
    const result = await requestNewAccessToken(user.Refresh_Token);
    const { access_token, refresh_token } = result.data;

    await UsersTable.update(
      { Access_Token: access_token, Refresh_Token: refresh_token },
      { where: { id: user.id } }
    );

    options.headers.Authorization = "Bearer " + access_token;

    const response = await axios.request(options);
    return res.json(response.data.resource);
  } catch (e) {
    console.error(e);
    return res.sendStatus(400);
  }
});
app.use("/logout", (req, res) => {
  if (req.user) {
    req.session = null;
  }
  res.redirect("/");
});
app.use("/*", (req, res) => {
  fs.readFile(__dirname + "/public/index.html", "utf8", function (err, text) {
    res.send(text);
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
