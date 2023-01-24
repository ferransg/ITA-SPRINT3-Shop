// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// Comentado para corrección
/*
function buy(id) {
    let midaArrProducts = PRODUCTS.length;

    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < midaArrProducts; i++) {
        if (PRODUCTS[i].id === id) {
            // 2. Add found product to the cartList array
            cartList.push(PRODUCTS[i]);
            break; // Finaliza iteración para no sobrecargar aplicación al recorrer todo el array
        }
    }
}
*/

// Exercise 2
function cleanCart() {
    let confirmar = confirm("Are you sure you want to remove your cart?");

    if (confirmar) {
        cartList.length = 0;
        cart.length = 0;
        total = 0;
        printCart();
    };
}

// Exercise 3

/* Versión anterior comentada para corrección:

function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    let midaArrCartList = cartList.length; // Variable medida array evita consulta en cada iteración.

    for (let i = 0; i < midaArrCartList; i++) {
        total += cartList[i].price;
    }
}
*/

// Misma función pero con el total con los descuentos incluidos:
function calculateTotal() {
    // Calculate total price of the cart
    total = 0;
    let midaArrCart = cart.length; // Variable medida array evita consulta en cada iteración.

    for (let i = 0; i < midaArrCart; i++) {
        total += cart[i].subtotalWithDiscount;
    }
}

// Exercise 4
// Comentado para corrección
/*
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
    applyPromotionsCart();
}
*/

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let item of cart) {

        if (item.name === 'cooking oil' && item.quantity > 2) {
            item.subtotalWithDiscount = item.quantity * 10;
            continue;
        }

        if (item.name === 'Instant cupcake mixture' && item.quantity > 9) {
            item.subtotalWithDiscount = Math.round(item.quantity * (item.price * 2 / 3) * 100) / 100;
            // Devuelve number con 2 decimales (Number() con .toFixed(2) redondean de forma no deseada)
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    document.querySelectorAll("#cart_list tr").forEach(element => element.remove()); // Limpia la plantilla modal

    let modalList = document.querySelector("#cart_list");
    let midaArrCart = cart.length;

    for (let i = 0; i < midaArrCart; i++) {
        modalList.innerHTML +=
            `<tr>
                <th scope="row">${cart[i].name}</th>
                <td>€${cart[i].price}</td>
                <td>${cart[i].quantity}</td>
                <td>€${cart[i].subtotalWithDiscount}</td>
            </tr>`;
    }

    let modalTotalPrice = document.querySelector("#total_price");
    modalTotalPrice.innerHTML = Math.round(total * 100) / 100;
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let found, lastCartItem;

    for (let product of PRODUCTS) {

        if (product.id === id) {
            found = cart.findIndex((element) => element.id === product.id);

            if (found === -1) {
                cart.push(product);
                lastCartItem = cart.at(-1); // Devuelve último elemento del array.
                lastCartItem.quantity = 1;
                lastCartItem.subtotal = lastCartItem.price * lastCartItem.quantity;
                lastCartItem.subtotalWithDiscount = lastCartItem.subtotal; // Reservamos propiedad para calcular más adelante
            } else {
                cart[found].quantity++;
                cart[found].subtotal = cart[found].price * cart[found].quantity;
                cart[found].subtotalWithDiscount = cart[found].subtotal;
            }
            applyPromotionsCart();
        }
    }
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    addToCart();
    calculateTotal();
    printCart();
}
