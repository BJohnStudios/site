// Mobile menu + active nav highlighting
(() => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
  }

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
    if (path === "" && href === "index.html") a.classList.add("active");
  });

  // Footer year
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
