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

// Data Menu Global
const menuData = {
  cold: [
    {
      name: "Iced Latte",
      price: "Rp 25.000",
      desc: "Espresso dengan susu dingin segar.",
    },
    {
      name: "Cold Brew",
      price: "Rp 30.000",
      desc: "Kopi ekstraksi dingin selama 12 jam.",
    },
    {
      name: "Iced Americano",
      price: "Rp 20.000",
      desc: "Espresso dengan es batu dan air.",
    },
    {
      name: "Iced Nutella Latte",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan nutella.",
    },
    {
      name: "Iced Matcha Latte",
      price: "Rp 30.000",
      desc: "Bubuk matcha dengan susu dingin.",
    },
    {
      name: "Iced Mochaccino",
      price: "Rp 38.000",
      desc: "Espresso dengan susu dingin dan cokelat.",
    },
    {
      name: "Iced Caramel Macchiato",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan karamel.",
    },
    {
      name: "Iced Brown Sugar Latte",
      price: "Rp 28.000",
      desc: "Espresso dengan susu dingin dan brown sugar.",
    },
    {
      name: "Sea Salt Cloud Chocolate",
      price: "Rp 33.000",
      desc: "Espresso dengan krim cloud dan cokelat.",
    },
    {
      name: "Iced Cappuccino",
      price: "Rp 35.000",
      desc: "Espresso dengan susu dingin dan busa susu.",
    },
    
  ],
  hot: [
    {
      name: "Cappuccino",
      price: "Rp 22.000",
      desc: "Espresso dengan busa susu tebal dan cokelat bubuk.",
    },
    {
      name: "Hot Americano",
      price: "Rp 18.000",
      desc: "Espresso klasik dengan air panas.",
    },
    {
      name: "Cafe Latte",
      price: "Rp 25.000",
      desc: "Espresso dengan steamed milk yang lembut.",
    },
  ],
  pastry: [
    {
      name: "Cinnamon Roll",
      price: "Rp 20.000",
      desc: "Roti kayu manis yang lembut dan manis.",
    },
    {
      name: "Croissant",
      price: "Rp 22.000",
      desc: "Pastry renyah mentega khas Perancis.",
    },
    {
      name: "Choco Muffin",
      price: "Rp 15.000",
      desc: "Muffin cokelat panggang dengan choco chips.",
    },
  ],
};

// Fungsi untuk menampilkan detail
function showDetail(category) {
  const mainSelection = document.getElementById("main-menu-selection");
  const detailContainer = document.getElementById("menu-detail-container");
  const detailTitle = document.getElementById("detail-title");
  const detailList = document.getElementById("detail-list");

  if (!mainSelection || !detailContainer) return;

  detailTitle.innerText = category.toUpperCase() + " MENU";
  detailList.innerHTML = "";

  menuData[category].forEach((item) => {
    detailList.innerHTML += `
      <div class="menu-item-card">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div style="font-weight:bold; margin-top:10px; color: #b6895b;">${item.price}</div>
      </div>
    `;
  });

  mainSelection.style.display = "none";
  detailContainer.style.display = "block";

  if (typeof feather !== "undefined") feather.replace();
  window.scrollTo(0, 0);
}

// Fungsi untuk kembali
function hideDetail() {
  const mainSelection = document.getElementById("main-menu-selection");
  const detailContainer = document.getElementById("menu-detail-container");

  if (mainSelection && detailContainer) {
    detailContainer.style.display = "none";
    mainSelection.style.display = "flex";
    window.scrollTo(0, 0);
  }
}