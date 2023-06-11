let password = document.querySelector('input#password');
let passwordConfirm = document.querySelector('#password-confirm');
let form = document.querySelector('form');
let submitBtn = document.querySelector('#btn');
let passwordValue;
let length;

password.addEventListener("change", e => {
    passwordValue = password.value;
    length = passwordValue.length;
    if (length >= 8) {
        passwordConfirm.setAttribute('minlength', `${length}`);
        passwordConfirm.setAttribute('maxlength', `${length}`);
    }
})

passwordConfirm.addEventListener('change', () => {
    if (password.value !== passwordConfirm.value) {
        form.setAttribute('action', '#');
    }
})

submitBtn.addEventListener('submit', () => {
    if (password.value !== passwordConfirm.value) {
        alert('Passwords do not match');
    }
})