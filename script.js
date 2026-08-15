//Rejean Mary zepeda BSIT 3E
const products = [
    {
        id: "skin-tint",
        name: "Daily Skin Tint SPF 30",
        price: 599,
        category: "Face",
        tag: "Best seller",
        desc: "Your skin, but better — light coverage with SPF 30 for everyday Pinoy weather.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_PDP_Base_DST.jpg?v=1785807273&width=900",
    },
    {
        id: "mini-skin-tint",
        name: "Mini Daily Skin Tint SPF 30",
        price: 249,
        category: "Face",
        tag: "Mini",
        desc: "The viral skin tint in a purse-size mini. Perfect for trying or traveling.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_PDP_Base_DST_Mini.jpg?v=1785807200&width=900",
    },
    {
        id: "fresh-matte",
        name: "Fresh Matte Multiuse Base",
        price: 399,
        category: "Face",
        tag: "Multiuse",
        desc: "Matte base for skin tone shades — blurs, evens out, and stays fresh all day.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_PDP_Base_FM_Multi_d07217d1-8c16-4e72-9606-6edb302ee471.jpg?v=1785811369&width=900",
    },
    {
        id: "radiance-tint",
        name: "Radiance Tint Multiuse Base",
        price: 399,
        category: "Face",
        tag: "Concealer",
        desc: "Radiance-concealer base that highlights, conceals, and lifts your features.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_PDP_Base_RT_Multi.jpg?v=1785807642&width=900",
    },
    {
        id: "mini-milk-tint",
        name: "Mini Milk Tint",
        price: 249,
        category: "Multiuse",
        tag: "Viral",
        desc: "Creamy multiuse tint for lips, cheeks, and lids — blend like a milk-cream dream.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_PDP_Milktint_Mini.jpg?v=1785810887&width=900",
    },
    {
        id: "cushion-tint",
        name: "Cushion Tint Velvet Lip Stain",
        price: 449,
        category: "Lips",
        tag: "Stain",
        desc: "Soft-focus velvet lip stain with a cushiony, blurring finish that lasts.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_B1T1_Cushion_Tint.jpg?v=1785812362&width=900",
    },
    {
        id: "lip-maxx",
        name: "Lip Maxx Lip Balm",
        price: 399,
        category: "Lips",
        tag: "Nourish",
        desc: "Highly nourishing balm that plumps, tints, and pampers chapped lips.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_B1T1_Lip_Maxx.jpg?v=1785812391&width=900",
    },
    {
        id: "lash-revolution",
        name: "Lash Revolution Mascara",
        price: 349,
        category: "Eyes",
        tag: "Volume",
        desc: "Fanned-out, fuzz-free lashes that survive long humid Filipino days.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_PDP_Lash_Revo.jpg?v=1785810715&width=900",
    },
    {
        id: "powder-rush-mini",
        name: "Powder Rush MINI Loose Powder",
        price: 299,
        category: "Setting",
        tag: "Mini",
        desc: "Ultra-fine baking powder that sets makeup soft — never cakey.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_PDP_Base_PR_Mini.jpg?v=1785807498&width=900",
    },
    {
        id: "fixing-spray",
        name: "Ultra Matte Fixing Spray",
        price: 649,
        category: "Setting",
        tag: "Long-wear",
        desc: "Locks in your look for up to hours — matte, fresh, and transfer-proof.",
        image:
            "https://www.grwmcosmetics.com.ph/cdn/shop/files/8-8_Treat_All_You_Can_PDP_FS_Ultra_Matte.jpg?v=1785810265&width=900",
    },
];

const FREE_SHIPPING_THRESHOLD = 1000;

/* -------------------------------------------------------------------------
   2) Grab the empty containers from the page.
   ------------------------------------------------------------------------- */
const productListEl = document.getElementById("product-list");
const filtersEl = document.getElementById("filters");
const cartEl = document.getElementById("cart");
const totalEl = document.getElementById("total");
const cartCountEl = document.getElementById("cart-count");
const cartDrawerEl = document.getElementById("cart-drawer");
const overlayEl = document.getElementById("overlay");
const freeShipEl = document.getElementById("free-ship");
const toastEl = document.getElementById("toast");

/* -------------------------------------------------------------------------
   3) Cart state — saved to localStorage so your bag survives refresh.
      Each item: { product, qty }
   ------------------------------------------------------------------------- */
let cart = loadCart();
let activeFilter = "All";

function loadCart() {
    try {
        return JSON.parse(localStorage.getItem("grwm-cart")) || [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem("grwm-cart", JSON.stringify(cart));
}

/* -------------------------------------------------------------------------
   4) Helpers
   ------------------------------------------------------------------------- */
function formatMoney(n) {
    return "₱" + n.toLocaleString("en-PH");
}

function imageFallback(img) {
    // If the brand's image ever fails to load, swap in a soft placeholder.
    img.onerror = null;
    img.src =
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">' +
            '<rect width="600" height="600" fill="#f6e7de"/>' +
            '<text x="50%" y="50%" fill="#c23b5e" font-family="Poppins,Arial" font-size="28" text-anchor="middle">GRWM</text>' +
            "</svg>"
        );
}

/* -------------------------------------------------------------------------
   FUNCTION #1 — createCard(product)
   Build ONE product card element (image, tag, name, desc, price, button).
   ------------------------------------------------------------------------- */
function createCard(product) {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = Math.random() * 0.12 + "s";

    card.innerHTML = `
    <div class="card-media">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <span class="card-cat">${product.category}</span>
    </div>
    <div class="card-body">
      <h3>${product.name}</h3>
      <p class="card-desc">${product.desc}</p>
      <div class="card-row">
        <span class="card-price">${formatMoney(product.price)}</span>
        <button class="card-add" aria-label="Add ${product.name} to bag">
          <span class="plus">+</span> Add to bag
        </button>
      </div>
    </div>
  `;

    card.querySelector("img").addEventListener("error", (e) =>
        imageFallback(e.target)
    );
    card.querySelector(".card-add").addEventListener("click", () =>
        addToCart(product)
    );

    return card;
}

/* -------------------------------------------------------------------------
   FUNCTION #2 — renderProducts()
   Draw every product on the page using a `for` loop.
   ------------------------------------------------------------------------- */
function renderProducts() {
    productListEl.innerHTML = ""; // clear first

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        // Filter check — skip products that don't match the active filter.
        if (activeFilter !== "All" && product.category !== activeFilter) {
            continue;
        }

        const card = createCard(product);
        productListEl.appendChild(card);
    }

    // If nothing matches, tell the user.
    if (productListEl.children.length === 0) {
        productListEl.innerHTML = `
      <div class="cart-empty" style="grid-column:1/-1">
        <span class="cart-emoji">🫙</span>
        <p>No products in this category yet.</p>
      </div>`;
    }
}

/* -------------------------------------------------------------------------
   FUNCTION #3 — renderFilters()
   Build the category filter buttons (created in JS, not hardcoded).
   ------------------------------------------------------------------------- */
function renderFilters() {
    const categories = ["All", "Face", "Lips", "Eyes", "Setting", "Multiuse"];

    for (let i = 0; i < categories.length; i++) {
        const btn = document.createElement("button");
        btn.className = "filter-btn" + (categories[i] === activeFilter ? " active" : "");
        btn.textContent = categories[i];
        btn.addEventListener("click", () => {
            activeFilter = categories[i];
            renderFilters(); // re-draw buttons so the active one is highlighted
            renderProducts(); // re-draw the grid
        });
        filtersEl.appendChild(btn);
    }
}

/* -------------------------------------------------------------------------
   FUNCTION #4 — addToCart(product)
   Add (or bump the quantity of) a product, then refresh the bag.
   ------------------------------------------------------------------------- */
function addToCart(product) {
    const existing = cart.find((item) => item.product.id === product.id);

    if (existing) {
        existing.qty += 1; // it's already in the bag — just add one more
    } else {
        cart.push({ product: product, qty: 1 });
    }

    saveCart();
    renderCart();
    showToast(`${product.name} added to your bag ✨`);
}

/* -------------------------------------------------------------------------
   FUNCTION #5 — changeQty(id, amount)
   Increase or decrease an item's quantity (removes it at zero).
   ------------------------------------------------------------------------- */
function changeQty(id, amount) {
    const item = cart.find((i) => i.product.id === id);
    if (!item) return;

    item.qty += amount;

    if (item.qty <= 0) {
        cart = cart.filter((i) => i.product.id !== id);
    }

    saveCart();
    renderCart();
}

/* -------------------------------------------------------------------------
   FUNCTION #6 — removeFromCart(id)
   Remove one product line completely.
   ------------------------------------------------------------------------- */
function removeFromCart(id) {
    cart = cart.filter((item) => item.product.id !== id);
    saveCart();
    renderCart();
}

/* -------------------------------------------------------------------------
   FUNCTION #7 — renderCart()
   Draw the bag contents, running total, and free-shipping progress.
   ------------------------------------------------------------------------- */
function renderCart() {
    cartEl.innerHTML = "";
    let subtotal = 0;

    // IF STATEMENT — handle the empty bag first.
    if (cart.length === 0) {
        cartEl.innerHTML = `
      <li class="cart-empty">
        <span class="cart-emoji">🛍️</span>
        <p>Your bag is empty.</p>
        <p>Go ahead, treat yourself.</p>
      </li>`;
        totalEl.textContent = formatMoney(0);
        renderFreeShip(0);
        updateCartCount();
        return;
    }

    // FOREACH — loop over every item in the bag.
    cart.forEach(function (item) {
        const li = document.createElement("li");

        const lineTotal = item.product.price * item.qty;
        subtotal += lineTotal;

        li.innerHTML = `
      <img class="cart-item-img" src="${item.product.image}" alt="${item.product.name}" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.product.name}</p>
        <p class="cart-item-price">${formatMoney(item.product.price)}</p>
        <span class="qty">
          <button aria-label="Decrease quantity">−</button>
          <span>${item.qty}</span>
          <button aria-label="Increase quantity">+</button>
        </span>
        <br />
        <button class="cart-remove">Remove</button>
      </div>
      <span class="cart-item-total">${formatMoney(lineTotal)}</span>
    `;

        li.querySelector("img").addEventListener("error", (e) =>
            imageFallback(e.target)
        );

        const qtyBtns = li.querySelectorAll(".qty button");
        qtyBtns[0].addEventListener("click", () => changeQty(item.product.id, -1));
        qtyBtns[1].addEventListener("click", () => changeQty(item.product.id, 1));

        li.querySelector(".cart-remove").addEventListener("click", () =>
            removeFromCart(item.product.id)
        );

        cartEl.appendChild(li);
    });

    totalEl.textContent = formatMoney(subtotal);
    renderFreeShip(subtotal);
    updateCartCount();
}

/* -------------------------------------------------------------------------
   FUNCTION #8 — renderFreeShip(subtotal)
   Progress message + bar toward the free-shipping threshold.
   ------------------------------------------------------------------------- */
function renderFreeShip(subtotal) {
    const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
    const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

    if (remaining > 0) {
        freeShipEl.innerHTML = `Add <b>${formatMoney(remaining)}</b> more to unlock FREE shipping! 🚚`;
    } else {
        freeShipEl.innerHTML = `<b>You've unlocked FREE shipping!</b> 🎉`;
    }

    freeShipEl.innerHTML += `<div class="free-bar"><span style="width:${percent}%"></span></div>`;
}

/* -------------------------------------------------------------------------
   FUNCTION #9 — updateCartCount()
   Show the total number of items in the header badge.
   ------------------------------------------------------------------------- */
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = count;
}

/* -------------------------------------------------------------------------
   FUNCTION #10 — showToast(message)
   Small "added to bag" notification.
   ------------------------------------------------------------------------- */
let toastTimer;

function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
}

/* -------------------------------------------------------------------------
   FUNCTION #11 — openDrawer() / closeDrawer()
   Slide the shopping bag in and out.
   ------------------------------------------------------------------------- */
function openDrawer() {
    cartDrawerEl.classList.add("open");
    cartDrawerEl.setAttribute("aria-hidden", "false");
    overlayEl.hidden = false;
    requestAnimationFrame(() => overlayEl.classList.add("show"));
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
    cartDrawerEl.classList.remove("open");
    cartDrawerEl.setAttribute("aria-hidden", "true");
    overlayEl.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => (overlayEl.hidden = true), 350);
}

/* -------------------------------------------------------------------------
   5) Wire up the page — event listeners.
   ------------------------------------------------------------------------- */
document.getElementById("cart-toggle").addEventListener("click", openDrawer);
document.getElementById("drawer-close").addEventListener("click", closeDrawer);
overlayEl.addEventListener("click", closeDrawer);

document.getElementById("clear-btn").addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
    showToast("Bag cleared 🧹");
});

document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Your bag is empty — add something first 💕");
        return;
    }
    showToast("Checkout is a demo — try GRWM's official store! 💄");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
});

/* -------------------------------------------------------------------------
   START THE APP — runs the render functions when the page loads.
   ------------------------------------------------------------------------- */
renderFilters();
renderProducts();
renderCart();
