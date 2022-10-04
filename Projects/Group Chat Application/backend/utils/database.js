const { Sequelize } = require("sequelize");

// Adding Details of Sequelize

const sequelize = new Sequelize("chatapp", "root", "1234567890", {
  dialect: "mysql",
  host: "localhost",
});

// Add All Database here
const models = [require("../models/user"), require("../models/message")];

for (const model of models) {
  model(sequelize);
}

// All Models
const User = sequelize.models.user;
const Message = sequelize.models.message;

// Relationships
User.hasMany(Message, {
  onDelete: "CASCADE",
});
Message.belongsTo(User);

module.exports = sequelize;
