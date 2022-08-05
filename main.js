const navbarEmail = document.getElementById('navbarEmail');
const desktopMenu = document.getElementById('desktopMenu');
const menuHamIcon = document.getElementById('hamIcon');
const mobileMenu = document.getElementById('mobileMenu');
const productDetail = document.getElementById('productDetail');
const navbarShoppingCart = document.getElementById('navbarShoppingCart');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleNavbarShoppingCart);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleNavbarShoppingCart () {
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}