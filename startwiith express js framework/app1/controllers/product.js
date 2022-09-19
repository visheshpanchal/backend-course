const path = require("path");

exports.getProduct = function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
};

exports.addProduct = function (req, res, next) {
  console.log(req.body);
  res.redirect("/");
};
