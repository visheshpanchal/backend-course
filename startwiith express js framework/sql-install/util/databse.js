const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "ng",
  password: process.env["MS_PASSWORD"],
});

module.exports = pool.promise();
