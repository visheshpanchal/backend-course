const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense_tracking", "root", "1234567890", {
  dialect: "mysql",
  host: "localhost",
});

// Add All Database here
const dbs = [
  require("../models/userModel"),
  require("../models/expenseModel"),
  require("../models/categoryModel"),
];

for (const db of dbs) {
  db(sequelize);
}

const User = sequelize.models.user;
const Expense = sequelize.models.expense;
const Category = sequelize.models.category;

// User to Expense (One to Many Relation Ship)
User.hasMany(Expense, {
  onDelete: "CASCADE",
});
Expense.belongsTo(User);
// Adding Expense
Category.hasOne(Expense, {
  onDelete: "CASCADE",
});

Expense.belongsTo(Category);

module.exports = sequelize;
