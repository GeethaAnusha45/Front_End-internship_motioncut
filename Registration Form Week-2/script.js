document.querySelector('.registration-form').addEventListener('submit', function(event) {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
