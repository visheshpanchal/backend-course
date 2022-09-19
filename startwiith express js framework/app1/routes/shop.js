const express = require("express");
const shop = require("../controllers/shop");
const router = express.Router();

router.get("/", shop.getShop);

router.get("/contactus", shop.contactUs);

router.post("/success", shop.success);
module.exports = router;
