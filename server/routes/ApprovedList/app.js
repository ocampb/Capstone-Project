const express = require("express");
const { ApprovedList, UsersTable } = require("../../../models");
//const session = require("express-session"); //i am not sure yet if we will need this if we are able to store oauth presence in cookies
const router = express.Router();

//this is the function we will edit to check OAuth
const LoginCheck = async (req, res, next) => {
  if (req.session.user) {
    //i believe this will switch to whatever we need for oauth
    next();
  } else {
    res.render("home"); //or whatever route we have for being logged out
    //can also send an error code that will trigger the pop up on home page to show they've been logged out
  }
};

//render user's approved emails (will add login check when complete)
router.get("/list", async (req, res) => {
  try {
    let array = [];
    const { id } = req.body; //this will be whatever we need to get from OAuth to search for ID pKey in Users table
    //it is req.params ^^^for now so i can test in postman
    const findUser = await UsersTable.findOne({
      where: {
        id: id, //this will be switched to Calendly_ID once we have a login route
      },
    });
    if (findUser) {
      const findAll = await ApprovedList.findAll({
        where: { User_ID: findUser.id },
      });
      if (findAll) {
        for (let i = 0; i < findAll.length; i++) {
          const findEach = await ApprovedList.findOne({
            where: {
              id: findAll[i].dataValues.id,
            },
          });
          array.push(findEach.dataValues);
        }
        console.log(array);
        res.status(200).send(array);
      }
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//add new emails
router.post("/add", async (req, res) => {
  try {
    const { id } = req.body; //this will be whatever we need to get from OAuth to search for ID pKey in Users table
    //it is req.params ^^^for now so i can test in postman
    const findUser = await UsersTable.findOne({
      where: {
        id: id, //this will be switched to Calendly_ID once we have a login route
      },
    });
    console.log("findUser");
    if (findUser) {
      const newEmail = {
        Email: Email,
        User_ID: id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const CreateEmail = await ApprovedList.create(newEmail);
      res.status(200).send(newEmail);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
