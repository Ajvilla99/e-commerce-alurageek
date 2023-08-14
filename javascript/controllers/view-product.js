import { clientServices } from "../services/product-services.js";

const urlImage = document.querySelector('[data-image]')
const name = document.querySelector('[data-name]')
const description = document.querySelector('[data-description]')
const price = document.querySelectorAll('.price_product')
const obtenerInformacion = () => {
    const url = new URL(location);
    const id = url.searchParams.get('id');
    clientServices.detalleProducto(id)
        .then((product) => {
            name.textContent = product.name
            urlImage.src = product.url
            description.textContent = product.description
            price.forEach((priceElement) => {
                priceElement.textContent = `$${product.price}`
            })
        })
}
obtenerInformacion()


const cant = document.querySelector('.cant')
const cantActive = document.querySelector('.can_num_box')
cant.addEventListener('click', () => {
    cantActive.classList.toggle('active')
})

document.addEventListener('click', (event) => {
    if (!cantActive.contains(event.target) && !cant.contains(event.target)) {
        cantActive.classList.remove('active');
    }
});