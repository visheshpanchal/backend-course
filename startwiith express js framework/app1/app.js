const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This is always work");
  next();
});

app.use("/app-listen", (req, res, next) => {
  console.log("Calling App Listen ");
  res.send("<h1>Hello, from app-listen</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(3000, () => {
  console.log(`Listening From 3000 Post `);
});
