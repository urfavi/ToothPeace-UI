const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const backToLogin = document.getElementById('backToLogin');
const loginForm = document.getElementById('loginForm');

// Show sign-up form
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Show login form
backToLogin.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Handle login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Here, you can add authentication logic if needed

    // Redirect to admin dashboard upon successful login
    location.href = 'admin_dashboard.html';
});