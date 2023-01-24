// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    let midaArrProducts = PRODUCTS.length;

    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < midaArrProducts; i++) {
        if (PRODUCTS[i].id === id) {
            // 2. Add found product to the cartList array
            cartList.push(PRODUCTS[i]);
            calculateTotal();
            break; // Finaliza iteración para no sobrecargar aplicación al recorrer todo el array
        }
    }
} // Con ES6 se podría utilizar .find()

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    total = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    let midaArrCartList = cartList.length; // Variable medida array evita consulta en cada iteración.

    for (let i = 0; i < midaArrCartList; i++) {
        total += cartList[i].price;
    }
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cart.length = 0; // Inicializada para evitar repeticiones al añadir nuevos productos
    let found, lastCartItem, midaArrCartList = cartList.length;

    for (let i = 0; i < midaArrCartList; i++) {
        found = cart.findIndex((element) => element.id === cartList[i].id);

        if (found === -1) {
            cart.push(cartList[i]);
            lastCartItem = cart.at(-1); // Devuelve cart[cart.length - 1] Último elemento del array.
            lastCartItem.quantity = 1;
            lastCartItem.subtotal = lastCartItem.price * lastCartItem.quantity;
            lastCartItem.subtotalWithDiscount = lastCartItem.subtotal; // Reservamos propiedad para calcular más adelante
        } else {
            cart[found].quantity++;
            cart[found].subtotal = cart[found].price * cart[found].quantity;
            cart[found].subtotalWithDiscount = cart[found].subtotal;
        }
    }
    applyPromotionsCart()
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let item of cart) {

        if (item.name === 'cooking oil' && item.quantity > 2) {
            item.subtotalWithDiscount = item.quantity * 10;
            continue;
        }

        if (item.name === 'Instant cupcake mixture' && item.quantity > 9) {
            item.subtotalWithDiscount *= (2 / 3);
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
