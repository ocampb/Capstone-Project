const { PanoramaSharp } = require("@mui/icons-material");
const express = require("express");
const { ApprovedList, UsersTable } = require("../../../models");

const router = express.Router();

//checking to see if user is logged in and authenticated
const isUserAuthenticated = async (req, res, next) => {
  if (req.user) {
    const user = await UsersTable.findByPk(req.user.id);
    if (user) {
      req.user = {
        id: user.id,
      };
      return next();
    } else {
      req.session = null;
      res.redirect("/");
    }
  }
};

//logs user in
router.get("/login", async (req, res) => {
  if (req.user) {
    const user = await UsersTable.findByPk(req.user.id);
    if (user) {
      res.status(200).send();
    } else {
      res.status(400).send();
    }
  }
});

//render user's approved emails (will add login check when complete)
router.get("/list", isUserAuthenticated, async (req, res) => {
  try {
    let array = [];
    const id = req.user.id;
    const findUser = await UsersTable.findOne({
      where: {
        id: id,
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
          array.unshift(findEach.dataValues);
        }
        res.status(200).send(array);
      }
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//add new emails
router.post("/add", isUserAuthenticated, async (req, res) => {
  try {
    const id = req.user.id;
    const { Email, Name, Notes } = req.body;
    const findUser = await UsersTable.findOne({
      where: {
        id: id,
      },
    });
    if (findUser) {
      const newEmail = {
        Email: Email,
        Name: Name,
        Notes: Notes,
        User_ID: id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const CreateEmail = await ApprovedList.create(newEmail);
      res.status(200).send(CreateEmail);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//update cancel message
router.put("/updatecancel", isUserAuthenticated, async (req, res) => {
  try {
    const id = req.user.id;
    const { cancel_message } = req.body;
    const findUser = await UsersTable.findOne({
      where: {
        id: id,
      },
    });
    if (findUser) {
      const updateMessage = await findUser.update({
        cancel_message:
          cancel_message + " powered by Protectly (protectly.cloud)",
        updatedAt: new Date(),
      });
      res.status(200).send(updateMessage);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
//get cancel message & get user (same database call)
router.get("/getcancel", isUserAuthenticated, async (req, res) => {
  try {
    const id = req.user.id;
    const findUser = await UsersTable.findOne({
      where: {
        id: id,
      },
    });
    if (findUser) {
      res.status(200).send(findUser);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//deletes emails from database
router.delete("/emaildelete/:id", isUserAuthenticated, async (req, res) => {
  const id = req.params.id;
  try {
    const findEmail = await ApprovedList.findOne({
      where: {
        id: id,
      },
    });
    if (findEmail) {
      await findEmail.destroy();
      res.status(200).send("Email has been deleted");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//deletes users account
router.delete("/userdelete", isUserAuthenticated, async (req, res) => {
  const id = req.user.id;
  try {
    await ApprovedList.destroy({
      where: {
        User_ID: id,
      },
    });
    await UsersTable.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).redirect("/");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
