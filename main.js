const navbarEmail = document.getElementById('navbarEmail');
const desktopMenu = document.getElementById('desktopMenu');
const menuHamIcon = document.getElementById('hamIcon');
const mobileMenu = document.getElementById('mobileMenu');
const productDetail = document.getElementById('productDetail');
const navbarShoppingCart = document.getElementById('navbarShoppingCart');
const productDetailSecondary = document.getElementById('productDetailSecondary');
const productDetailSecondaryClose = document.getElementById('productDetailSecondaryClose');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleNavbarShoppingCart);
productDetailSecondaryClose.addEventListener('click', toggleProductDetailSecondaryClose);

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

function openProductDetail () {
    productDetailSecondary.classList.remove('inactive');
}

function toggleProductDetailSecondaryClose () {
    productDetailSecondary.classList.add('inactive');
}


// CREAR LISTA DE PRODUCTOS AUTOMATICAMENTE

const productList = [];

productList.push({
    name: 'Portátil',
    price: '1000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Teclado',
    price: '70',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Ratón',
    price: '50',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


// // GENERAR PRODUCTOS AUTOMÁTICAMENTE

// for (product of productList) {

//     const htmlCards = 
//     `
//     <div class="product-card">
//         <img src=${product.image} alt="">
//         <div class="product-info">
//           <div>
//             <p>$${product.price}</p>
//             <p>${product.name}</p>
//           </div>

//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>
//     `

//     const cardsContainer = document.getElementById('cardsContainer');
//     cardsContainer.innerHTML += htmlCards;
// }

for (product of productList) {

    // Crear todos los atributos necesarios añadiéndoles su clase necesaria y previamente maquetadas en CSS

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productCardImg = document.createElement('img');
    productCardImg.setAttribute('src', product.image);
    productCardImg.addEventListener('click', openProductDetail)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDescription = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');

    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');



    // Ahora hay que asignarles a cada elemento su contenedor padre

    productInfoFigure.appendChild(productInfoFigureImg);

    productInfoDescription.append(productPrice, productName);

    productInfo.append(productInfoDescription, productInfoFigure);

    productCard.append(productCardImg, productInfo);

    let cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.appendChild(productCard);
}