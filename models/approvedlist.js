"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ApprovedList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ApprovedList.belongsTo(models.UsersTable, {
        foreignKey: "id",
        as: "UsersTable",
      });
    }
  }
  ApprovedList.init(
    {
      Email: DataTypes.STRING,
      Name: DataTypes.STRING,
      Notes: DataTypes.STRING,
      User_ID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ApprovedList",
    }
  );
  return ApprovedList;
};
