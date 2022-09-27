const express = require("express");

const router = express.Router();

const userOrderController = require("../controllers/userOrderController");
router.post("/add/user", userOrderController.addUserOrder);

router.get("/order/past", userOrderController.pastOrder);

module.exports = router;
