const routes = {
  "/": "pages/home.html",
  "/about": "pages/about.html",
  "/menu": "pages/menu.html",
  "/contact": "pages/contact.html",
  "/search": "pages/search.html",
  "/cart": "pages/cart.html",
};

async function redirect() {
  const hash = window.location.hash || "#/";
  const pathWithQuery = hash.slice(1);
  const path = pathWithQuery.split("?")[0];
  const route = routes[path] || routes["/"];

  // Reset class body untuk styling per halaman
  document.body.className = "";
  const pageClass = path.split("/")[1] || "home";
  document.body.classList.add(`${pageClass}-page`);

  try {
    const response = await fetch(route);
    if (!response.ok) throw new Error("Page not found");
    const html = await response.text();
    document.getElementById("app").innerHTML = html;

    // Render ulang icon feather setelah konten baru masuk
    if (window.feather) {
      feather.replace();
    }
  } catch (error) {
    document.getElementById("app").innerHTML =
      "<div class='error'><h2>404</h2><p>Halaman tidak ditemukan.</p></div>";
    console.error("Routing Error:", error);
  }
}

// Jalankan fungsi saat hash berubah atau saat halaman pertama kali dimuat
window.addEventListener("hashchange", redirect);
window.addEventListener("DOMContentLoaded", redirect);
