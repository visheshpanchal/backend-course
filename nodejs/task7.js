const { resolveSoa } = require("dns");
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let url = req.url;

  if (url === "/home") {
    res.write("<html>");

    res.write("<body>Welcome to my home page</body>");
    res.write("</html>");
  }

  if (url === "/about") {
    res.write("<html>");

    res.write("<body>Welcome to About Page</body>");
    res.write("</html>");
  }

  if (url === "/node") {
    res.write("<html>");

    res.write("<body>Welcome to my Node Page</body>");
    res.write("</html>");
  }

  if (url === "/") {
    res.write("<html>");

    res.write("<body>Welcome to my Node Js project</body>");
    res.write("</html>");
  }
});

server.listen(3000, () => {
  console.log("Hello Vishesh");
});
