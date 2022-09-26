const { DataTypes } = require("sequelize");

const User = (sequelize) => {
  return sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        default: 0,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = User;
