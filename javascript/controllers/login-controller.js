import { clientServices } from "../services/product-services.js"

const container = document.querySelector('.container')
const btnSignIn = document.querySelector('.btnSign-in')
const btnSignUp = document.querySelector('.btnSign-up')

btnSignIn.addEventListener('click', () => {
    container.classList.add('active')
})

btnSignUp.addEventListener('click', () => {
    container.classList.remove('active')
})

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
                location.href = "e-commerce-alurageek/screen/create-product.html";
            }, 1500);
        } else {
            const message = document.querySelector('.span__form')
            message.classList.add('message__error');
        }
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);
        });
});

function initRegistration() {
    const formRegistration = document.getElementById('form__singup')
    formRegistration.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = document.getElementById('name__singup').value
        const email = document.getElementById('email__singup').value
        const password = document.getElementById('password__singup').value.trim()
        clientServices.createUser(name, email, password).then( respuesta => {
        })
        .catch(err => console.log(err));
    });
}
initRegistration()

// document.addEventListener("DOMContentLoaded", function () {
//     datos.addEventListener('submit', validarFormulario);
// });

// function validarFormulario(event) {
//     event.preventDefault();

//     let nombre = form__name.value;
//     if (nombre.length > 40) {
//         Swal.fire({
//             title: "Error al digital el nombre",
//             text: 'Puede contener un máximo de 40 caracteres',
//             icon: 'error',
//             confirmButtonText: "Continuar"
//         })
//         return;
//     }

//     let mensaje = form__mensaje.value;
//     if (mensaje.length > 120) {
//         Swal.fire({
//             title: "Error en el mensaje",
//             text: "Puede contener un máximo de 120 caracteres",
//             icon: "error",
//             confirmButtonText: "Continuar"
//         })
//         return;
//     }
//     this.submit();
// }

