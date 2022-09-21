const express = require("express");
const bodyParser = require("body-parser");
const appointmentRoutes = require("./routes/routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", appointmentRoutes);
app.listen(3000, () => {
  console.log("Post 3000");
});

module.exports = app;
