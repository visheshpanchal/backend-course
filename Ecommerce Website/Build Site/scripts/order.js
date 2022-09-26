// Load Cart From Backend
let api = "http://localhost:3000/";
async function loadCart() {
  try {
    let res = await axios({ method: "get", url: api + "cart/" });
    let data = res.data;
    let total = 0.0;
    for (let i = 0; i < data.length; i++) {
      let name = data[i].name;
      let price = data[i].price;
      let img = data[i].image;
      let quantity = data[i].quantity;
      let id = data[i].productId;

      let cartItem = `<div class="card-title">
        <img
          src="${img}"
          height="100"
          width="100"
          class="card-img-top"
          alt="..."
        />
       
      </div>
      <div>${name}</div>
      <div class="card-title">
        <p>
          <span>₹<span id="item-price">${price}</span></span>
        </p>
      </div>
      <div class="card-title" id="cart-quantity">${quantity}</div>
      <div class="card-title"><button onclick="removeItem(this)" class="btn btn-primary" style="padding:4px">Remove</button></div>`;
      let add = document.querySelector("#cart-body #cart-add");

      let cart = document.querySelector("#cart-body");
      let domElement = document.createElement("div");
      domElement.setAttribute(
        "class",
        "cart-items d-flex justify-content-center "
      );
      domElement.setAttribute("id", `${name}_${id}`);
      domElement.innerHTML = cartItem;

      cart.insertBefore(domElement, add);

      // Sub total

      total += parseFloat(Number(price)) * Number(quantity);
    }

    let subTotal = document.querySelector("#cart-body #cart-sub-total");
    subTotal.innerHTML = Number(total).toFixed(2);
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", loadCart);

let form = document.getElementById("addOrder");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const values = [...formData.entries()];

  data = {};

  for (let dt of values) {
    data[dt[0]] = dt[1];
  }

  axios({ method: "post", url: api + "add/user", data: data });
});
