/**
 * !login
 */

document.addEventListener("DOMContentLoaded", function () {
  let loginsignBtn = document.querySelector(".loginsign");
  console.log(loginsignBtn);
  if (loginsignBtn) {
    loginsignBtn.addEventListener("click", function (event) {
      event.preventDefault();
      redirectToIndexWithAcc();
    });

    loginsignBtn.addEventListener("submit", function (event) {
      event.preventDefault();
      redirectToIndexWithAcc();
    });
  }
});

function redirectToIndexWithAcc() {
  window.location.href = "/pages/AccountImplements/indexwithacc.html";
}
