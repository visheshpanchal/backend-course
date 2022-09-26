const sequelize = require("../utils/database");

const Product = sequelize.models.product;
exports.getAllProduct = (req, res, next) => {
  Product.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
