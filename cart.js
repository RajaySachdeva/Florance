// Get the cart items from local stoage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to calculate the total price of the cart
// ...............here need to check this function i dont now you dosent work...........??
function calculateTotal() {
  let total = 0;

  cartItems.forEach(item => {
    item.price=item.price.substring((item.price.indexOf("$")+1));
       const price = parseFloat(item.price);
    total += price;
   
  });

  return total.toFixed(2);
}

// show the cart items in the screen
function renderCartItems() {
  const cartList = document.getElementById('cart-list');

  // Clear the existing cart items
  cartList.innerHTML = '';

  // show the div, h4, and p
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    const itemNameElement = document.createElement('h4');
    itemNameElement.textContent = item.name;

    const itemPriceElement = document.createElement('p');
    itemPriceElement.textContent = item.price;

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartList.appendChild(cartItemElement);
  });

  // Calculate the total price//..................................not work .........??
  const cartTotalElement = document.getElementById('cart-total');
  cartTotalElement.textContent = `$${calculateTotal()}`;
}

// Function to handle the checkout process
function checkout() {
  // empty local storage
  localStorage.removeItem('cartItems');

  // Clear the cart items array
  cartItems = [];

  //  empty cart
  renderCartItems();

  //  message
  alert('Thank you for your purchase! Your order has been placed.');
}

// initial cart items
renderCartItems();

// Attach click event listener to the checkout button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', checkout);
