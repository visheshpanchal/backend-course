const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const CartItem = sequelize.define(
  "cartItem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = CartItem;
