document.querySelector('#registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Incorrect password';
    } else if (username === email && password !== confirmPassword) {
        errorMessage.textContent = 'Incorrect password';
    } else {
        errorMessage.textContent = '';
        this.submit(); 
    }
});

function togglePasswordVisibility(fieldId) {
    let field = document.getElementById(fieldId);
    if (field.type === 'password') {
        field.type = 'text';
    } else {
        field.type = 'password';
    }
}
