"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UsersTables",
      [
        {
          Calendly_ID: "seeder1",
          Refresh_Token: "seederb77a76ffce83d3bc20531ddfa76704e584f0e",
          Access_Token: "seedereyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwcz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Calendly_ID: "seeder2",
          Refresh_Token: "seederce83d3bc20531ddfa76704e584f0e83d3bc2053",
          Access_Token: "seedereyJI1NiJ9.eyJpc3MiOiJodHRwczhbGciOiJIUz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Calendly_ID: "seeder3",
          Refresh_Token: "seedera76704e584f0e6704e584f0",
          Access_Token: "seedereyJhNiJ9.eyiOiJodHbGciOiJIUzI1RwczJpc3M",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UsersTables", null, {});
  },
};
