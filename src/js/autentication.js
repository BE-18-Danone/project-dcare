const BASEURL = "https://6438a4841b9a7dd5c9554920.mockapi.io";
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerForm = document.getElementById("registerForm");
const notif = document.getElementById("notif");
const btnRegister = document.getElementById("register");

let isLoading = false;

const checkBoxisChecked = () => {
  if (document.getElementById("check").checked == true) {
    return true;
  } else {
    return false;
  }
};
const getRadioValue = () => {
  const genderInput = document.getElementsByName("gender");
  for (i = 0; i < genderInput.length; i++) {
    if (genderInput[i].checked) {
      return genderInput[i].value;
    }
  }
};

let data = [];
const checkData = async () => {
  let response = await fetch(`${BASEURL}/users`);
  data = await response.json();
  data.map((item, index) => {
    console.log(item.email);
  });
};
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  isLoading = true;
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    gender: getRadioValue(),
    password: passwordInput.value,
  };

  const uid = Math.random().toString(36).substring(2, 15);

  if (checkBoxisChecked()) {
    // checkData();
    let response = await fetch(`${BASEURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        gender: user.gender,
        status: 1,
        uid: uid,
      }),
    });
    let data = await response.json();
    console.log(data);
    notif.innerHTML = `<div class="alert alert-success text-center" role="alert">
    Berhasil mendaftarkan akun, silankan login untuk melanjutkan.
  </div>`;
    registerForm.reset();
  } else {
    notif.innerHTML = `<div class="alert alert-danger text-center" role="alert">
    Harap checklist persetujuan untuk mendaftarkan akun.`;
  }
  checkData();
});
