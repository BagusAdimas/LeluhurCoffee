const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const searchForm = document.querySelector("#hamburger-menu");

const menuData = {
  cold: [
    {
      name: "Iced Latte",
      price: "Rp 25.000",
      desc: "Espresso dengan susu dingin segar.",
      img: "img/icedlatte.jpeg",
    },
    {
      name: "Cold Brew",
      price: "Rp 30.000",
      desc: "Kopi ekstraksi dingin selama 12 jam.",
      img: "img/coldbrew.jpg",
    },
    {
      name: "Iced Americano",
      price: "Rp 20.000",
      desc: "Espresso dengan es batu dan air.",
      img: "img/icedamericano.jpg",
    },
    {
      name: "Iced Nutella Latte",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan nutella.",
      img: "img/icednutellalatte.jpg",
    },
    {
      name: "Iced Matcha Latte",
      price: "Rp 30.000",
      desc: "Bubuk matcha dengan susu dingin.",
      img: "img/icedmatchalatte.jpg",
    },
    {
      name: "Iced Mochaccino",
      price: "Rp 38.000",
      desc: "Espresso dengan susu dingin dan cokelat.",
      img: "img/icedmochaccino.jpeg",
    },
    {
      name: "Iced Caramel Macchiato",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan karamel.",
      img: "img/icedcaramelmacchiato.jpeg",
    },
    {
      name: "Iced Brown Sugar Latte",
      price: "Rp 28.000",
      desc: "Espresso dengan susu dingin dan brown sugar.",
      img: "img/icedbrownsugarlatte.jpg",
    },
    {
      name: "Sea Salt Cloud Chocolate",
      price: "Rp 33.000",
      desc: "Espresso dengan krim cloud dan cokelat.",
      img: "img/seasaltcloudchocolate.jpg",
    },
    {
      name: "Iced Cappuccino",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan busa susu.",
      img: "img/icedcappucino.jpg",
    },
  ],
  hot: [
    {
      name: "Hot Cappuccino",
      price: "Rp 22.000",
      desc: "Espresso dengan busa susu tebal dan cokelat bubuk.",
      img: "img/hotcappucino.jpg",
    },
    {
      name: "Hot Americano",
      price: "Rp 18.000",
      desc: "Espresso klasik dengan air panas.",
      img: "img/hotamericano.jpg",
    },
    {
      name: "Hot Latte",
      price: "Rp 25.000",
      desc: "Espresso dengan steamed milk yang lembut.",
      img: "img/hotlatte.jpg",
    },
    {
      name: "Espresso Shot",
      price: "Rp 15.000",
      desc: "Espresso murni dengan rasa kuat dan pekat.",
      img: "img/espressoshot.jpg",
    },
    {
      name: "Hot Chocolate",
      price: "Rp 28.000",
      desc: "Espresso dengan busa susu tebal dan cokelat bubuk.",
      img: "img/hotchocolate.jpg",
    },
    {
      name: "Hot Mocha",
      price: "Rp 32.000",
      desc: "Espresso dengan busa susu tebal dan cokelat bubuk.",
      img: "img/hotmocha.jpg",
    },
    {
      name: "Hot Caramel Macchiato",
      price: "Rp 34.000",
      desc: "Espresso dengan busa susu tebal dan caramel sauce.",
      img: "img/hotcaramelmacchiato.jpg",
    },
    {
      name: "Flat White",
      price: "Rp 25.000",
      desc: "Espresso dengan susu steam tanpa foam.",
      img: "img/flatwhite.jpg",
    },
    {
      name: "Hot Matcha Latte",
      price: "Rp 34.000",
      desc: "Bubuk matcha dengan susu panas.",
      img: "img/hotmatchalatte.jpg",
    },
    {
      name: "Hot Tea",
      price: "Rp 18.000",
      desc: "Teh panas dengan rasa yang lembut dan hangat.",
      img: "img/hottea.jpg",
    },
  ],
  pastry: [
    {
      name: "Cinnamon Roll",
      price: "Rp 20.000",
      desc: "Roti kayu manis yang lembut dan manis.",
      img: "img/cinnamonroll.jpg",
    },
    {
      name: "Croissant",
      price: "Rp 22.000",
      desc: "Pastry renyah mentega khas Perancis.",
      img: "img/croissant.jpg",
    },
    {
      name: "Choco Muffin",
      price: "Rp 15.000",
      desc: "Muffin cokelat panggang dengan choco chips.",
      img: "img/chocomuffin.jpg",
    },
    {
      name: "Almond Croissant",
      price: "Rp 25.000",
      desc: "Pastry renyah mentega khas Perancis dengan almond.",
      img: "img/almondcroissant.jpg",
    },
    {
      name: "Blueberry Muffin",
      price: "Rp 15.000",
      desc: "Muffin blueberry panggang dengan blueberry chips.",
      img: "img/bluberrymuffin.jpg",
    },
    {
      name: "Choco Danish",
      price: "Rp 23.000",
      desc: "Pastry cokelat dengan krim dan choco chips.",
      img: "img/chocodanish.jpg",
    },
    {
      name: "Tiramisu Cake",
      price: "Rp 38.000",
      desc: "Layer cake dengan rasa kopi dan krim mascarpone.",
      img: "img/tiramisucake.jpg",
    },
    {
      name: "Cheesecake",
      price: "Rp 35.000",
      desc: "Kue keju lembut dengan crust renyah.",
      img: "img/cheesecake.jpg",
    },
    {
      name: "Chocolate Fudge Cake",
      price: "Rp 38.000",
      desc: "Kue cokelat lembut dengan lapisan fudge kaya rasa.",
      img: "img/chocofudgecake.jpg",
    },
    {
      name: "BananaBread",
      price: "Rp 30.000",
      desc: "Roti pisang lembut dengan rasa manis.",
      img: "img/bananabread.jpg",
    },
  ],
};

window.showDetail = function (category, query = null) {
  const mainSection = document.getElementById("main-menu-selection");
  const detailSection = document.getElementById("menu-detail-container");
  const detailList = document.getElementById("detail-list");
  const detailTitle = document.getElementById("detail-title");
  if (!mainSection || !detailSection || !detailList || !detailTitle) return;
  mainSection.style.display = "none";
  detailSection.style.display = "block";
  let items = menuData[category] || [];
  if (query) {
    items = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    detailTitle.innerText = `HASIL PENCARIAN: "${query}"`;
  } else {
    detailTitle.innerText = category.toUpperCase() + " MENU";
  }
  detailList.innerHTML = items
    .map((item, index) => {
      return `
          <div class="menu-item-card">
            <img src="${
              item.img || "../img/header-bg.jpg"
            }" onerror="this.src='../img/header-bg.jpg'" alt="${item.name}" />
            <div class="card-content">
              <h3>${item.name}</h3>
              <p>${item.desc || "Nikmati kelezatan menu pilihan kami."}</p>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                <div class="price">${item.price}</div>
                <button class="add-to-cart-btn" onclick="addToCartFromButton(${index}, '${category}')">🛒 Tambah</button>
              </div>
            </div>
          </div>`;
    })
    .join("");
  window.scrollTo(0, 0);
};

function addToCartFromButton(index, category) {
  const item = menuData[category][index];
  addToCart(item);
}

function hideDetail() {
  document.getElementById("menu-detail-container").style.display = "none";
  document.getElementById("main-menu-selection").style.display = "flex";
  window.location.hash = "#/menu";
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("coffee_cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const badge = document.getElementById("cart-count");
  if (badge) badge.innerText = totalItems;
}

function addToCart(item) {
  let cart = getCart();
  const idx = cart.findIndex((i) => i.name === item.name);
  if (idx !== -1) cart[idx].quantity += 1;
  else cart.push({ ...item, quantity: 1 });
  saveCart(cart);
  updateCartCount();
  showToast(`${item.name} ditambah!`);
}

function changeQty(index, delta) {
  let cart = getCart();
  cart[index].quantity = (cart[index].quantity || 1) + delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function showToast(message) {
  const existingToast = document.querySelector(".toast");
  if (existingToast) existingToast.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `✓ ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(400px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

window.onload = function () {
  const hash = window.location.hash;
  if (hash.includes("?search=")) {
    const searchQuery = decodeURIComponent(hash.split("?search=")[1]);
    showDetail("cold", searchQuery);
  }
  updateCartCount();
  if (document.getElementById("cart-items-container")) {
    renderCart();
  }
};

function getCart() {
  return JSON.parse(localStorage.getItem("coffee_cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("coffee_cart", JSON.stringify(cart));
}

function increaseQuantity(index) {
  let cart = getCart();
  cart[index].quantity += 1;
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function decreaseQuantity(index) {
  let cart = getCart();
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    saveCart(cart);
    renderCart();
    updateCartCount();
  }
}

function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
    <div class="empty-cart">
      <i data-feather="shopping-cart" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem;"></i>
      <p>Keranjang belanja Anda masih kosong</p>
      <a href="#/menu" class="btn-back-menu">Mulai Belanja</a>
    </div>`;

    ["total-items", "subtotal-amount", "tax-amount", "final-total"].forEach(
      (id) => {
        const el = document.getElementById(id);
        if (el) el.innerText = id === "total-items" ? "0" : "Rp 0";
      }
    );

    if (window.feather) feather.replace();
    return;
  }

  let subtotal = 0;
  let totalQty = 0;

  container.innerHTML = cart
    .map((item, index) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ""));
      const itemTotal = price * (item.quantity || 1);
      subtotal += itemTotal;
      totalQty += item.quantity || 1;
      return `
      <div class="cart-item">
    <div class="cart-item-left">
      <img src="${item.img}" onerror="this.src='../img/header-bg.jpg'">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p class="item-price-unit">${item.price}</p>
      </div>
    </div>

    <div class="item-actions">
      <div class="quantity-wrapper">
        <button class="qty-btn minus" onclick="changeQty(${index}, -1)">−</button>
        <span class="qty-number">${item.quantity}</span>
        <button class="qty-btn plus" onclick="changeQty(${index}, 1)">+</button>
      </div>
      <button class="btn-remove" onclick="removeFromCart(${index})" title="Hapus Item">
        <i data-feather="trash-2">🗑️</i>
      </button>
    </div>
  </div>`;
    })
    .join("");

  const tax = subtotal * 0.1;
  document.getElementById("total-items").innerText = totalQty;
  document.getElementById("subtotal-amount").innerText =
    "Rp " + subtotal.toLocaleString("id-ID");
  document.getElementById("tax-amount").innerText =
    "Rp " + Math.round(tax).toLocaleString("id-ID");
  document.getElementById("final-total").innerText =
    "Rp " + Math.round(subtotal + tax).toLocaleString("id-ID");
}

window.addEventListener("hashchange", () => {
  setTimeout(renderCart, 200);
});

window.onload = () => {
  updateCartCount();
  renderCart();
};

function checkout() {
  if (getCart().length === 0) return showToast("Keranjang kosong!");
  showToast("Pesanan Anda sedang diproses.");
  localStorage.removeItem("coffee_cart");
  renderCart();
  updateCartCount();
}

function checkSearchParams() {
  const hash = window.location.hash;
  if (!hash.includes("?")) return;
  const urlParams = new URLSearchParams(hash.split("?")[1]);
  const searchQuery = urlParams.get("search");

  if (searchQuery) {
    let foundCategory = null;
    for (const cat in menuData) {
      const results = menuData[cat].filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (results.length > 0) {
        foundCategory = cat;
        break;
      }
    }
    setTimeout(() => {
      showDetail(foundCategory || "cold", searchQuery);
    }, 100);
  }
}

setTimeout(checkSearchParams, 200);

window.addEventListener("hashchange", function () {
  if (window.location.hash.includes("#/menu")) {
    setTimeout(checkSearchParams, 100);
  }
});

function deleteCartItem(index) {
  if (confirm("Hapus item ini dari keranjang?")) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
    updateCartCount();
  }
}

function formatRupiah(angka) {
  return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
