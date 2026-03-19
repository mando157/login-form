//* Animation of the cards

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

//* POP UP Animation 


const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signupForm');
const loginPopUP = document.getElementById('login-popup');
const signUpPopUP = document.getElementById('signup-popup');
const okButtonL = document.getElementById('ok-button-l');
const okButtonS = document.getElementById('ok-button-s');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    setTimeout(loginPopUP.style.transform = 'translate(-50% , 0)', 2000);

});

okButtonL.addEventListener("click", function (e) {
    setTimeout(loginPopUP.style.transform = 'translate(-50% , -100%)', 2000);
})

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    setTimeout(signUpPopUP.style.transform = 'translate(-50% , 0)', 2000);

});

okButtonS.addEventListener("click", function (e) {
    setTimeout(signUpPopUP.style.transform = 'translate(-50% , -100%)', 2000);
})


//* Validation

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email.includes("@")) {
        alert("Enter a Valid email!");
        return;
    }

    if (password === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        setTimeout(loginPopUP.style.transform = 'translate(-50% , -100%)', 2000);
        return;
    }
})
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        setTimeout(signUpPopUP.style.transform = 'translate(-50% , -100%)', 2000);
        return;
    }
});