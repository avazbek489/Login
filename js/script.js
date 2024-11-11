const password = document.querySelector("#password-input");
const username = document.querySelector("input[type='text']");
const button = document.querySelector(".btn");
const login = document.querySelector(".login");
const mainPage = document.querySelector(".main-page");

function validate(username, password) {
  if (username.value !== "admin" || password.value !== "123456") {
    alert("Login yoki parol notogri. Iltimos qaytadan urinib koring!");
    username.value = "";
    password.value = "";
  }
}

button.addEventListener("click", function () {
  validate(username, password);
  if (username.value == "admin" && password.value == "123456") {
    login.style.display = "none";
    let loader = document.createElement("div");
    document.body.appendChild(loader);

    setTimeout(function () {
      loader.remove();
      mainPage.style.display = "block";
    }, 3000);
  }
});
