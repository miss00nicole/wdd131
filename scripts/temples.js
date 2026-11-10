
// Dynamic copyright year
document.getElementById("copyrightYear").textContent = new Date().getFullYear();

// Dynamic last modified date
document.getElementById("lastModifiedDate").textContent = document.lastModified;

// Hamburger menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const primaryNav = document.getElementById("primaryNav");

hamburgerBtn.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
});