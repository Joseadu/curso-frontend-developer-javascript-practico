const navbarEmail = document.getElementById('navbarEmail');
const desktopMenu = document.getElementById('desktopMenu');
const menuHamIcon = document.getElementById('hamIcon');
const mobileMenu = document.getElementById('mobileMenu');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
}