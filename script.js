const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    toggle.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.textContent = "☰";
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

// Prevent unfinished social-profile placeholders from navigating to the top.
document.querySelectorAll("[data-placeholder]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    alert("Add your verified " + link.dataset.placeholder + " profile URL in index.html before publishing.");
  });
});


// Appearance switcher for the proposed light/dark theme.
const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const themeIcon = document.querySelector(".theme-icon");
const storedTheme = localStorage.getItem("jtn-theme");
const previewTheme = new URLSearchParams(window.location.search).get("theme");
const initialTheme = previewTheme || storedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeLabel) themeLabel.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  if (themeIcon) themeIcon.textContent = theme === "dark" ? "☼" : "◐";
  if (themeButton) themeButton.setAttribute("aria-label", theme === "dark" ? "Switch to light appearance" : "Switch to dark appearance");
}
applyTheme(initialTheme);
if (themeButton) themeButton.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("jtn-theme", next);
  applyTheme(next);
});
