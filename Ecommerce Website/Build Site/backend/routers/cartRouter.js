const cartController = require("../controllers/cartController");
const express = require("express");

const router = express.Router();
router.post("/cart", cartController.postCart);
router.get("/cart", cartController.getCart);
router.put("/cart/:id", cartController.putCart);
router.delete("/cart/:id", cartController.deleteItem);

module.exports = router;
