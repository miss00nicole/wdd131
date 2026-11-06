const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menuBtn.textContent = mainNav.classList.contains('open') ? '✕' : '☰';
});

document.getElementById('copyrightYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
