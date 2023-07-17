/**
 * ! Login + redirect to register acc
 */
document.addEventListener("DOMContentLoaded", function () {
  var registerBtn = document.querySelector("#register-btn");
  if (registerBtn) {
    registerBtn.addEventListener("click", function (event) {
      event.preventDefault();
      registerNewAccount();
    });
  }
});

function registerNewAccount() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;
  const acceptTerms = document.querySelector("#accept-terms").checked;

  if (
    name.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    Swal.fire("Error", "Please complete all fields.", "error");
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire("Error", "Password doesnt match.", "error");
    return;
  }

  if (!acceptTerms) {
    Swal.fire("Error", "You must agree to terms and conditions.", "error");
    return;
  }

  let newUser = {
    name: name,
    email: email,
    password: password,
  };

  localStorage.setItem("newUser", JSON.stringify(newUser));

  Swal.fire(
    "Registered",
    "Your account has been successfully registered.",
    "success"
  ).then(() => {
    window.location.href = "../../pages/AccountImplements/Account.html";
  });
}
