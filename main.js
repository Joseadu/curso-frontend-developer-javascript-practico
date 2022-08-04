const navbarEmail = document.getElementById('navbarEmail');
const desktopMenu = document.getElementById('desktopMenu');

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}