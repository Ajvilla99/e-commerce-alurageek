const socialMenu = document.querySelector('.social__menu');
const adminList = document.querySelector('.admin__interaction');
const arrow = document.querySelector('.bx-chevron-down');


socialMenu.addEventListener('click', () => {
    adminList.classList.toggle('active');
    arrow.classList.toggle('bx-chevron-up')
})


const productList = document.querySelector('[data-product]');
const btnAddProduct = document.querySelector('.add__product');

btnAddProduct.addEventListener('click', () => {
    const content = `
    <li class="product__item">
        <div class="product__img">
            <img class="product__img__card" src="" alt="Imagen Producto">
        </div>

        <div class="product__description">
            <div class="name__description">
                <p></p>
            </div>
            <div class="product__price">
                <span class="price">$</span>
                <span class="discount">% off</span>
            </div>
        </div>

        <div class="menu__product_main">
            <span class="action action__edit" id="action__edit">
                <a class="product__edit">
                    <i class='bx bxs-pencil'></i>
                </a>
            </span class="action action__trash" id="action__trash">
            <span>
                <a class="product__trash">
                    <i class='bx bxs-trash'></i>
                </a>
            </span>
        </div>
    </li>`
    const newElement = document.createElement("li");
    newElement.classList.add('product__item');
    newElement.innerHTML = content
    productList.appendChild(newElement);
})