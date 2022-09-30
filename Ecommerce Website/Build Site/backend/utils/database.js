const Sequelize = require("sequelize");

const sequelize = new Sequelize("nd", "root", "1234567890", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

// Getting All model
const modelDefiner = [
  require("../models/cart"),
  require("../models/products"),
  require("../models/user"),
  require("../models/order"),
  require("../models/orderItems"),
];

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

const User = sequelize.models.user;
const Order = sequelize.models.order;
const Product = sequelize.models.product;
oneToOne(sequelize.models.cart, sequelize.models.product);

// One to Many Between User and Order
User.hasMany(Order, {
  onDelete: "CASCADE",
});
Order.belongsTo(User);

// Many to Many Between Order and Product with Quantity
Order.belongsToMany(Product, {
  through: "orderitems",
  onDelete: "CASCADE",
});


module.exports = sequelize;
