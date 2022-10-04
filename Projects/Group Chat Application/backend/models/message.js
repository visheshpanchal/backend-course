const { DataTypes } = require("sequelize");

const Message = (sequelize) => {
  return sequelize.define("message", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.TEXT,
    },
  });
};

module.exports = Message;
