const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/menu": "/pages/menu.html",
  "/contact": "/pages/contact.html",
  "/search": "/pages/search.html",
  "/cart": "/pages/cart.html",
};

async function redirect() {
  const hash = window.location.hash || "#/";
  const path = hash.slice(1);
  const route = routes[path] || routes["/"];

  document.body.className = "";

  switch (path) {
    case "/about":
      document.body.classList.add("about-page");
      break;
    case "/search":
      document.body.classList.add("search-page");
      break;
    case "/menu":
      document.body.classList.add("menu-page");
      break;
  }

  try {
    const response = await fetch(route);
    if (!response.ok) throw new Error();
    const html = await response.text();
    document.getElementById("app").innerHTML = html;
    document.body.classList;
  } catch (error) {
    document.getElementById("app").innerHTML =
      "<div class='error'><h2>404</h2><p>Page not found.</p></div>";
  }
}

window.addEventListener("hashchange", redirect);
window.addEventListener("DOMContentLoaded", redirect);
