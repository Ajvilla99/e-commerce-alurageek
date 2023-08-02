import { clientServices } from "../services/product-services.js"

const form = document.querySelector('[data-form]')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;
    clientServices.formLogin()
    .then(data => {
        const authenticatedUser = data.find(user => user.email === email && user.password === password);
        if (authenticatedUser) {
            alert('Inicio de sesión exitoso. ¡Bienvenido!');
            setTimeout(() => {
                window.location.href = "http://127.0.0.1:5500/eccomerce/screen/producto-main.html";
            }, 2000);
        } else {
            const message = document.querySelector('.span__form')
            message.classList.add('message__error');
        }
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);
        });
});

