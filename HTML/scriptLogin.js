document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const dni = document.getElementById('dni').value;
        const password = document.getElementById('password').value;

        //verificación de credenciales
        if (dni === '76305644' && password === '123') {
            alert('Inicio de sesión exitoso. Redirigiendo...');
            //redirección a la siguiente página
            
            window.location.href = 'mainpageTrue.html';
        } else {
            alert('Credenciales incorrectas. Por favor, intente nuevamente.');
        }
    });
});