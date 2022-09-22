// DataBase  Config File

const Sequelize = require("sequelize");

const db = new Sequelize("nd", "root", "1234567890", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
