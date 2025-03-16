console.log("Scriptjs cargador Correctamenrte")

const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación simple
    if (username === 'admin' && password === '1234') {
        alert('¡Login exitoso!'); 
        window.location.href = '/home'
    } else {
        alert("'Usuario o contraseña incorrectos.")
    }
});  

