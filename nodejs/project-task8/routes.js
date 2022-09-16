const fs = require("fs");

let requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");

    if (fs.existsSync("./message.txt")) {
      console.log("Work This Function");
      let data = fs.readFileSync("./message.txt", "utf-8").split("\n");

      for (let dt of data) {
        res.write("<div>");
        res.write(dt);
        res.write("</div>");
      }
    }
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');

    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[0];
      fs.appendFile("./message.txt", "\n" + message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = {
  handler: requestHandler,
  comment: "To Handle Request Response",
};
