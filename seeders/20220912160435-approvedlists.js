"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ApprovedLists",
      [
        {
          Email: "testemail1@gmail.com",
          Name: "Joe",
          Notes: "Instructor",
          User_ID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail2@gmail.com",
          Name: "Sally",
          Notes: "CEO",
          User_ID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail3@gmail.com",
          Name: "Amanda",
          Notes: "CSS Queen",
          User_ID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail4@gmail.com",
          Name: "Olivia",
          Notes: "Project Manager Ninja",
          User_ID: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail5@gmail.com",
          Name: "",
          Notes: "",
          User_ID: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail6@gmail.com",
          Name: "Stacy",
          Notes: "Backend Bad@$$",
          User_ID: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ApprovedLists", null, {});
  },
};
