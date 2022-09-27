const { DataTypes } = require("sequelize");

const orderItems = (sequelize) => {
  return sequelize.define(
    "orderitems",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
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

module.exports = orderItems;
