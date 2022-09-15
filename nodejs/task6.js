const http = require("http");

const server = http.createServer((req, res) => {
  console.log("My name is Vishesh");
  res.write("Hello");
});

server.listen(3000, () => {
  console.log("Hello Vishesh");
});
