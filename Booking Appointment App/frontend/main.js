let myForm = document.getElementById("my-form");
let api = "http://127.0.0.1:3000/";
let btn = myForm.lastElementChild;

myForm.addEventListener("submit", store);

function store(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  // Check Data To update or Add
  let attr = btn.getAttribute("name");
  if (attr !== undefined && attr === "add") {
    let data = {};

    data["username"] = username;
    data["phone"] = phone;
    data["email"] = email;

    postData(data);
  } else {
    let data = {};

    data["username"] = username;
    data["phone"] = phone;
    data["email"] = email;

    putData(data, attr);
  }
}

// Get Data From CrudCrud

window.addEventListener("DOMContentLoaded", getData);

async function getData() {
  try {
    let response = await axios({
      method: "get",
      url: api,
    });

    console.log(response.status);
    let data = response.data;
    let myTable = document.getElementById("my-table");
    let tableHead = document.createElement("thead");

    tableHead.innerHTML =
      "<th>Username</th><th>Phone</th><th>Email</th><th>Delete</th><th>Edit</th>";

    myTable.appendChild(tableHead);
    let tableBody = document.createElement("tbody");
    for (let i = 0; i < data.length; i++) {
      let username = data[i].username;
      let phone = data[i].phone;
      let email = data[i].email;

      let deleteButton = `<td><button type="click" id="deleteItem" onclick="deleteItem(this)" name="${data[i]["_id"]}">Delete </button></td>`;

      let editButton = `<td><button type="click" name="${data[i]["_id"]}" onclick="editItem(this)" id="editItem">Edit </button></td>`;

      let row = `<td>${username}</td><td>${phone}</td><td>${email}</td>`;

      let crow = "<tr>" + row + deleteButton + editButton + "</tr>";

      tableBody.innerHTML += crow;
    }
    myTable.appendChild(tableBody);
  } catch (err) {
    console.log(err);
  }
}

// Post Data
async function postData(dataItem) {
  try {
    let response = await axios({ method: "post", url: api, data: dataItem });

    location.reload();
  } catch (err) {
    console.log(err);
  }
}
// Put Data
async function editItem(e) {
  let username = document.getElementById("username");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  try {
    let name = e.name;

    let response = await axios({ method: "get", url: api + name });

    if (response.data) {
      let data = response.data[0];
      username.value = data["username"];
      phone.value = data["phone"];
      email.value = data["email"];

      btn.innerText = "Update";
      btn.setAttribute("name", name);
    }
  } catch (err) {
    console.log(err);
  }
}

async function putData(dataItem, id) {
  try {
    let response = await axios({
      method: "put",
      url: api + id,
      data: dataItem,
    });

    if (response.status !== undefined) {
      location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}

// Delete Data
async function deleteItem(e) {
  console.log(e);
  try {
    let id = e.name;
    let modifiedUrl = api + id;
    let response = await axios({
      method: "delete",
      url: modifiedUrl,
    });

    location.reload();
  } catch (err) {
    console.log(err);
  }
}
