const db = require("../models/products");

exports.getAllProduct = (req, res, next) => {
  db.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
