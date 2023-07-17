// shopping.js

document.addEventListener('DOMContentLoaded', function() {
    var newItemForm = document.getElementById('new-item-form');
  
    newItemForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var itemName = document.getElementById('item-name').value;
      var itemPrice = document.getElementById('item-price').value;
      var itemRating = document.getElementById('item-rating').value;
      var itemImage = document.getElementById('item-image').value;
  
      // Perform form field validation
      if (itemName.trim() === '') {
        alert('Please enter the item name.');
        return;
      }
  
      if (itemPrice.trim() === '' || isNaN(itemPrice)) {
        alert('Please enter a valid item price.');
        return;
      }
  
      if (itemRating.trim() === '' || isNaN(itemRating) || itemRating < 0 || itemRating > 5) {
        alert('Please enter a valid item rating (between 0 and 5).');
        return;
      }
  
      if (itemImage.trim() === '') {
        alert('Please enter the item image URL.');
        return;
      }
  
      var newItem = {
        name: itemName,
        price: parseFloat(itemPrice),
        rating: parseFloat(itemRating),
        image: itemImage
      };
  
      saveNewItem(newItem);
  
      newItemForm.reset();
    });
  });
  
  function saveNewItem(item) {
    // Perform any necessary backend operations here
    // For example, you can send an HTTP request to your server to save the item data
    // You can use JavaScript fetch API, XMLHttpRequest, or any other library for making the HTTP request
    // This is just a placeholder function, and you need to implement the actual saving logic based on your backend setup
    console.log('Saving new item:', item);
  }
  