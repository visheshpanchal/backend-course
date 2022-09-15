const http = require("http");

const server = http.createServer((req, res) => {
  console.log("My name is Vishesh");
  return res;
});

server.listen(3000, () => {
  console.log("Hello Vishesh");
});
