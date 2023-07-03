// Crear contenedor de tarjetas 1
const cardContainer1 = document.createElement("div");
cardContainer1.classList.add("row");
document.body.appendChild(cardContainer1);

// Crear contenedor de tarjetas 2
const cardContainer2 = document.createElement("div");
cardContainer2.classList.add("row");
document.body.appendChild(cardContainer2);

// Arreglo de items del carrito
let cartItems = [];

// Obtener items del carrito almacenados en localStorage
let cartItemsSaved = localStorage.getItem("cartItems");
if (cartItemsSaved) {
  cartItems = JSON.parse(cartItemsSaved);
  updateCartCount();
}

// Realizar la solicitud de los productos si la página actual es pc.html

fetch("../data.json")
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
          <img src="${product.image}" class="card-img-top" alt="${
        product.name
      }">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: $ ${formatPrice(product.price)}</p>
            <button type="button" class="btn button1 btn-dark">ADD TO CART</button>
          </div>
        `;

      card.innerHTML = productContent;

      const button = card.querySelector(".button1");
      button.addEventListener("click", () => rightClick(product));

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

// Manejar el clic derecho en el botón "ADD TO CART"
function rightClick(product) {
  const existingItem = cartItems.find((item) => item.name === product.name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    const newProduct = { ...product, quantity: 1 };
    cartItems.push(newProduct);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCartCount();
}

// Mostrar el modal del carrito
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

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContainer.appendChild(modalContent);

  const totalContent = document.createElement("div");
  totalContent.className = "total-content";
  modalContainer.appendChild(totalContent);

  const checkoutButton = document.createElement("button");
  checkoutButton.className = "checkout-button";
  checkoutButton.innerText = "CHECKOUT";
  modalContainer.appendChild(checkoutButton);

  updateCartItems();

  // Redireccionar al hacer clic en el botón "CHECKOUT"
  checkoutButton.addEventListener("click", () => {
    window.location.href = "../paymentmethod.html"; // Reemplaza "URL_DE_LA_PAGINA" con la URL a la que deseas redireccionar
  });
});

// Actualizar la cantidad de elementos en el carrito
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (cartCount) {
    cartCount.innerHTML = count;
  }
}

// Formatear precio
function formatPrice(price) {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Actualizar los elementos en el carrito
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
            <p class="product-price"> ${formatPrice(product.price)}</p>
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
