if (localStorage.getItem("uid") == null) {
  location.href = "login.html";
}
if (localStorage.getItem("name") == null) {
  location.href = "login.html";
}

const inputHeigth = document.getElementById("height");
const inputWeigth = document.getElementById("weight");
const inputAge = document.getElementById("age");
const inputGender = document.getElementById("gender");
const inputLevel = document.getElementById("level");
const firstName = document.getElementById("first-name");
const titleName = document.getElementById("name-title");

const getName = localStorage.getItem("name").replace(/ .*/, "");
titleName.innerHTML = `${localStorage.getItem("name")}`;

firstName.innerHTML = `${getName}`;

document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.oninput = () => {
    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength);
    }
  };
});

inputHeigth.addEventListener("input", function () {
  if (this.value == 0) {
    this.value = "";
  }
  if (this.value < 0) {
    this.value = "";
  }
});

inputWeigth.addEventListener("input", function () {
  if (this.value == 0) {
    this.value = "";
  }
  if (this.value < 0) {
    this.value = "";
  }
});

inputAge.addEventListener("input", function () {
  if (this.value == 0) {
    this.value = "";
  }
  if (this.value < 0) {
    this.value = "";
  }
});

const formCalculate = document.getElementById("form-calculate");

formCalculate.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    height: inputHeigth.value,
    weigth: inputWeigth.value,
    age: inputAge.value,
    gender: inputGender.value,
    level: inputLevel.value,
  };

  let level = 0;
  let result = 0;

  if (data.level == "low") {
    level += 1.2;
  } else if (data.level == "medium") {
    level += 1.5;
  } else if (data.level == "high") {
    level += 1.8;
  }

  if (data.gender == "male") {
    result = 66.5 + 13.75 * data.weigth + 5.003 * data.height - 6.75 * data.age;
  } else if (data.gender == "female") {
    result = 655.1 + 9.563 * data.weigth + 1.85 * data.height - 4.676 * data.age;
  }

  let kkal = result * level;
  //   console.log(data);
  //   console.log(level);
  //   console.log(kkal.toFixed(2));
  localStorage.setItem("kkal", kkal.toFixed(2));
  formCalculate.reset();
  location.href = "bmr-menu.html";
});

const logout = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("uid");
  location.href = "login.html";
};
