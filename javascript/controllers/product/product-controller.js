import { clientServices } from "../../services/product-services.js";
import { actionMenu } from "./product-action.js";

actionMenu()

const productList = document.querySelector('[data-product]');
const btnAddProduct = document.querySelector('.add__product');
export function crearProducto(name, price, url) {
    const content = `
        <div class="product__img">
            <img class="product__img__card" 
            src="${url}" 
            alt="Imagen Producto">
        </div>
        <div class="product__description">
            <div class="name__description">
                <p>${name}</p>
            </div>
            <div class="product__price">
                <span class="price">
                    $${price}
                </span>
                <span class="discount">% off</span>
            </div>
        </div>
        <div class="menu__product_main">
            <span class="action action__edit" >
                <a class="product__edit" id="action__edit">
                    <i class='bx bxs-pencil'></i>
                </a>
            </span class="action action__trash">
            <span>
                <a class="product__trash" id="action__trash">
                    <i class='bx bxs-trash'></i>
                </a>
            </span>
        </div>`
    const newElement = document.createElement("li");
    newElement.classList.add('product__item');
    newElement.innerHTML = content
    productList.appendChild(newElement);

    const editElement = newElement.querySelector('#action__edit');
    editElement.addEventListener('click', () => {
    })
    const deleteElement = newElement.querySelector('#action__trash');
    deleteElement.addEventListener('click', () => {
        newElement.remove()
    })
}

const modal = document.querySelector('.modal__box')
btnAddProduct.addEventListener('click', () => {
    modal.classList.add('active__modal')
})

clientServices.producto()
    .then((data) => {
        data.forEach((product) => {
            crearProducto(product.name, product.price, product.url)
        })
    })
    .catch((error) => console.log(error));