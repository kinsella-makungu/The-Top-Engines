// Enquiry Form validation
var enqFormInputs = document.querySelectorAll('.form-input');
var enqFormMsg = document.querySelector('.form-enquiry-description');
var enqSubmitBtn = document.querySelector('.submit-btn');
var themeBtn = document.querySelector('.theme-btn');
var lightThemeBtn = document.querySelector('.light-theme');
var darkThemeBtn = document.querySelector('.dark-theme');

// Validate on submit
enqSubmitBtn.addEventListener('click',validateForm);

function validateForm(e) {
    for(var i = 0; i < enqFormInputs.length; i++) {
        if(enqFormInputs[i].value === "") {
            e.preventDefault();
            enqFormMsg.classList.add('error-msg');
            enqFormMsg.innerHTML = 'Please Enter All Fields';
        }
        else{
            // e.preventDefault();
            enqFormMsg.classList.add('success-msg');
            enqFormMsg.innerHTML = 'Thank you for your enquiry.';
        }
    }
}

// theme Toggle
themeBtn.addEventListener('click',changeTheme);

// changeTheme function
function changeTheme(e) {
    this.classList.toggle('activated');
}


var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var today = new Date();

var todaysDate = document.querySelector('.get-date');

todaysDate.innerHTML = day[today.getDay()];


