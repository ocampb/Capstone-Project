"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ApprovedLists",
      [
        {
          Email: "testemail1@gmail.com",
          User_ID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail2@gmail.com",
          User_ID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail3@gmail.com",
          User_ID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail4@gmail.com",
          User_ID: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail5@gmail.com",
          User_ID: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Email: "testemail6@gmail.com",
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
