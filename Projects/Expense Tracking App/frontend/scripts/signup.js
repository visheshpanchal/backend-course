let api = "http://127.0.0.1:3000/user/signup";

const form = document.getElementById("sign-up-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name-signup");
  let email = document.getElementById("email-signup");
  let password = document.getElementById("password-signup");

  const data = {};
  data["name"] = name.value;
  data["email"] = email.value;

  data["password"] = password.value;

  axios({ method: "post", url: api, data: data })
    .then(function (res) {
      console.log("Successfully ");
    })
    .catch(function (err) {
      console.log(err);
    });
});
