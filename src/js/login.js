const BASEURL = "https://6438a4841b9a7dd5c9554920.mockapi.io";
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const notif = document.getElementById("notif");
const btnLogin = document.getElementById("login");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    email: emailInput.value,
    password: password.value,
  };

  let res = await fetch(`${BASEURL}/users`);
  let item = await res.json();
  let tempData = [];
  for (let i = 0; i < item.length; i++) {
    if (item[i].email == user.email) {
      tempData.push(item[i]);
    }
  }

  if (tempData.length < 1) {
    notif.innerHTML = `<div class="alert alert-danger text-center" role="alert">
    Email atau Password anda salah.`;
  } else if (tempData[0].email == user.email && tempData[0].password == user.password) {
    localStorage.setItem(`name`, `${tempData[0].name}`);
    localStorage.setItem(`uid`, `${tempData[0].id}`);
    location.href = "bmr.html";
  } else {
    notif.innerHTML = `<div class="alert alert-danger text-center" role="alert">
    Email atau Password anda salah.`;
  }
});
