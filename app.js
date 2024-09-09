const inputField = document.querySelector('#password');
const outputField = document.querySelector('#output');

const maxLength = 16;

inputField.addEventListener('input', () => {
    let pass = inputField.value;
    
    if (pass.length < 8) {
        outputField.innerText = "Your password must be at least 8 characters long.";
        outputField.style.color = 'red';
    } else if (pass.length > maxLength) {
        outputField.innerText = `Your password must be no more than ${maxLength} characters long.`;
        outputField.style.color = 'red';
    } else if (!/[a-z]/.test(pass)) {
        outputField.innerText = "Your password should include at least one lowercase letter (a-z).";
        outputField.style.color = 'red';
    } else if (!/[A-Z]/.test(pass)) {
        outputField.innerText = "Your password should include at least one uppercase letter (A-Z).";
        outputField.style.color = 'red';
    } else if (!/[0-9]/.test(pass)) {
        outputField.innerText = "Your password should include at least one numeric digit (0-9).";
        outputField.style.color = 'red';
    } else if (!/[\!\@\#\$\%\^\&\*\(\)\_\-\?\.\,]/.test(pass)) {
        outputField.innerText = "Your password should include at least one special character (e.g., !, @, #, $, %, etc.).";
        outputField.style.color = 'red';
    } else {
        outputField.innerText = "Great! Your password is strong.";
        outputField.style.color = 'green';
    }
});
