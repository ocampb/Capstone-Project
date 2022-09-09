const fs = require("fs");

require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const app = express();
const path = require("path");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || "3000";
const ApprovedLists = require("./server/routes/ApprovedList/app");
const es6Renderer = require("express-es6-template-engine");
const router = express.Router();

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
app.engine("html", es6Renderer);
app.set("views", "./components");
app.set("view engine", "html");
// routes
app.use("/api/dashboard", ApprovedLists);

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
