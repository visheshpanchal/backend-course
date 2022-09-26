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
      let cat = data[item].category;

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

      let checkIfCatExistOrNot = document.querySelector(`#${cat}`);

      // We Check if category exits or not
      if (checkIfCatExistOrNot) {
        let element = document.querySelector(`#${cat} #add-live-item`);

        let createNewElement = document.createElement("div");
        createNewElement.innerHTML = structure;
        createNewElement.setAttribute("class", "col col-6");
        createNewElement.setAttribute("id", `${name}_${cat}_${id}`);
        element.appendChild(createNewElement);
      } else {
        let category = `<div class="container d-flex justify-content-center mt-3">
        <h2>${cat.toUpperCase()}</h2></div>
      <div class="container" id="${cat}">
        <div class="row space-item" id="add-live-item">
        </div>
      </div>`;

        let categoryElement = document.createElement("div");
        categoryElement.innerHTML = category;

        let section = document.getElementById("section");

        section.appendChild(categoryElement);
        let element = document.querySelector(`#${cat} #add-live-item`);
        let createNewElement = document.createElement("div");
        createNewElement.innerHTML = structure;
        createNewElement.setAttribute("class", "col col-6");
        createNewElement.setAttribute("id", `${name}_${cat}_${id}`);
        element.appendChild(createNewElement);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("DOMContentLoaded", function () {
  getAllItem();
});
