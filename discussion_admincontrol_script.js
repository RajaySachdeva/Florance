// Delete All Posts
const deleteAllButton = document.getElementById("delete-all-button");
deleteAllButton.addEventListener("click", () => {
  const postsContainer = document.querySelector(".discussion-container");
  postsContainer.innerHTML = "";
});

// Edit Post
const editButtons = document.querySelectorAll(".edit-button");
editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const post = button.closest(".post");
    const content = post.querySelector(".post-content");
    const newText = prompt("Enter the new content:");
    if (newText) {
      content.textContent = newText;
    }
  });
});

// Delete Post
const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const post = button.closest(".post");
    post.remove();
  });
});

// Search Functionality
document.getElementById("search-button").addEventListener("click", function () {
  var searchTerm = document.getElementById("search-input").value.toLowerCase();
  var posts = document.getElementsByClassName("post");

  // Loop through each post and hide/show based on search term
  for (var i = 0; i < posts.length; i++) {
    var postContent = posts[i].getElementsByClassName("post-content")[0].innerText.toLowerCase();
    if (postContent.includes(searchTerm)) {
      posts[i].style.display = "block";
    } else {
      posts[i].style.display = "none";
    }
  }
});

// User Management
var users = ["Pruthviraj Mariwad", "Justin Trudeau", "Jack Ryan", ]; // Replace with your actual user list

function renderUserList() {
  var userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Clear the existing list

  for (var i = 0; i < users.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = users[i];
    userList.appendChild(listItem);
  }
}

renderUserList();
