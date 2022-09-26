const express = require("express");

const router = express.Router();
const productController = require("./controllers/productController");
const cartController = require("./controllers/cartController");
router.get("/", productController.getAllProduct);
router.post("/cart", cartController.postCart);
router.get("/cart", cartController.getCart);
router.put("/cart/:id", cartController.putCart);
router.delete("/cart/:id", cartController.deleteItem);
module.exports = router;
