const express = require("express");
const product = require("../controllers/product");
const router = express.Router();

router.get("/add-product", product.getProduct);

router.post("/add-product", product.addProduct);

module.exports = router;
