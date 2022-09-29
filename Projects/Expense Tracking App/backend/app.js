const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Registering Routers

const routes = [require("./routes/user")];

for (const route of routes) {
  app.use(route);
}

sequelize
  .sync({ alter: true })
  .then((res) => {
    app.listen(3000, () => {
      console.log("Listening From 3000 Port");
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
