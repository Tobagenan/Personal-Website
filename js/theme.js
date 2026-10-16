
function setTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");

  const lightOption = document.getElementById("light-option");
  const darkOption = document.getElementById("dark-option");

  if (lightOption) {
    lightOption.style.display = theme === "dark" ? "block" : "none";
  }

  if (darkOption) {
    darkOption.style.display = theme === "dark" ? "none" : "block";
  }

  localStorage.setItem("theme", theme);
}

// Apply the saved theme when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});
