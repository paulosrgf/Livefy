// Livefy — theme toggle (shared by index.html and player.html)
(function () {
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const icon = document.querySelector("#theme-toggle .bi");
    if (icon) {
      icon.classList.toggle("bi-moon-stars-fill", theme === "dark");
      icon.classList.toggle("bi-sun-fill", theme === "light");
    }
  }

  // Applied immediately (script is not deferred) so there's no flash on load.
  applyTheme(localStorage.getItem("livefy-theme") ?? "dark");

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("livefy-theme", next);
      applyTheme(next);
    });
  });
})();
