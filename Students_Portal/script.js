document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const errorMessage = document.getElementById('errorMessage');

    if (email === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    if (email === 'student@example.com' && password === 'password') {
        alert('Login successful!');
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('email');
        }

        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});

window.onload = function() {
    const rememberMe = localStorage.getItem('rememberMe');
    const email = localStorage.getItem('email');

    if (rememberMe === 'true' && email) {
        document.getElementById('rememberMe').checked = true;
        document.getElementById('email').value = email;
    }
};

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
