const result = document.getElementById("result");
const firstName = document.getElementById("first-name");
const btnFinish = document.getElementById("btn-finish");

firstName.innerHTML = `${localStorage.getItem("name")}`;

result.innerHTML = `${localStorage.getItem("kkal")} <span class='h2 text-slate-500 fw-bold'>Kkal</span>`;

btnFinish.addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("id");
  localStorage.removeItem("kkal");
  location.href = "login.html";
});
