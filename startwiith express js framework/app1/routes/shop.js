const express = require("express");
const path = require("path");
const router = express.Router();
const rootPath = require("../utils/path");
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "shop.html"));
});

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "contactus.html"));
});
router.post("/success", (req, res, next) => {
  res.send("<h1>Response Recorded</h1>");
});
module.exports = router;
