/**
 * !login
 */

document.addEventListener("DOMContentLoaded", function () {
  const loginsignBtn = document.querySelector(".loginsign");
  console.log(loginsignBtn);
  if (loginsignBtn) {
    loginsignBtn.addEventListener("click", function (event) {
      event.preventDefault();
      login();
    });

    loginsignBtn.addEventListener("submit", function (event) {
      event.preventDefault();
      login();
    });
  }
});

function login() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const newUser = JSON.parse(localStorage.getItem("newUser"));

  if (!newUser || newUser.name !== username || newUser.password !== password) {
    Swal.fire("Error", "Incorrect credentials. please try again.", "error");
  } else {
    Swal.fire("Welcome", "Login Successful", "success").then(() => {
      window.location.href = "./indexwithacc.html";
    });
  }
}
