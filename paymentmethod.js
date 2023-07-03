function redirectToPayPal() {
  window.location.href = "https://www.paypal.com/";
}

function redirectToApple() {
  window.location.href = "https://www.apple.com/la/apple-pay/";
}

function redirectToGooglePay() {
  window.location.href = "https://pay.google.com/intl/es_es/about/";
}
/**
 * ! payment method
 */
document
  .querySelector("#checkoutButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    redirectToIndex();
  });

document
  .querySelector("#checkoutButton")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    redirectToIndex();
  });

function redirectToIndex() {
  window.location.href = "index.html";
}

function redirectToIndex() {
  const loader = document.querySelector(".glitch-loader");
  loader.style.display = "block";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}
