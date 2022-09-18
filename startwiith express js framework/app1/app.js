const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Hey I am middleware one");
  res.send("<h1>Hello World</h1>");
  next();
});

app.use((req, res, next) => {
  console.log("Hey I am middleware two");
  //res.send({ abc: "def" });
  next();
});

app.listen(3000, () => {
  console.log(`Listening From 3000 Post `);
});
