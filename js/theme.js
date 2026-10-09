// The theme switch is the site's only JavaScript; forms use native HTML.
const root = document.documentElement;
let savedTheme;
try {
  savedTheme = localStorage.getItem("retrocadia-theme");
} catch {
  /* Storage may be disabled. */
}
const systemTheme = matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
root.dataset.theme = ["light", "dark"].includes(savedTheme)
  ? savedTheme
  : systemTheme;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  button.hidden = false;
  const updateButton = () =>
    button.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));
  updateButton();
  button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    updateButton();
    try {
      localStorage.setItem("retrocadia-theme", root.dataset.theme);
    } catch {
      /* Theme still works on this page. */
    }
  });
});
