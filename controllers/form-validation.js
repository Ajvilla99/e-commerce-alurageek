const email = document.getElementById('login-email').value.trim();
const password = document.getElementById('login-password').value.trim();
const form = document.getElementById('form__login')

form.addEventListener('submit', validarForm())

// Validar el email (por ejemplo, utilizando una expresión regular)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return false;
    }

function validarForm(email2, password2) {
  if(email === email2 && password === password2) {
    
    alert('Maquia pelao')
    return true
  }
}


const http = new XMLHttpRequest();

console.log(http);
http.open('GET', 'http://localhost:3000/users')

http.send()

http.onload = () => {
  const data = JSON.parse(http.response)
  data.forEach((users) => {
    valid = validarForm(users.email, users.password)
  });
  console.log(data);
}