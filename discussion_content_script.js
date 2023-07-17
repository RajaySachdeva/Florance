// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the necessary elements
    var postForm = document.getElementById("post-form");
    var discussionContainer = document.getElementById("discussion-container");
  
    // Event listener for form submission
    postForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the form values
      var title = document.getElementById("title").value;
      var author = document.getElementById("author").value;
      var content = document.getElementById("content").value;
  
      // Create a new discussion post element
      var newPost = createDiscussionPost(title, author, content);
  
      // Append the new post to the discussion container
      discussionContainer.appendChild(newPost);
  
      // Reset the form fields
      postForm.reset();
    });
  
    // Function to create a discussion post element
    function createDiscussionPost(title, author, content) {
      // Create the necessary HTML elements
      var post = document.createElement("div");
      post.classList.add("post");
  
      var postHeader = document.createElement("div");
      postHeader.classList.add("post-header");
  
      var postTitle = document.createElement("h2");
      postTitle.classList.add("post-title");
      postTitle.textContent = title;
  
      var postAuthor = document.createElement("p");
      postAuthor.classList.add("post-author");
      postAuthor.textContent = "Posted by: " + author;
  
      var postActions = document.createElement("div");
      postActions.classList.add("post-actions");
  
      var editButton = document.createElement("button");
      editButton.classList.add("edit-button");
      editButton.textContent = "Edit";
  
      var deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.textContent = "Delete";
  
      var postContent = document.createElement("div");
      postContent.classList.add("post-content");
      postContent.textContent = content;
  
      var postButton = document.createElement("button");
      postButton.classList.add("post-button");
      postButton.textContent = "Post a Reply";
  
      // Append the elements to their respective parents
      postActions.appendChild(editButton);
      postActions.appendChild(deleteButton);
  
      postHeader.appendChild(postTitle);
      postHeader.appendChild(postAuthor);
      postHeader.appendChild(postActions);
  
      post.appendChild(postHeader);
      post.appendChild(postContent);
      post.appendChild(postButton);
  
      return post;
    }
  });
  