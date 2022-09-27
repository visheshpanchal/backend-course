// Load Cart From Backend
let api = "http://localhost:3000/";
// Load Cart From Backend
async function loadCart() {
  try {
    let res = await axios({ method: "get", url: api + "cart/" });
    let data = res.data;
    let total = 0.0;
    for (let i = 0; i < data.length; i++) {
      let name = data[i].product.name;
      let price = data[i].product.price;
      let img = data[i].product.image;
      let quantity = data[i].quantity;
      let id = data[i].product.id;

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

// Removing Item
function removeItem(e) {
  let id = e.parentElement.parentElement.id;
  let element = document.querySelector(`#cart-body #${id}`);
  let subTotal = document.querySelector("#cart-body #cart-sub-total");
  let quantity = document.querySelector(
    `#cart-body #${id} #cart-quantity`
  ).innerHTML;
  console.log(id);
  let price = document.querySelector(`#${id} #item-price`).innerHTML;

  let totalPrice = Number(price) * Number(quantity);

  // Adjusting Cart Total
  subTotal.innerHTML = Math.abs(
    (Number(subTotal.innerHTML) - totalPrice).toFixed(2)
  );

  id = id.split("_").at(-1);
  axios({ method: "DELETE", url: api + "cart/" + id })
    .then((res) => {
      element.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}
