const form = document.getElementById('loginForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Form submitted!");
});



const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');

showSignup.addEventListener('click', function (e) {
    e.preventDefault();
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
    loginContainer.style.opacity = '0';
    signupContainer.style.opacity = '1';
});

showLogin.addEventListener('click', function (e) {
    e.preventDefault();
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    signupContainer.style.opacity = '0';
    loginContainer.style.opacity = '1';

});