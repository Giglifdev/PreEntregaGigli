const cardContainer1 = document.createElement("div");
cardContainer1.classList.add("row");
document.body.appendChild(cardContainer1);

const cardContainer2 = document.createElement("div");
cardContainer2.classList.add("row");
document.body.appendChild(cardContainer2);

let cartItems = [];

let cartItemsSaved = localStorage.getItem("cartItems");
if (cartItemsSaved) {
  cartItems = JSON.parse(cartItemsSaved);
  updateCartCount();
}
if (window.location.pathname.includes("/Pc.html")) {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      const pcDesktops = data.find(
        (category) => category.Category === "Pc Desktops"
      );
      const products = pcDesktops.Products;

      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const card = document.createElement("div");
        card.classList.add("card");
        const productContent = `
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: $ ${formatPrice(product.price)}</p>
          <button type="button" class="btn button1 btn-dark">ADD TO CART</button>
        </div>
      `;

        card.innerHTML = productContent;

        const button = card.querySelector(".button1");
        button.addEventListener("click", rightClick.bind(null, product));

        const columnContainer = document.createElement("div");
        columnContainer.classList.add("col-sm-4", "d-flex");

        if (i < 3) {
          cardContainer1.appendChild(columnContainer);
        } else {
          cardContainer2.appendChild(columnContainer);
        }

        columnContainer.appendChild(card);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function rightClick(product) {
  const existingItem = cartItems.find((item) => item.name === product.name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    const newProduct = { ...product, quantity: 1 };
    cartItems.push(newProduct);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  const cartAmount = document.querySelector(".cartAmount");
  cartAmount.textContent = cartItems.length;
}
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

const modalContainer = document.querySelector(".modal-container");
const cartView = document.querySelector("#cart-icon");
cartView.addEventListener("click", () => {
  modalContainer.style.display = "block";
  modalContainer.innerHTML = "";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-title"></h1>
  `;

  modalContainer.appendChild(modalHeader);

  const modalButton = document.createElement("i");
  modalButton.classList.add(
    "bi",
    "bi-x-circle-fill",
    "modal-header-button",
    "text-success"
  );
  modalButton.style.fontSize = "1.5rem";
  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
    updateCartCount();
  });
  modalHeader.appendChild(modalButton);

  const cartContent = document.createElement("div");
  cartContent.className = "modal-content";

  cartItems.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${product.image}" style="max-width: 100px;">
      <div class="cart-item-details">
        <h5 class="product-name">${product.name}</h5>
        <div class="cart-icons">
          <i class="bi bi-trash decrement-icon"></i>
          <i class="bi bi-plus-lg increment-icon"></i>
          <p class="product-price">$ ${formatPrice(product.price)}</p>
          <div class="product-quantity">${product.quantity}</div>
        </div>
      </div>
    `;

    const decrementIcon = cartItem.querySelector(".decrement-icon");
    const incrementIcon = cartItem.querySelector(".increment-icon");

    decrementIcon.addEventListener("click", () => {
      if (product.quantity > 0) {
        product.quantity--;
        if (product.quantity === 0) {
          const index = cartItems.indexOf(product);
          if (index > -1) {
            cartItems.splice(index, 1);
          }
        }
        updateCartItems();
        updateCartCount();
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });

    incrementIcon.addEventListener("click", () => {
      if (product.quantity < 100) {
        product.quantity++;
        updateCartItems();
        updateCartCount();
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    });

    cartContent.appendChild(cartItem);
  });

  modalContainer.appendChild(cartContent);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totaltoPay = document.createElement("div");
  totaltoPay.className = "total-content";
  totaltoPay.textContent = `Your Total: $ ${formatPrice(total)}`;
  modalContainer.appendChild(totaltoPay);

  const checkoutButton = document.createElement("button");
  checkoutButton.className = "checkout-button";
  checkoutButton.innerText = "CHECKOUT";
  modalContainer.appendChild(checkoutButton);

  checkoutButton.addEventListener("click", () => {
    redirectTo("/paymentmethod.html");
  });

  function redirectTo(url) {
    window.location.href = url;
  }

  document.addEventListener("DOMContentLoaded", function () {
    let checkoutButton = document.querySelector(".checkout-button");
    if (checkoutButton) {
      checkoutButton.addEventListener("click", function () {
        window.location.href = "paymentmethod.html";
      });
    }
  });
});

function updateCartItems() {
  const cartContent = modalContainer.querySelector(".modal-content");
  cartContent.innerHTML = "";

  cartItems = cartItems.filter((product) => product.quantity > 0);

  cartItems.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${product.image}" style="max-width: 100px;">
      <div class="cart-item-details">
        <h5 class="product-name">${product.name}</h5>
        <div class="cart-icons">
          <i class="bi bi-trash decrement-icon"></i>
          <i class="bi bi-plus-lg increment-icon"></i>
          <p class="product-price">$ ${formatPrice(product.price)}</p>
          <div class="product-quantity">${product.quantity}</div>
        </div>
      </div>
    `;

    const decrementIcon = cartItem.querySelector(".decrement-icon");
    const incrementIcon = cartItem.querySelector(".increment-icon");

    decrementIcon.addEventListener("click", () => {
      if (product.quantity > 0) {
        product.quantity--;
        updateCartItems();
        updateCartCount();
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });

    incrementIcon.addEventListener("click", () => {
      if (product.quantity < 100) {
        product.quantity++;
        updateCartItems();
        updateCartCount();
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    });

    cartContent.appendChild(cartItem);
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totaltoPay = modalContainer.querySelector(".total-content");
  totaltoPay.textContent = `Your Total: $ ${formatPrice(total)}`;
}

function updateCartCount() {
  const cartAmount = document.querySelector(".cartAmount");
  if (cartAmount) {
    const totalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    cartAmount.textContent = totalQuantity;
  }
}

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
            window.location.href = "indexwithacc.html";
          });
        }
      });
    });
  }
});

function formatPrice(price) {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
function redirectTo(url) {
  window.location.href = url;
}

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
