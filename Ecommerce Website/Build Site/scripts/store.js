let PAGE = 1;

let getAllItem = async function () {
  try {
    let res = await axios({
      method: "get",
      url: api + "?page=" + PAGE,
    });

    let itemCount = res.headers["pagination_count"];
    let page = Math.floor(Number(itemCount) / 2);
    if (itemCount % 2 !== 0) {
      page++;
    }
    let section = document.getElementById("section");
    section.innerHTML = "";
    let data = res.data;

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
                <span class="fs-4">₹<span id="item-price" class="fs-4">${price}</span></span>
              </p>
              <button
                class="btn btn-primary p-3"
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

        section.appendChild(categoryElement);
        let element = document.querySelector(`#${cat} #add-live-item`);
        let createNewElement = document.createElement("div");
        createNewElement.innerHTML = structure;
        createNewElement.setAttribute("class", "col col-6");
        createNewElement.setAttribute("id", `${name}_${cat}_${id}`);
        element.appendChild(createNewElement);
      }
    }

    let pagination = document.createElement("nav");
    pagination.setAttribute("class", "d-flex justify-content-center mt-5");

    let htmlList = "";
    for (let count = 0; count < page; count++) {
      htmlList += `<li class="page-item"><button class="page-link" id="page-${
        count + 1
      }" onclick="changePage(${count + 1})">${count + 1}</button></li>`;
    }

    pagination.innerHTML =
      '<ul class="pagination"> <li class="page-item"><button class="page-link" id="page-prev" onclick="prevPage()">Previous</button></li>' +
      htmlList +
      '<li class="page-item"><button class="page-link" id="page-next" onclick="nextPage()">Next</button></li></ul>';

    section.appendChild(pagination);
    document.getElementById(`page-${PAGE}`).classList.add("active");

    if (PAGE === page) {
      document.getElementById("page-next").classList.add("disabled");
    }

    if (PAGE === 1) {
      document.getElementById("page-prev").classList.add("disabled");
    }
  } catch (err) {
    let section = document.getElementById("section");

    section.innerHTML = `<div class="d-flex justify-content-center alert alert-danger mt-3" mb-3 role="alert">
    ${err.code}
  </div>`;
  }
};

function changePage(e) {
  let value = e;

  PAGE = value;
  console.log(value);

  getAllItem();
}

function nextPage() {
  PAGE++;
  getAllItem();
}

function prevPage() {
  document.getElementById("section").innerHTML = "";
  PAGE--;
  getAllItem();
}
window.addEventListener("DOMContentLoaded", function () {
  getAllItem();
});
