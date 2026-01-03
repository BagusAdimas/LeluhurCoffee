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
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Database menu
const menuData = {
  cold: [
    {
      name: "Iced Latte",
      price: "Rp 25.000",
      desc: "Espresso dengan susu dingin segar.",
      img: "../img/Iced Latte.jpeg",
    },
    {
      name: "Cold Brew",
      price: "Rp 30.000",
      desc: "Kopi ekstraksi dingin selama 12 jam.",
      img: "../img/Cold Brew.jpg",
    },
    {
      name: "Iced Americano",
      price: "Rp 20.000",
      desc: "Espresso dengan es batu dan air.",
      img: "../img/Iced Americano.jpg",
    },
    {
      name: "Iced Nutella Latte",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan nutella.",
      img: "../img/Iced Nutella Latte.jpg",
    },
    {
      name: "Iced Matcha Latte",
      price: "Rp 30.000",
      desc: "Bubuk matcha dengan susu dingin.",
      img: "../img/Iced Matcha Latte.jpg",
    },
    {
      name: "Iced Mochaccino",
      price: "Rp 38.000",
      desc: "Espresso dengan susu dingin dan cokelat.",
      img: "../img/Iced Mochaccino.jpeg",
    },
    {
      name: "Iced Caramel Macchiato",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan karamel.",
      img: "../img/Iced Caramel Macchiato.jpeg",
    },
    {
      name: "Iced Brown Sugar Latte",
      price: "Rp 28.000",
      desc: "Espresso dengan susu dingin dan brown sugar.",
      img: "../img/Iced Brown Sugar Latte.jpg",
    },
    {
      name: "Sea Salt Cloud Chocolate",
      price: "Rp 33.000",
      desc: "Espresso dengan krim cloud dan cokelat.",
      img: "../img/Sea Salt Cloud Chocolate.jpg",
    },
    {
      name: "Iced Cappuccino",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan busa susu.",
      img: "../img/Iced Cappucino.jpg",
    },
  ],
  hot: [
    {
      name: "Hot Cappuccino",
      price: "Rp 22.000",
      desc: "Espresso dengan busa susu tebal dan cokelat bubuk.",
      img: "../img/Hot Cappucino.jpg",
    },
    {
      name: "Hot Americano",
      price: "Rp 18.000",
      desc: "Espresso klasik dengan air panas.",
      img: "../img/Hot Americano.jpg",
    },
    {
      name: "Hot Latte",
      price: "Rp 25.000",
      desc: "Espresso dengan steamed milk yang lembut.",
      img: "../img/Hot Latte.jpg",
    },
    {
      name: "Espresso Shot",
      price: "Rp 15.000",
      desc: "Espresso murni dengan rasa kuat dan pekat.",
      img: "../img/Espresso Shot.jpg",
    },
    {
      name: "Hot Chocolate",
      price: "Rp 28.000",
      desc: "Espresso dengan busa susu tebal dan cokelat bubuk.",
      img: "../img/Hot Chocolate.jpg",
    },
    {
      name: "Hot Mocha",
      price: "Rp 32.000",
      desc: "Espresso dengan busa susu tebal dan cokelat bubuk.",
      img: "../img/Hot Mocha.jpg",
    },
    {
      name: "Hot Caramel Macchiato",
      price: "Rp 34.000",
      desc: "Espresso dengan busa susu tebal dan caramel sauce.",
      img: "../img/Hot Caramel Macchiato.jpg",
    },
    {
      name: "Flat White",
      price: "Rp 25.000",
      desc: "Espresso dengan susu steam tanpa foam.",
      img: "../img/Flat White.jpg",
    },
    {
      name: "Hot Matcha Latte",
      price: "Rp 34.000",
      desc: "Bubuk matcha dengan susu panas.",
      img: "../img/Hot Matcha Latte.jpg",
    },
    {
      name: "Hot Tea",
      price: "Rp 18.000",
      desc: "Teh panas dengan rasa yang lembut dan hangat.",
      img: "../img/Hot Tea.jpg",
    },
  ],
  pastry: [
    {
      name: "Cinnamon Roll",
      price: "Rp 20.000",
      desc: "Roti kayu manis yang lembut dan manis.",
      img: "../img/Cinnamon Roll.jpg",
    },
    {
      name: "Croissant",
      price: "Rp 22.000",
      desc: "Pastry renyah mentega khas Perancis.",
      img: "../img/Croissant.jpg",
    },
    {
      name: "Choco Muffin",
      price: "Rp 15.000",
      desc: "Muffin cokelat panggang dengan choco chips.",
      img: "../img/Choco Muffin.jpg",
    },
    {
      name: "Almond Croissant",
      price: "Rp 25.000",
      desc: "Pastry renyah mentega khas Perancis dengan almond.",
      img: "../img/Almond Croissant.jpg",
    },
    {
      name: "Blueberry Muffin",
      price: "Rp 15.000",
      desc: "Muffin blueberry panggang dengan blueberry chips.",
      img: "../img/Bluberry Muffin.jpg",
    },
    {
      name: "Choco Danish",
      price: "Rp 23.000",
      desc: "Pastry cokelat dengan krim dan choco chips.",
      img: "../img/Choco Danish.jpg",
    },
    {
      name: "Tiramisu Cake",
      price: "Rp 38.000",
      desc: "Layer cake dengan rasa kopi dan krim mascarpone.",
      img: "../img/Tiramisu Cake.jpg",
    },
    {
      name: "Cheesecake",
      price: "Rp 35.000",
      desc: "Kue keju lembut dengan crust renyah.",
      img: "../img/Cheesecake.jpg",
    },
    {
      name: "Chocolate Fudge Cake",
      price: "Rp 38.000",
      desc: "Kue cokelat lembut dengan lapisan fudge kaya rasa.",
      img: "../img/Choco Fudge Cake.jpg",
    },
    {
      name: "Banana Bread",
      price: "Rp 30.000",
      desc: "Roti pisang lembut dengan rasa manis.",
      img: "../img/Banana Bread.jpg",
    },
  ],
};

// Fungsi untuk menampilkan detail kategori atau hasil pencarian
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

  if (items.length === 0) {
    detailList.innerHTML = `
        <div class="no-results">
          <h3>Tidak Ada Hasil</h3>
          <p>Menu "${query}" tidak ditemukan. Silakan coba kata kunci lain.</p>
        </div>
      `;
    return;
  }

  detailList.innerHTML = items
    .map(
      (item) => `
      <div class="cold-menu" style="margin-bottom: 25px; cursor: default;">
        <img src="${item.img || "../img/header-bg.jpg"}" class="menu-img" 
             onerror="this.src='../img/header-bg.jpg'" />
        <div class="menu-info">
          <h2>${item.name}</h2>
          <p>${item.desc || "Nikmati kelezatan menu pilihan kami."}</p>
          <p class="price" style="margin-top: 10px; font-size: 1.2rem;">${
            item.price
          }</p>
        </div>
      </div>
    `
    )
    .join("");

  window.scrollTo(0, 0);
};

window.hideDetail = function () {
  const mainSection = document.getElementById("main-menu-selection");
  const detailSection = document.getElementById("menu-detail-container");

  if (mainSection && detailSection) {
    detailSection.style.display = "none";
    mainSection.style.display = "flex";
    window.history.replaceState({}, document.title, "#/menu");
    window.scrollTo(0, 0);
  }
};

// Fungsi untuk cek parameter search dari URL
function checkSearchParams() {
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.split("?")[1]);
  const searchQuery = urlParams.get("search");

  if (searchQuery) {
    console.log("Search query detected:", searchQuery);

    // Cari di semua kategori
    let foundCategory = null;
    let allResults = [];

    for (const cat in menuData) {
      const results = menuData[cat].filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (results.length > 0) {
        foundCategory = cat;
        allResults = allResults.concat(results);
      }
    }

    if (foundCategory) {
      // Tampilkan hasil dari kategori pertama yang ditemukan
      setTimeout(() => {
        showDetail(foundCategory, searchQuery);
      }, 100);
    } else {
      // Jika tidak ada hasil, tetap tampilkan dengan pesan kosong
      setTimeout(() => {
        showDetail("cold", searchQuery);
      }, 100);
    }
  }
}

// Jalankan saat halaman dimuat
setTimeout(checkSearchParams, 200);

// Listen untuk perubahan hash
window.addEventListener("hashchange", function () {
  if (window.location.hash.includes("#/menu")) {
    setTimeout(checkSearchParams, 100);
  }
});

/* =========================================
   LOGIKA KERANJANG BELANJA (CART SYSTEM)
   ========================================= */

// 1. Data Dummy (Simulasi data belanjaan)
let cartData = [
  {
    id: 1,
    name: "Iced Caramel Macchiato",
    price: 35000,
    qty: 1,
    img: "img/Unknown.jpeg",
  },
  {
    id: 2,
    name: "Croissant",
    price: 22000,
    qty: 2,
    img: "img/hot-beverages.jpg",
  },
  {
    id: 3,
    name: "Cold Brew",
    price: 30000,
    qty: 1,
    img: "img/Cold Brew.jpeg",
  },
];

// 2. Fungsi untuk Menampilkan (Render) Cart ke HTML
function renderCart() {
  const container = document.getElementById("cart-items-container");
  const totalItemsEl = document.getElementById("total-items");
  const finalTotalEl = document.getElementById("final-total");
  const taxEl = document.getElementById("tax-amount");

  // Cek apakah elemen ada (karena fungsi ini global, tapi elemen hanya ada di halaman cart)
  if (!container) return;

  // Jika keranjang kosong
  if (cartData.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px;">
        <i data-feather="shopping-cart" style="width: 50px; height: 50px; color: #ccc;"></i>
        <p>Keranjang Anda kosong.</p>
        <a href="#/menu" style="color: #b6895b; text-decoration: underline;">Belanja Sekarang</a>
      </div>
    `;
    totalItemsEl.innerText = "0";
    finalTotalEl.innerText = "Rp 0";
    taxEl.innerText = "Rp 0";
    if (window.feather) feather.replace();
    return;
  }

  // Jika ada isi, buat HTML-nya
  let html = "";
  let subtotal = 0;
  let totalQty = 0;

  cartData.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    totalQty += item.qty;

    html += `
      <div class="cart-item">
        <img src="${item.img}" alt="${
      item.name
    }" onerror="this.src='img/header-bg.jpg'">
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>Jumlah: ${item.qty} x ${formatRupiah(item.price)}</p>
          <div class="item-price">Total: ${formatRupiah(itemTotal)}</div>
        </div>
        <div class="item-actions">
          <button class="btn-remove" onclick="deleteCartItem(${index})">
            <i data-feather="trash-2"></i> Hapus
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Hitung Pajak dan Total
  const tax = subtotal * 0.1; // Pajak 10%
  const grandTotal = subtotal + tax;

  // Update Text Ringkasan
  totalItemsEl.innerText = totalQty + " pcs";
  taxEl.innerText = formatRupiah(tax);
  finalTotalEl.innerText = formatRupiah(grandTotal);

  // Render icon trash
  if (window.feather) feather.replace();
}

// 3. Fungsi Menghapus Item
function deleteCartItem(index) {
  // Konfirmasi penghapusan
  if (confirm("Hapus item ini dari keranjang?")) {
    cartData.splice(index, 1); // Hapus data dari array
    renderCart(); // Render ulang tampilan
  }
}

// 4. Helper: Format Rupiah
function formatRupiah(angka) {
  return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
