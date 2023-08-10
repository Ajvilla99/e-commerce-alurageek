import { clientServices } from "../services/product-services.js";

let editObject = {
    nameEdit: '',
    descriptionEdit: '',
    imgEdit: '',
    priceEdit: 0,
    id: undefined,
}


const modalAlert = document.querySelector('.modal__alert');
// accion menu
const socialMenu = document.querySelector('.social__menu');
const adminList = document.querySelector('.admin__interaction');
const arrow = document.querySelector('.bx-chevron-down');
socialMenu.addEventListener('click', () => {
    adminList.classList.toggle('active');
    arrow.classList.toggle('bx-chevron-up')
})

// Crear Producto
const btnCreate = document.querySelector('.create__product');
const modalCr = document.querySelector('.modal__cr');
const closeModalCr = document.querySelector('.close__modal-cr');
let name = document.querySelector('[data-tipo="name-cr"]');
let description = document.querySelector('[data-tipo="description-cr"]');
let price = document.querySelector('[data-tipo="price-cr"]');
let url = document.querySelector('.view__cr');
let category = document.querySelector('[data-tipo="category-cr"]');
    
btnCreate.addEventListener('click', () => {
    modalCr.classList.add('modal__cr-show')
})
closeModalCr.addEventListener('click', () => {
    modalCr.classList.remove('modal__cr-show');
    name.value = ''
    description.value = ''
    price.value = ''
    url.src = '../assets/img/icon/file.png'
    category.value = ''
})

// Crear producto
const form = document.querySelector('[data-create');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    clientServices.crearProducto(name.value, description.value, url.src, price.value, category.value).then( respuesta => { respuesta})
    .catch(err => console.log(err));
});

const fileCr = document.querySelector('.aside__file');
const imgCr = document.querySelector('.view__cr');
const imgUploadCr = document.querySelector('.add__button-cr');
fileCr.addEventListener('change', (e) => {
    let url = e.target.files[0];
    if(url){
        const fileReader = new FileReader()
        fileReader.readAsDataURL(url)
        fileReader.onload = () => {
            imgCr.src = fileReader.result
        }
    }
})
imgCr.addEventListener('click', () => {
    file.click()
});
imgUploadCr.addEventListener('click', () => {
    file.click()
});

// Leer producto - Editar producto 
const formEdit = document.querySelector('[data-edit]');
const nameEdit = document.querySelector('[data-tipo="nombre-edit"]');
const imgEdit = document.getElementById('view-ed');
const descriptionEdit = document.querySelector('[data-tipo="description-edit"]');
const priceEdit = document.querySelector('[data-tipo="price-edit"]');
const categoryEdit = document.querySelector('[data-tipo="category-ed"]')
function readProduct(name, price, url, id) {
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
        <div class="menu__product_main">
            <span class="action action__edit" >
                <a class="product__edit" id="action__edit" data-edit>
                    <i class='bx bxs-pencil'></i>
                </a>
            </span class="action action__trash">
            <span>
                <a class="product__trash" id="action__trash" data-trash>
                    <i class='bx bxs-trash'></i>
                </a>
            </span>
        </div>`
    linea.innerHTML = content;
    const editBtn = linea.querySelector('[data-edit]');
    const modalEdit = document.querySelector('.modal');
    editBtn.addEventListener("click", () => {
        modalEdit.classList.add('modal__ed__show');
        clientServices.editProduct(id).then((product) => {
            editObject = {
                ...product
            }
            nameEdit.value = product.name;
            descriptionEdit.value = product.description;
            imgEdit.src = product.url;
            priceEdit.value = product.price;
            categoryEdit.value = product.category
        });
    });
    const deleteBtn = linea.querySelector('[data-trash]');
    deleteBtn.addEventListener('click', () => {
        modalAlert.classList.add('modal__alert__show');
        const trueDelete = document.querySelector('.btn__true')
        trueDelete.addEventListener('click', () => {
            clientServices.deleteProduct(id)
            .then(response => {})
                .catch(err => alert('Ocurrio un error'));
        })
    });
    return linea
}

let closeAlert = document.querySelector('.btn__false')
closeAlert.addEventListener('click', () =>{
    modalAlert.classList.remove('modal__alert__show');
})

// Editar Producto
formEdit.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameEdit = document.querySelector('[data-tipo="nombre-edit"]').value;
    const descriptionEdit = document.querySelector('[data-tipo="description-edit"]').value;
    const priceEdit = document.querySelector('[data-tipo="price-edit"]').value;
    const imgEdit = document.getElementById('view-ed').src;
    const categoryEdit = document.querySelector('[data-tipo="category-ed"]').value
    clientServices.updateProduct(nameEdit, descriptionEdit, imgEdit, priceEdit, categoryEdit,editObject?.id)
})

const file = document.querySelector('[data-tipo="file"]');
const img = document.querySelector('[data-tipo="img-view"]');
const imgUpload = document.querySelector('.add__button');
file.addEventListener('change', (e) => {
    let url = e.target.files[0];
    if(url){
        const fileReader = new FileReader()
        fileReader.readAsDataURL(url)
        fileReader.onload = () => {
            img.src = fileReader.result
        }
    }
})
img.addEventListener('click', () => {
    file.click()
});
imgUpload.addEventListener('click', () => {
    file.click()
});


const editBtnClose = document.querySelector('.close__modal__ed');
editBtnClose.addEventListener('click', () => {
    const modalEdit = document.querySelector('.modal__ed');
    modalEdit.classList.remove('modal__ed__show');
})
    
const elements = document.querySelector('[data-product]');
clientServices.producto()
    .then((data) => {
        data.forEach(({name, price, url, id}) => {
            const nuevaLinea =  readProduct(name, price, url, id)
            elements.appendChild(nuevaLinea)
        })
    })
    .catch((error) => console.log(error));