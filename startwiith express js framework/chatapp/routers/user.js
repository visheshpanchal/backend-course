const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res, next) => {
  let username = req.body["username"];
  let message = req.body["message"];

  fs.appendFile("./message.text", " " + `${username}:${message}`, (err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });
});

router.get("/", (req, res, next) => {
  let data = "";
  if (fs.existsSync("./message.text")) {
    data = fs.readFileSync("./message.text");
  }

  res.send(
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Message Send</title>
  </head>
  <body>
    <div>${data}</div>
    <form action="/" method="post" id="fm">
      <input placeholder="message" name="message" id="msg"/><button>Add Message</button>
    </form>

    <script>
      let username = localStorage.getItem("username");
      let msg = document.getElementById("msg");
      console.log(username);
      let form = document.getElementById("fm");
      let userField = document.createElement("input");
      userField.setAttribute("type", "hidden");

      userField.setAttribute("name", "username");
      if (username) {
        
        userField.value = JSON.parse(username);
      } else {
        userField.value = "undefined";
      }

      form.insertBefore(userField,msg);
    </script>
  </body>
</html>
`
  );
});
router.get("/login", (req, res, next) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chat App</title>
      </head>
      <body>
        <form action="/login" method="post" id="fm">
          <input placeholder="username" name="username" id="username" /><button>
            Add User
          </button>
        </form>
        <script>
          let btn = document.getElementById("fm").lastElementChild;
          console.log(btn)
          btn.addEventListener("click", store);
          function store(e)
          {
            
            localStorage.clear();
            let username = document.getElementById("username").value;
            console.log(username)
            localStorage.setItem("username", JSON.stringify(username));
          }
        </script>
      </body>
    </html>
    `
  );
});

router.post("/login", (req, res, next) => {
  let username = req.body["username"];
  console.log(username);
  res.redirect("/");
});

module.exports = router;
