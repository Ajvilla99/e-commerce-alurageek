import { readProduct } from "../controllers/product/read-product.js";
import { clientServices } from "../services/product-services.js";


const socialMenu = document.querySelector('.social__menu');
const adminList = document.querySelector('.admin__interaction');
const arrow = document.querySelector('.bx-chevron-down');
socialMenu.addEventListener('click', () => {
    adminList.classList.toggle('active');
    arrow.classList.toggle('bx-chevron-up')
})

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

const createProduct = document.querySelector('.create__product')
const modal = document.querySelector('.modal__box')
        createProduct.addEventListener('click', () => {
        modal.classList.add('active__modal')
    })

const form = document.querySelector('[data-form]')
form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const name = document.querySelector('[data-name]').value;
    const description = document.querySelector('[data-description]').value;
    const price = document.querySelector('[data-price]').value;
    const imageUrl = document.querySelector('#img__product').src
    clientServices.crearProducto(name, description, imageUrl, price).then( respuesta => { respuesta})
    .catch(err => console.log(err));
});
