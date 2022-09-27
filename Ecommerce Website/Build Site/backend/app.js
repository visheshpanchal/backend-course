const express = require("express");
const db = require("./utils/database");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add Routes

const routes = [
  require("./routers/cartRouter"),
  require("./routers/productRouter"),
  require("./routers/userOrderRouter"),
];

for (const route of routes) {
  app.use(route);
}

// Sync Database
db.sync({ alter: true })
  .then((res) => {
    app.listen(3000, () => {
      console.log("Running on 3000 port");
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
