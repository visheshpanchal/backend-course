const Sequelize = require("sequelize");

const sequelize = new Sequelize("nd", "root", "1234567890", {
  dialect: "mysql",
  host: "localhost",
});

// Getting All model
const modelDefiner = [require("../models/cart"), require("../models/products")];

for (let arr of modelDefiner) {
  arr(sequelize);
}

// Adding Relationship
function oneToOne(first, second) {
  second.hasOne(first, {
    onDelete: "CASCADE",
  });
  first.belongsTo(second);
}

oneToOne(sequelize.models.cart, sequelize.models.product);
module.exports = sequelize;
