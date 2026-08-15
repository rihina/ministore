//Rejean Mary zepeda BSIT 3E
const products = [
   { name: "Apple", price: 20 },
   { name: "Orange", price: 15 },
   { name: "Banana", price: 10 },
   { name: "Mango", price: 25 },
];

// The cart changes over time, so total uses `let`.
const cart = [];
let total = 0;


/* -------------------------------------------------------------------------
   2) Get the empty containers from the page (done for you).
   ------------------------------------------------------------------------- */
const productListEl = document.getElementById("product-list");
const cartEl = document.getElementById("cart");
const totalEl = document.getElementById("total");


/* -------------------------------------------------------------------------
   FUNCTION #1 — createCard(product)
   Build and return ONE product card element for the given product.
   ------------------------------------------------------------------------- */
function createCard(product) {
   const card = document.createElement("div");
   card.className = "card";

   // TEMPLATE LITERAL — build the card's HTML with the product data.
   card.innerHTML = `
    <strong>${product.name}</strong>
    <p>₱${product.price}</p>
    <button>Add to cart</button>
  `;

   // Find the button inside the card and react when it is clicked.
   // This ONE function works for ANY product, not just one per product.
   const button = card.querySelector("button");
   button.addEventListener("click", () => addToCart(product));

   return card;
}


/* -------------------------------------------------------------------------
   FUNCTION #2 — renderProducts()
   Draw every product on the page using a `for` loop.
   ------------------------------------------------------------------------- */
function renderProducts() {
   productListEl.innerHTML = ""; // clear first

   // FOR LOOP — create and add one card for every product.
   // We do NOT type the cards by hand; the loop builds them for us.
   for (let i = 0; i < products.length; i++) {
      const card = createCard(products[i]);
      productListEl.appendChild(card);
   }
}


/* -------------------------------------------------------------------------
   FUNCTION #3 — addToCart(product)
   Add the product to the cart array, then refresh the cart display.
   ------------------------------------------------------------------------- */
function addToCart(product) {
   // Add the clicked product to the cart array.
   cart.push(product);

   // Refresh the cart display so the new item and total show up.
   renderCart();
}


/* -------------------------------------------------------------------------
   FUNCTION #4 — renderCart()
   Draw the cart items and the total.
   ------------------------------------------------------------------------- */
function renderCart() {
   cartEl.innerHTML = "";
   total = 0;

   // IF STATEMENT — handle the empty cart before showing items.
   if (cart.length === 0) {
      cartEl.innerHTML = "<li>Your cart is empty.</li>";
      totalEl.textContent = "Total: ₱0";
      return; // stop here, nothing else to draw
   }

   // FOREACH — loop over every item in the cart.
   cart.forEach(function (item) {
      // Create one <li> and set its text with a TEMPLATE LITERAL.
      const li = document.createElement("li");
      li.textContent = `${item.name} — ₱${item.price}`;
      cartEl.appendChild(li);

      // Add this item's price to the running total.
      total += item.price;
   });

   // Show the final total using a template literal.
   totalEl.textContent = `Total: ₱${total}`;
}


/* -------------------------------------------------------------------------
   START THE APP (done for you) — runs your functions when the page loads.
   ------------------------------------------------------------------------- */
renderProducts();
renderCart();
