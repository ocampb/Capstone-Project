require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const app = express();
const path = require("path");
const cookieSession = require("cookie-session");
const OAuth2Strategy = require("passport-oauth2").Strategy;
const passport = require("passport");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || "3000";

app.use(express.static(path.join(__dirname, "public")));

// cookie configuration
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ["randomstringhere"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// oauth
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
      // create user
      // store id in cookie
      // write function to create user and return id

      // const userId = createUser(accessToken, refreshToken)

      try {
        // after save to database provide user id
        // cb(null, { id: userId });
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

app.use("/oauth", passport.authenticate("oauth2")).get(
  "/callback",
  passport.authenticate("oauth2", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

// routes
app.use("/", (req, res) => {
  res.redirect("/index.html");
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
