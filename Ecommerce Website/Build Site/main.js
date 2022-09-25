let cart = document.getElementById("cart");

// Cart Displaying
function showCart(e) {
  cart.classList.remove("d-none");
}

// Cart Removing
function closeCart(e) {
  cart.classList.add("d-none");
}

// Adding Item into cart

function addItem(e) {
  let id = e.parentElement.parentElement.parentElement.parentElement.id;
  let name = document.querySelector(`#${id} div h3`).innerText;
  let img = document.querySelector(`#${id} div img`).src;
  let price = document.querySelector(`#${id} #item-price`).innerHTML;

  let cartItem = `
  <div class="card-title">
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
      <span>₹<span>${price}</span></span>
    </p>
  </div>
  <div class="card-title" id="cart-quantity">1</div>
  <div class="card-title"><button onclick="removeItem(this)" class="btn btn-primary" style="padding:4px">Remove</button></div>`;
  // If Cart has already item or not

  let cartItm = document.querySelector(`#cart-body #${id}`);
  let subTotal = document.querySelector("#cart-body #cart-sub-total");

  if (cartItm !== null) {
    let number = document.querySelector(
      `#cart-body #${id} #cart-quantity`
    ).innerHTML;

    document.querySelector(`#cart-body #${id} #cart-quantity`).innerHTML =
      Number(number) + 1;

    // Adjusting Cart Total
    let temp = parseFloat(subTotal.innerHTML);
    temp += parseFloat(Number(price));
    subTotal.innerHTML = Number(temp).toFixed(2);
  } else {
    let add = document.querySelector("#cart-body #cart-add");

    let cart = document.querySelector("#cart-body");
    let domElement = document.createElement("div");
    domElement.setAttribute(
      "class",
      "cart-items d-flex justify-content-center "
    );
    domElement.setAttribute("id", `${id}`);
    domElement.innerHTML = cartItem;

    cart.insertBefore(domElement, add);

    // Adjusting Cart Total
    if (subTotal.innerHTML === "00.00") {
      subTotal.innerHTML = parseFloat(price).toFixed(2);
    } else {
      let temp = parseFloat(subTotal.innerHTML);
      temp += parseFloat(Number(price));
      subTotal.innerHTML = Number(temp).toFixed(2);
    }
  }

  // Toast Notification

  const container = document.getElementById("toast-container");

  createNotification();

  function createNotification() {
    const toast = document.createElement("div");
    toast.setAttribute("class", "toast show mt-3 mb-3");
    toast.innerHTML = `<div class="toast-body ">${name} added in cart</div>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}

// Removing Item
function removeItem(e) {
  let id = e.parentElement.parentElement.id;
  let element = document.querySelector(`#cart-body #${id}`);
  let subTotal = document.querySelector("#cart-body #cart-sub-total");
  let quantity = document.querySelector(
    `#cart-body #${id} #cart-quantity`
  ).innerHTML;
  let price = document.querySelector(`#${id} #item-price`).innerHTML;

  let totalPrice = Number(price) * Number(quantity);

  // Adjusting Cart Total
  subTotal.innerHTML = Math.abs(
    (Number(subTotal.innerHTML) - totalPrice).toFixed(2)
  );

  element.remove();
}
