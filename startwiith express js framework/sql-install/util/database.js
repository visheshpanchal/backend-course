const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nd",
  password: "1234567890",
  namedPlaceholders: true,
});

module.exports = pool.promise();
