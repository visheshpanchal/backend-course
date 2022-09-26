const express = require("express");

const router = express.Router();
const productController = require("./controllers/productController");
const cartController = require("./controllers/cartController");
router.get("/", productController.getAllProduct);
router.post("/cart", cartController.postCart);

module.exports = router;
