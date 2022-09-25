const express = require("express");
const db = require("./utils/database");
const bodyParser = require("body-parser");
const router = require("./routers");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

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
