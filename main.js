const navbarEmail = document.getElementById('navbarEmail');
const desktopMenu = document.getElementById('desktopMenu');
const menuHamIcon = document.getElementById('hamIcon');
const mobileMenu = document.getElementById('mobileMenu');
const productDetail = document.getElementById('productDetail');
const navbarShoppingCart = document.getElementById('navbarShoppingCart');
const productDetailSecondary = document.getElementById('productDetailSecondary');
const productDetailSecondaryClose = document.getElementById('productDetailSecondaryClose');
const openProductForm = document.getElementById('openProductForm');
const formAddProduct = document.getElementById('formAddProduct');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleNavbarShoppingCart);
productDetailSecondaryClose.addEventListener('click', toggleProductDetailSecondaryClose);
openProductForm.addEventListener('click', toggleOpenProductForm);

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
function toggleOpenProductForm () {
    formAddProduct.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}


// CREAR LISTA DE PRODUCTOS AUTOMATICAMENTE

// EMPIEZA AÑADIR PRODUCTO FORM

let formBtn = document.getElementById('formBtn');

formBtn.addEventListener('click', añadirProductoFunction);

function añadirProductoFunction (event) {
    function Product (title, price, image) {
        this.title = title;
        this.price = price;
        this.image = image;
    }

    let titleProduct = document.getElementById('titleProduct').value;
    let priceProduct = parseInt(document.getElementById('priceProduct').value);
    let imageProduct = document.createElement('img');
    imageProduct.setAttribute('src', './img/bike.jpg');

    let newProduct = new Product (titleProduct, priceProduct, imageProduct);

    const productList = [];

    productList.push(newProduct)

    for (product of productList) {

        // Crear todos los atributos necesarios añadiéndoles su clase necesaria y previamente maquetadas en CSS
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productCardImg = imageProduct;
        imageProduct.addEventListener('click', openProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDescription = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = newProduct.price + '€';
        
        const productName = document.createElement('p');
        productName.innerText = newProduct.title;
    
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

    // HE AÑADIDO TIPO SUBMIT AL BOTÓN DEL FORMULARIO Y PREVENTDEFAULT A LA FUNCIÓN PARA MANDAR EL FORMULARIO Y QUE NO SE RECARGUE LA PÁGINA
    event.preventDefault();
    // LIMPIAR LOS INPUTS DEL FORMULARIO DESPUÉS DE ENVIAR EL FORMULARIO
    myForm.reset();
}