// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form values
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var content = document.getElementById('content').value;
  
    // Create a new post element
    var post = document.createElement('div');
    post.className = 'post';
  
    // Create post header
    var postHeader = document.createElement('div');
    postHeader.className = 'post-header';
  
    var postTitle = document.createElement('h2');
    postTitle.className = 'post-title';
    postTitle.textContent = title;
  
    var postAuthor = document.createElement('p');
    postAuthor.className = 'post-author';
    postAuthor.textContent = 'Posted by: ' + author;
  
    postHeader.appendChild(postTitle);
    postHeader.appendChild(postAuthor);
  
    // Create post content
    var postContent = document.createElement('div');
    postContent.className = 'post-content';
  
    var postContentText = document.createElement('p');
    postContentText.textContent = content;
  
    postContent.appendChild(postContentText);
  
    //content to the post element
    post.appendChild(postHeader);
    post.appendChild(postContent);
  
    // Create post button
    var postButton = document.createElement('button');
    postButton.className = 'post-button';
    postButton.textContent = 'Post a Reply';
  
    // Add post button 
    postButton.addEventListener('click', function() {
      //post reply functionality here
      console.log('Reply button clicked');
    });
  
    //post and button to the discussion container
    var discussionContainer = document.querySelector('.discussion-container');
    discussionContainer.appendChild(post);
    discussionContainer.appendChild(postButton);
  
    // Reset form values
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('content').value = '';
  }
  
  // Add event listener to the form submission
  var postForm = document.getElementById('post-form');
  postForm.addEventListener('submit', handleFormSubmission);
/////////////////////////////////////////////////////////////////////////////
  // JavaScript code for search functionality
function search() {
  // Get the search input value
  var searchInput = document.getElementById("search-input").value;
  
  // Perform search functionality (e.g., redirect to search results page)
  // Replace the 'search-results.html' with the actual search results page
  window.location.href = "search-results.html?query=" + searchInput;
}

// JavaScript code for cart functionality
function addToCart(productId) {
  // Perform cart functionality (e.g., add the product to the cart)
  console.log("Product added to cart: " + productId);
}

function removeFromCart(productId) {
  // Perform cart functionality (e.g., remove the product from the cart)
  console.log("Product removed from cart: " + productId);
}

  