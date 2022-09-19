const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000, () => {
  console.log("Listening From 3000");
});
