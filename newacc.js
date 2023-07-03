/**
 * ! Login + redirect to register acc
 */
document.addEventListener("DOMContentLoaded", function () {
  var registerBtn = document.querySelector("#register-btn");
  if (registerBtn) {
    registerBtn.addEventListener("click", function (event) {
      event.preventDefault();

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, register me!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Registered!",
            "You have been successfully registered.",
            "success"
          ).then(() => {
            window.location.href =
              "../../pages/AccountImplements/indexwithacc.html";
          });
        }
      });
    });
  }
});
