import { clientServices } from "../services/product-services.js";

const menu = document.querySelector('.menu_mobile')
const navbarActive = document.querySelector('.nav_container')
const spanTop = document.querySelector('.line_top')
const spanMid = document.querySelector('.line_mid')
const spanBot = document.querySelector('.line_bot')
const gift = document.querySelector('.gift')
const giftClose = document.querySelector('.close_gift')

menu.addEventListener('click', () => {
    spanTop.classList.toggle('active_top')
    spanMid.classList.toggle('active_mid')
    spanBot.classList.toggle('active_bot')
    navbarActive.classList.toggle('active_navbar')
})


giftClose.addEventListener('click', () => {
    gift.style.display = 'none'
})


const urlImage = document.querySelector('[data-image]')
const name = document.querySelector('[data-name]')
const description = document.querySelector('[data-description]')
const price = document.querySelectorAll('.price_product')
const obtenerInformacion = () => {
    const url = new URL(location);
    const id = url.searchParams.get('id');
    clientServices.editProduct(id)
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