if (localStorage.getItem("uid") == null) {
  location.href = "login.html";
}
if (localStorage.getItem("name") == null) {
  location.href = "login.html";
}
if (localStorage.getItem("kkal") == null) {
  location.href = "login.html";
}

const result = document.getElementById("result");
const firstName = document.getElementById("first-name");
const btnFinish = document.getElementById("btn-finish");
const BASEURL = `https://6455073fa74f994b334ff6ca.mockapi.io`;

const totalCal = document.getElementById("totalCal");

date = new Date();
tanggal = date.getDate();
bulan = date.getMonth();
tahun = date.getFullYear();

let data = [];
let cal = [];
let totalKkal = 0;
const getData = async () => {
  let response = await fetch(`${BASEURL}/menu`);
  data = await response.json();
  // console.log(data);
  data.map((index) => {
    // console.log(index.createdAt.date);
    if (
      index.uid == localStorage.getItem("uid") &&
      index.createdAt.date == tanggal &&
      index.createdAt.month == bulan &&
      index.createdAt.year == tahun
    ) {
      // console.log(index.food);
      index.food.map((item) => {
        // console.log(item.total);
        cal.push(item.total);
      });
    }
  });
  cal.forEach((num) => {
    totalKkal += num;
  });

  totalCal.innerHTML = `${totalKkal.toFixed(2)} <span class="h2 text-slate-500 fw-bold">Kkal</span>`;
};

firstName.innerHTML = `${localStorage.getItem("name")}`;

result.innerHTML = `${localStorage.getItem("kkal")} <span class='h2 text-slate-500 fw-bold'>Kkal</span>`;

btnFinish.addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("id");
  localStorage.removeItem("kkal");
  localStorage.removeItem("uid");
  location.href = "login.html";
});

getData();
