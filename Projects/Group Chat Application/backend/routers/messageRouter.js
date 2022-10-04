const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

router.post("/message", messageController.storeMessage);

module.exports = router;
