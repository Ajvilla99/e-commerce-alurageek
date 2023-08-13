import { clientServices } from "../services/product-services.js";


const btnHeart = document.querySelector('.btn__heart');

btnHeart.addEventListener('click', () => {
    btnHeart.classList.toggle("bxs-heart");
})


clientServices.producto()