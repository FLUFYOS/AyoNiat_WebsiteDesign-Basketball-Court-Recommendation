const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('nav-link');

// Alihkan buka/tutup menu
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active')
    hamburger.classList.toggle('active');
    navLink.classList.toggle('open');
});

// Menutup mentu jika di klik di luar area navbar
document.addEventListener('click', (e) => {
    const isClickInsideNav = e.target.closest('.navbar');
    if(!isClickInsideNav) {
        hamburger.classList.remove('active');
        navLink.classList.remove('open');
    }
});