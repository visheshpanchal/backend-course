const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routers/user");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter);

app.listen(5000, () => {
  console.log("Listening from 5000 Port");
});
