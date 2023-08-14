import { clientServices } from "./javascript/services/product-services.js";


function productClient (name, price, url, id) {
        const linea = document.createElement("li");
        linea.classList.add('product__item');
        const content = `
            <div class="product__img">
                <img class="product__img__card" id="img__product"
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
                </div>
            </div>
            <div class="product__shop">
                <div class="add__cart int__shop" href="#">
                    <a class="addTo__cart" href="./screen/view-product.html?id=${id}">
                        <span>Ver producto</span>
                    </a>
                </div>
            </div>`
        linea.innerHTML = content;
        return linea
}

function readCategories (name, id) {
const linea = document.createElement('section');
linea.classList.add('product__list_box');
const content = `
    <div class="head__category">
        <h1 class="title__category">
            ${name}
        </h1>
        <div class="btn__category_box">
        <a class="btn__plus">
        Ver más
        <i class="bx bx-plus"></i>
        </a>
        </div>
    </div>
    <ol class="product__list" id="product__list">
    </ol>`
    linea.innerHTML = content
    const producList = linea.querySelector('.product__list')
    clientServices.producto()
    .then((data) => {
        const filteredProducts = data.filter(product => product.category === id);
        filteredProducts.forEach(({ name, price, url, id }) => {
            let num = parseFloat(price);
            let numFixed = num.toFixed(2);
            const nuevaLinea = productClient(name, numFixed, url, id);
            producList.appendChild(nuevaLinea);
        })
            }).catch((error) => error);
    return linea
}

const allCategories = document.getElementById('all__categories');
clientServices.category()
    .then((data) => {
        data.forEach(({name, id}) => {
            const createNewCategory = readCategories(name, id)
            allCategories.append(createNewCategory);
        })
    })
    .catch((error) => console.log(error));