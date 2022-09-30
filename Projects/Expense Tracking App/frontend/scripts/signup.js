let api = "http://127.0.0.1:3000/user/";

const signUpForm = document.getElementById("signup-form");

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name-signup");
  let email = document.getElementById("email-signup");
  let password = document.getElementById("password-signup");

  const data = {};
  data["name"] = name.value;
  data["email"] = email.value;

  data["password"] = password.value;

  axios({ method: "post", url: api + "signup", data: data })
    .then(function (res) {
      alert("Successfully Signup");
    })
    .catch(function (err) {
      console.log(err);
    });
});
