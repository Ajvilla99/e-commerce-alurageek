const form = document.getElementById('form__login');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validarFormulario()) {
      form.submit();
    }
  });

function validarFormulario() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    console.log(password);

    // Validar el email (por ejemplo, utilizando una expresión regular)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return false;
    }
    // Validar la contraseña (por ejemplo, que tenga al menos 6 caracteres)
    if (password.length < 8) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }

    // Todas las validaciones pasaron, el formulario es válido
    return true;
  
}
