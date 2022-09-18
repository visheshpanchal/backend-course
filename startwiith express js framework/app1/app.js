const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not Found</h1>");
});
app.listen(3000, () => {
  console.log("Listening From 3000");
});
