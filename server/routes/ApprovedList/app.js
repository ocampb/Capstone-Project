const express = require("express");
const { ApprovedList } = require("../../../models");
const session = require("express-session"); //i am not sure yet if we will need this if we are able to store oauth presence in cookies
const router = express.Router();

//this is the function we will edit to check OAuth
const LoginCheck = async (req, res, next) => {
  if (req.session.user) {
    //i believe this will switch to whatever we need for oauth
    next();
  } else {
    res.render("home"); //or whatever route we have for being logged out
    //can also send an error code that will trigger the pop up on home page to show theyve been logged out
  }
};
