document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.querySelector(".btn.btn-primary");

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Has been sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  });
});
