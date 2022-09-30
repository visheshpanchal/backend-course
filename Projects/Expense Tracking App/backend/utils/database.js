const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense_tracking", "root", "1234567890", {
  dialect: "mysql",
  host: "localhost",
});

// Add All Database here
const dbs = [require("../models/userModel"), require("../models/expenseModel")];

for (const db of dbs) {
  db(sequelize);
}

module.exports = sequelize;
