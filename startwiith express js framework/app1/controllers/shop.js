const path = require("path");
const rootPath = require("../utils/path");

exports.getShop = (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "shop.html"));
};

exports.contactUs = (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "contactus.html"));
};

exports.success = (req, res, next) => {
  res.send("<h1>Response Recorded</h1>");
};
