// call the flower products
const flowerItems = document.querySelectorAll('.flower-item');

// add product to cart 
function addToCart(event) {
  // Get the product ID 
  const productId = event.target.dataset.productId;

  // Find the corresponding flower item in the flowerItems list
  const flowerItem = Array.from(flowerItems).find(item => item.querySelector('.add-to-cart-button').dataset.productId === productId);

  // Get the flower name and price 
  const flowerName = flowerItem.querySelector('h3').textContent;
  const flowerPrice = flowerItem.querySelector('p').textContent;

  // send a new item to the cart 
  const cartItem = {
    id: productId,
    name: flowerName,
    price: flowerPrice
  };

  // storage the product in valible and give massage with that
  addToLocalStorage(cartItem);

  
  alert(`${flowerName} has been added to the cart!`);
}


function addToLocalStorage(item) {

  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new item to the cart items
  cartItems.push(item);

  // 
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// click event listeners to the "Add to Cart" buttons
flowerItems.forEach(item => {
  const addToCartButton = item.querySelector('.add-to-cart-button');
  addToCartButton.addEventListener('click', addToCart);
});
