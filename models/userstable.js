"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UsersTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersTable.init(
    {
      Calendly_ID: DataTypes.STRING,
      Refresh_Token: DataTypes.TEXT,
      Access_Token: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "UsersTable",
    }
  );
  return UsersTable;
};
