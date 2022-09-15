const { PanoramaSharp } = require("@mui/icons-material");
const express = require("express");
const { ApprovedList, UsersTable } = require("../../../models");

const router = express.Router();

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
    console.log(findUser);
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
        console.log(array);
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

router.delete("/emaildelete/:id", isUserAuthenticated, async (req, res) => {
  const id = req.params.id;
  try {
    const findEmail = await ApprovedList.findOne({
      where: {
        id: id,
      },
    });
    if (findEmail) {
      findEmail.destroy();
      res.status(200).send("Email has been deleted");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/userdelete/:id", isUserAuthenticated, async (req, res) => {
  const id = req.user.id;
  try {
    const findUser = await UsersTable.findOne({
      where: {
        id: id,
      },
    });
    if (findUser) {
      findUser.destroy();
      res.status(200).redirect("/");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
