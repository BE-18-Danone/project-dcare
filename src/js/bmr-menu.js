const foodList = document.getElementById("food-list");

const BASE_URL = `https://6455073fa74f994b334ff6ca.mockapi.io`;
const getData = async () => {
  let data = [];
  let response = await fetch(`${BASE_URL}/food`);
  data = await response.json();

  console.log(data);
  data.map((index) => {
    console.log(index);
    foodList.innerHTML += ` <div class="col-sm-3">
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
            <div class="modal-body">
              <label for="quantity" class="form-label">Kuantitas</label>
              <input type="number" class="form-control" id="quantity" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-purple">Tambahkan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
};

getData();
