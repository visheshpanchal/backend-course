console.log("Hello");

let myForm = document.getElementById("login-form");

myForm.addEventListener("submit", login);

async function login(event) {
  event.preventDefault();

  let form = new FormData(myForm);
  let obj = {};
  for (const [key, value] of form) {
    obj[key] = value;
  }

  try {
    let res = await axios({
      method: "post",
      url: api + "user/login",
      data: obj,
    });

    if (res.status === 200) {
      let token = res.headers.token;
      localStorage.setItem("token", token);
      alert("Login Done");

      window.location = "./chat.html";
    } else {
      alert(res.data.message);
    }
  } catch (err) {
    console.log(err);
  }
}
