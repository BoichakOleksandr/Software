// Перемикач теми
const root = document.documentElement;
function toggleTheme() {
  const dark = root.dataset.theme === "dark";
  root.dataset.theme = dark ? "light" : "dark";
};

document.querySelector("#change_theme").addEventListener("click", () => {
  const isDark = root.dataset.theme === "dark";
  root.dataset.theme = isDark ? "light" : "dark";
});

// Перевірка форми
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const email = e.target.querySelector("input").value;
  alert(/^\S+@\S+\.\S+$/.test(email) ? "Дякуємо за підписку!" : "Введіть коректний e-mail");
});