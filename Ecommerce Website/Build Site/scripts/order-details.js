let api = "http://localhost:3000/";

/*
      <div class="d-flex justify-content-center mt-5" id="cart">
        <div class="card" style="width: 35rem; height: auto">
          <div class="fs-1 d-flex justify-content-center">Name</div>
          <div class="card-body" id="cart-body">
            <div class="cart-header d-flex justify-content-center">
              <div class="card-title">ITEM</div>
              <div class="card-title">PRICE</div>
              <div class="card-title">QUANTITY</div>
            </div>

            <div class="cart-details d-flex justify-content-end" id="cart-add">
              <div>Total :</div>
              <div>
                <span>₹<span id="cart-sub-total">00.00</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

*/
async function loadDetails() {
  let response = await axios({ method: "get", url: api + "order/past" });
  let section = document.getElementById("section");
  let data = response.data;
  console.log(data);

  for (let user of data) {
    let name = user.name;

    let products = user.orders[0].products;
    let pHtml = "";
    let tpPrice = 0;
    for (let product of products) {
      let pName = product.name;
      let pPrice = product.price;
      let pId = product.id;
      let pQuantity = product.orderitems.quantity;
      let pImage = product.image;
      let pCategory = product.category;
      tpPrice += pPrice * pQuantity;
      let orderDetails = `<div class="cart-items d-flex justify-content-around order-box">
      <div class="d-inline-flex">
        <img
          src="${pImage}"
          height="100"
          width="100"
          class="card-img-center"
          alt="..."
        />
        <div class="pt-5">${pName}</div> 
      </div>
      
      <div class="card-title pt-5">
        <p>
          <span>₹<span id="item-price ">${pPrice}</span></span>
        </p>
      </div>
      <div class="card-title pt-5" id="cart-quantity">${pQuantity}</div>
      </div>`;

      pHtml += orderDetails;
    }
    let outFit = document.createElement("div");
    outFit.setAttribute("class", "d-flex justify-content-center mt-5");

    outFit.innerHTML = ` 
    <div class="card" style="width: 35rem; height: auto">
      <div class="fs-3 fw-bold d-flex justify-content-center">Name:-<span style="padding-left:10px">${name}</span></div>
      <div class="card-body" id="cart-body">
        <div class="cart-header d-flex justify-content-around">
          <div class="card-title ">ITEM</div>
          <div class="card-title ">PRICE</div>
          <div class="card-title">QUANTITY</div>
        </div>
            ${pHtml}
        <div class="cart-details d-flex justify-content-end" id="cart-add">
          <div>Total :</div>
          <div>
            <span>₹<span id="cart-sub-total">${tpPrice}</span></span>
          </div>
        </div>
      </div>
    </div>
  `;

    section.appendChild(outFit);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  loadDetails();
});
