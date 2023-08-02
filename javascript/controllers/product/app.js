import { clientServices } from "../../services/product-services.js";

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const name = document.querySelector('[data-name]').value;
    const description = document.querySelector('[data-description]').value;
    const price = document.querySelector('[data-price]').value;
    clientServices.crearProducto(name, description, price).then( respuesta => {
    })
    .catch(err => console.log(err));
});


const file = document.querySelector('[data-file]')
const img = document.querySelector('[data-img]')
const imgUpload = document.querySelector('.add__img__button')


file.addEventListener('change', (e) => {
    if( e.target.files[0] ) {
        const reader = new FileReader();
        reader.onload = function(e){
            img.src = e.target.result
        }
        reader.readAsDataURL(e.target.files[0]);
    }
})
img.addEventListener('click', () => {
    file.click()
});
imgUpload.addEventListener('click', () => {
    file.click()
})

