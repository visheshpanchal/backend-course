let element = document.getElementById("add-live-item");
let api = "http://localhost:3000/";
console.log("hello");
let getAllItem = async function () {
  try {
    let res = await axios({
      method: "get",
      url: api,
    });

    let data = res.data;
    console.log(data);
    for (let item = 0; item < data.length; item++) {
      let name = data[item].name;
      let img = data[item].image;
      let price = data[item].price;
      let id = data[item].id;

      let structure = `
        <div class="card" style="width: 18rem">
          <h3 class="d-flex justify-content-center">${name}</h3>
          <img src="${img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-flex justify-content-around">
              <p>
                <span>$<span id="item-price">${price}</span></span>
              </p>
              <button
                class="btn btn-primary"
                type="button"
                onclick="addItem(this)"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>`;

      let createNewElement = document.createElement("div");
      createNewElement.innerHTML = structure;
      createNewElement.setAttribute("class", "col col-6");
      createNewElement.setAttribute("id", `${name}_${id}`);

      element.appendChild(createNewElement);
    }
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("DOMContentLoaded", function () {
  getAllItem();
});
