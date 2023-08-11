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
                    <span class="addTo__cart">Ver producto<i class="fa-solid fa-cart-plus"></i></span>
                </div>
            </div>`
        linea.innerHTML = content;
        return linea
}

const starwars = document.querySelector('.category__starWars')

clientServices.producto()
    .then((data) => {
        data.forEach(({name, price, url, id}) => {
            const newElement = productClient(name, price, url, id)
            starwars.appendChild(newElement)
        });
    })