const { DataTypes } = require("sequelize");

const User = (sequelize) => {
  return sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
};

module.exports = User;
