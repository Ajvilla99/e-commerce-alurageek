import { clientServices } from "../services/product-services.js";

    export function initRegistration() {
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
