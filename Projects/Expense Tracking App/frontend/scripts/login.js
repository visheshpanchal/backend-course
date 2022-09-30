let api = "http://127.0.0.1:3000/user/";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("login-email");
  let password = document.getElementById("login-password");

  const data = {};
  data["password"] = password.value;
  data["email"] = email.value;

  axios({ method: "post", url: api + "login", data: data })
    .then(function (res) {
      if (res.status === 200) {
        alert(`${res.data.user.name} successfully logged in ...`);
      } else {
        alert(`User not found`);
      }
    })
    .catch(function (err) {
      {
        if (err.response.status) {
          alert(err.response.data.message);
        } else {
          console.log(err);
        }
      }
    });
});
