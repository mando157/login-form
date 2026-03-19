const form = document.getElementById('loginForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Form submitted!");
});

const card = document.querySelector('.login-card');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.add('active');
});

showLogin.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.remove('active');
});