"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ApprovedLists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Notes: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      User_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "UsersTables",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
