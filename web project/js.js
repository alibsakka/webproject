document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1; // Starting with the first slide
    showSlides(slideIndex);
  
    function showSlides(index) {
      let slides = document.getElementsByClassName('slide');
  
      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
  
      // Ensure the index is within the valid range
      if (index < 1) {
        slideIndex = slides.length;
      } else if (index > slides.length) {
        slideIndex = 1;
      }
  
      // Display the current slide
      slides[slideIndex - 1].style.display = 'block';
    }
  
    // Function to change slide when navigation buttons are clicked
    function changeSlide(n) {
      showSlides(slideIndex += n);
    }
  
    // Event listeners for navigation buttons
    document.querySelector('.prev').addEventListener('click', function() {
      changeSlide(-1);
    });
  
    document.querySelector('.next').addEventListener('click', function() {
      changeSlide(1);
    });
  
    // Automatic slideshow
    setInterval(function() {
      changeSlide(1); // Move to the next slide every 3 seconds
    }, 3000);
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get references to the login and register buttons
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
  
    // Add event listeners for the buttons
    loginBtn.addEventListener('click', handleLogin);
    registerBtn.addEventListener('click', handleRegister);
  
    function handleLogin() {
      // You can implement login logic here.
      // For a basic example, you can prompt the user for a username and password.
      const username = prompt('Enter your username:');
      const password = prompt('Enter your password:');
  
      // Perform some basic validation (you can extend this with server-side validation).
      if (username && password) {
        alert(`Logged in as ${username} successfully!`);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }
  
    function handleRegister() {
      // You can implement registration logic here.
      // For a basic example, you can prompt the user for a username and password for registration.
      const username = prompt('Choose a username:');
      const password = prompt('Choose a password:');
  
      // Perform some basic validation (you can extend this with server-side validation).
      if (username && password) {
        alert(`Registered with username: ${username} successfully!`);
      } else {
        alert('Invalid input. Please try again.');
      }
    }
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      // Add more users as needed
    ];
  
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const usernameInput = document.getElementById('username').value;
      const passwordInput = document.getElementById('password').value;
  
      // Check if the provided username and password match any user in the 'users' array
      const user = users.find(user => user.username === usernameInput && user.password === passwordInput);
  
      if (user) {
        alert(`Welcome, ${user.username}! You are now logged in.`);
        // You can redirect the user to another page or perform any other actions upon successful login.
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  });
  
  
  
  
  // Array to store the cart items and their quantities
  let cartItems = [];
  
  function addItemToCart(item) {
    // Check if the item is already in the cart
    const itemIndex = cartItems.findIndex(cartItem => cartItem.item === item);
  
    if (itemIndex !== -1) {
      // If the item is already in the cart, increment its quantity
      cartItems[itemIndex].quantity++;
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      cartItems.push({ item: item, quantity: 1 });
    }
  
    // Update the cart count and display it in the cart icon
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = getTotalCartItems();
  }
  
  function getTotalCartItems() {
    // Calculate the total number of items in the cart
    let totalItems = 0;
  
    cartItems.forEach(cartItem => {
      totalItems += cartItem.quantity;
    });
  
    return totalItems;
  }
  
  
    // Initialize the cart count to 0
    let cartCount = 0;
  
    function addToCart() {
      // Increment the cart count when the user clicks the "Add to Cart" button
      cartCount++;
      updateCartIcon();
    }
  
    function updateCartIcon() {
      // Get the cart icon element using its class
      const cartIcon = document.querySelector('.fa-shopping-cart');
  
      // Update the cart icon text to display the current cart count
      cartIcon.textContent = cartCount;
    }
  