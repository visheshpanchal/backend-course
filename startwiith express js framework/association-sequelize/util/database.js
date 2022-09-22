const Sequelize = require("sequelize");

const sequelize = new Sequelize("nd", "root", "1234567890", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
