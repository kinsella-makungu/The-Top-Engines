// Call elements in the DOM and store them in variables
var loginBtn = document.querySelector('#login-btn');
var signUpBtn = document.querySelector('#sign-up-btn');
var signUpSection = document.querySelector('.sign-up-section');
var loginSection = document.querySelector('.login-section');
var emailInput = document.querySelector('#email-input');
var passwordInput = document.querySelector('#pwd');
var errorMsg = document.querySelector('#error-msg');
var submitBtn = document.querySelector('.login');
var signUp = document.querySelector('.sign-up');

// Sign Up section
signUpBtn.addEventListener('click', toggleSignUpMenu);

function toggleSignUpMenu(e) {
    loginSection.style.display = 'none';
    signUpSection.style.display = 'flex';

    signUpBtn.classList.add('activated');
    loginBtn.classList.add('activated');
}

// Login section
loginBtn.addEventListener('click',toggleLoginMenu);

function toggleLoginMenu(e) {
    loginSection.style.display = 'flex';
    signUpSection.style.display = 'none';

    signUpBtn.classList.remove('activated');
    loginBtn.classList.remove('activated');
}

// Login Form validation
submitBtn.addEventListener('click', validateMyForm);

function validateMyForm(e) {
if(emailInput.value ==='' || passwordInput.value ==='') {
    e.preventDefault();
    errorMsg.classList.add('activated');
    errorMsg.innerHTML = 'Please Enter All fields';
}

else {
    errorMsg.classList.remove('activated');
    errorMsg.classList.add('success-activated');
    errorMsg.innerHTML = 'Login Successful';
}
}

// SignUp Form validation
var ageInputValue = document.getElementById('age').value;
var signUpMsg = document.querySelector('#err-msg');
signUp.addEventListener('click',validateSignUp);

function validateSignUp(e) {
    ageInputValue = '';
    try {
        if(ageInputValue == "") {throw "Empty";}
        else if(!(isNaN(ageInputValue))){
            if(ageInputValue > 40) {
                throw 'Too Old';
            }
            else if(ageInputValue < 18)  throw 'Too Young';
        }
    }

    catch(err) {
        e.preventDefault();
        signUpMsg.classList.add('activated');
        signUpMsg.innerHTML = 'Age is ' + err;
    }

    finally {
        document.getElementById('age').value = "";
    }
}
