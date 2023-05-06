if (localStorage.getItem("uid") == null) {
  location.href = "login.html";
}
if (localStorage.getItem("name") == null) {
  location.href = "login.html";
}
if (localStorage.getItem("kkal") == null) {
  location.href = "login.html";
}

const titleName = document.getElementById("name-title");
titleName.innerHTML = `${localStorage.getItem("name")}`;
const BASEURL = `https://6455073fa74f994b334ff6ca.mockapi.io`;
const calculate = document.getElementById("calculate");
const foodList = document.getElementById("food-list");
let quantity = 0;
const uid = localStorage.getItem("uid");

const menuList = [];

const BASE_URL = `https://6455073fa74f994b334ff6ca.mockapi.io`;
// const quantity = [];

date = new Date();
tanggal = date.getDate();
bulan = date.getMonth();
tahun = date.getFullYear();

// console.log(tanggal);

const getData = async () => {
  let data = [];
  let response = await fetch(`${BASE_URL}/food`);
  data = await response.json();

  // console.log(data);
  data.map((index) => {
    // console.log(index);
    foodList.innerHTML += ` <div class="col-sm-12 col-md-6 col-lg-3">
    <div class="card mb-4">
      <img
        src="${index.image}"
        class="card-img-top"
        alt="..."
        width="18rem"
      />
      <div class="card-body">
        <h5 class="card-title">${index.name}</h5>
        <p class="card-text">${index.cal} Kal</p>
        <div class="d-grid">
          <button type="button" class="btn btn-purple" data-bs-toggle="modal" data-bs-target="#add?${index.id}">
            Tambahkan
          </button>
        </div>
      </div>
      <div class="modal fade" id="add?${index.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${index.name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id='formAddMenu'>
              <div class="modal-body">
                <label for="quantity" class="form-label">Kuantitas</label>
                <input type="number" class="form-control" id="quantity?${index.id}" required onkeyup = "showMe(this);"/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-purple" onclick="addMenu('${index.id}','${index.name}','${index.cal}')" data-bs-dismiss="modal">Tambahkan</button>
              </div>
            <form>
          </div>
        </div>
      </div>
    </div>
  </div>`;

    // const quantityInput = document.getElementById(`quantity?${index.id}`);
    // // console.log(quantityInput.value);
    // const addMenu = document.getElementById(`addMenu?${index.id}`);

    // addMenu.addEventListener("click", function () {
    //   console.log(quantity);
    // });
  });
};

getData();

function showMe(e) {
  quantity = e.value;
  // console.log(quantity);
}

let data;
function addMenu(id, name, cal) {
  const menu = {
    name: name,
    cal: parseInt(cal),
    qty: parseInt(quantity),
    total: cal * quantity,
  };

  menuList.push(menu);
  alert("Menu telah ditambahkan");
}

calculate.addEventListener("click", async function () {
  let response = await fetch(`${BASEURL}/menu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      uid: parseInt(uid),
      createdAt: {
        date: tanggal,
        month: bulan,
        year: tahun,
      },
      food: menuList,
    }),
  });

  let data = await response.json();

  // console.log(data);
  location.href = "result.html";
});

const logout = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("uid");
  localStorage.removeItem("kkal");
  location.href = "login.html";
};
