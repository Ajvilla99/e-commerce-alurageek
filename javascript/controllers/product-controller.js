import { clientServices } from "../services/product-services.js";

let editObject = {
    nameEdit: '',
    descriptionEdit: '',
    imgEdit: '',
    priceEdit: 0,
    id: undefined,
}

let editCat = {
    nameCat: '',
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



// Crear producto
const form = document.querySelector('[data-create');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.querySelector('[data-tipo="name-cr"]').value;
    let description = document.querySelector('[data-tipo="description-cr"]').value;
    let price = parseFloat(document.querySelector('[data-tipo="price-cr"]').value);
    let formattedPrice = price.toFixed(2);
    let urlInput = document.querySelector('.view__url')
    let url = urlInput.value || document.querySelector('.view__cr').src;
    let category = document.querySelector('[data-tipo="category-cr"]').value;
    clientServices.crearProducto(name, description, url, formattedPrice, category).then( respuesta => { respuesta})
    .catch(err => console.log(err));
});

// Crear Producto
const btnCreate = document.querySelector('.create__product');
const modalCr = document.querySelector('.modal__cr');
const closeModalCr = document.querySelector('.close__modal-cr');

btnCreate.addEventListener('click', () => {
    modalCr.classList.add('modal__cr-show')
})
closeModalCr.addEventListener('click', () => {
    let name = document.querySelector('[data-tipo="name-cr"]');
    let description = document.querySelector('[data-tipo="description-cr"]');
    let price = document.querySelector('[data-tipo="price-cr"]');
    let url = document.querySelector('.view__cr');
    let category = document.querySelector('[data-tipo="category-cr"]');
    modalCr.classList.remove('modal__cr-show');
    name.value = ''
    description.value = ''
    price.value = ''
    url.src = ''
    category.value = ''
})

// Previsualizar imagen


const viewImage = document.querySelector('.view__cr');
const urlInput = document.querySelector('.view__url');
urlInput.addEventListener('input', () => {
    const enteredUrl = urlInput.value;
    if (enteredUrl) {
        viewImage.src = enteredUrl;
    } else {
        viewImage.src = ''; 
        imagePreviewDiv.innerHTML = '';
    }
});
const fileCr = document.querySelector('.aside__file');
const imgCr = document.querySelector('.view__cr');
const imgUploadCr = document.querySelector('.add__button-cr');
fileCr.addEventListener('change', (e) => {

    let url = e.target.files[0];
    urlInput.value = ''
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
        <a class="btn__view">
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
                <a class="product__edit" id="edit__product" data-edit>
                    <i class='bx bxs-pencil'></i>
                </a>
            </span class="action action__trash">
            <span>
                <a class="product__trash" id="action__trash" data-trash>
                    <i class='bx bxs-trash'></i>
                </a>
            </span>
        </div>
        </a>`
    linea.innerHTML = content;
    const editBtn = linea.querySelector('#edit__product');
    const modalEdit = document.querySelector('.modal__ed');
    editBtn.addEventListener("click", () => {
        modalEdit.classList.add('modal__ed__show');
        clientServices.editProduct(id).then((product) => {
            editObject = {...product}
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

const editBtnClose = document.querySelector('.close__modal__ed');
editBtnClose.addEventListener('click', () => {
    const modalEdit = document.querySelector('.modal__ed');
    modalEdit.classList.remove('modal__ed__show');
})

let closeAlert = document.querySelector('.btn__false')
closeAlert.addEventListener('click', () =>{
    modalAlert.classList.remove('modal__alert__show');
})
// Editar Producto - Actualizar producto
formEdit.addEventListener('submit', async (e) => {
    e.preventDefault()
    const nameEdit = document.querySelector('[data-tipo="nombre-edit"]').value;
    const descriptionEdit = document.querySelector('[data-tipo="description-edit"]').value;
    const priceEdit = document.querySelector('[data-tipo="price-edit"]').value;
    const imgEdit = document.getElementById('view-ed').src;
    const categoryEdit = document.querySelector('[data-tipo="category-ed"]').value
    clientServices.updateProduct(nameEdit, descriptionEdit, imgEdit, priceEdit, categoryEdit,editObject?.id).then(response => response)
})

// Previsualizar imagen seleccionada
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

// Crear Categoria
const newCategory = document.querySelector('[data-category]');
newCategory.addEventListener('submit', (e) => {
    e.preventDefault();
    // Obtener los datos del formulario
    const categoryName = document.querySelector('.category__create-name').value;
    clientServices.createCategory(categoryName)
});

const closeModalAlert = document.querySelector('.btn__false');
closeModalAlert.addEventListener("click", (e) => {
    e.preventDefault()
    showModal.classList.remove('modal__category__show');
})

// category select
function selectCreate (name, id) {
    return `<option value="${id}">${name}</option>`
}
const asideCategoryEdit = document.getElementById('select__category-edit');
clientServices.category()
    .then((data) => {
        let options = '';
        data.forEach(({name, id}) => {
            options += selectCreate(name, id);
        })

        asideCategoryEdit.innerHTML = options
    })
    .catch((error) => console.log(error));
const asideCategoryCreate = document.getElementById('select__category-create');
clientServices.category()
    .then((data) => {
        let options = '';
        data.forEach(({name, id}) => {
            options += selectCreate(name, id);
        })

        asideCategoryCreate.innerHTML = options
    })
    .catch((error) => console.log(error));

// Leer Categorias
const showModal = document.querySelector('.modal__alert');
const editCategoryShow = document.querySelector('.category__edit')
const nameCat = document.querySelector('.edit__category__name')
    function readCategories (name, id) {
    const linea = document.createElement('section');
    linea.classList.add('product__list_box');
    const content = `
        <div class="head__category">
            <h1 class="title__category">
                ${name}
            </h1>
            <div class="btn__category_box">
            <a class="btn__plus btn__category btn__edit">
                Editar categoria
                <i class='bx bxs-pencil'></i>
            </a>
            <a class="btn__plus btn__category btn__trash">
                Eliminar categoria
                <i class='bx bxs-trash'></i>
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
            const nuevaLinea = readProduct(name, numFixed, url, id);
            producList.appendChild(nuevaLinea);
        });
    }).catch((error) => error);
    const editCategory = linea.querySelector('.btn__edit')
    editCategory.addEventListener('click', () => {
        editCategoryShow.classList.add('category__edit__show')
        clientServices.editCategory(id).then((category) => {
            editCat = {...category}
            nameCat.value = category.name;
        })
    })

    const deleteCategory = linea.querySelector('.btn__trash');
    const titleDelete = document.querySelector('.title__delete');
    const detalleSpan = document.querySelector('.detalle__span');
    deleteCategory.addEventListener('click', () => {
        titleDelete.textContent = 'Eliminar Categoria'
        detalleSpan.textContent = '¿Desea eliminar esta categoria de forma permanente?'
        showModal.classList.add('modal__category__show');
        const deleteTrue = document.querySelector('.btn__true');
        deleteTrue.addEventListener('click', () => {
            clientServices.deleteCategory(id)
            .then(response => {})
                .catch(err => alert('Ocurrio un error'));
        })
    })   
    return linea
}

// form de actualizar categoria
const formEditCategory = document.getElementById('fomr__edit__category')
formEditCategory.addEventListener('submit', (e) => {
    e.preventDefault()
    const categoryName = document.querySelector('.edit__category__name').value
    clientServices.updateCategory(categoryName, editCat?.id);
})

const editCategoryClose = document.getElementById('close__category');

editCategoryClose.addEventListener('click', () => {
    editCategoryShow.classList.remove('category__edit__show')
})
// Editar categoria
const modalCategory = document.getElementById('create__category');
const categoryShow = document.querySelector('.modal__category');
modalCategory.addEventListener('click', () => {
    categoryShow.classList.add('modal__category__show')
})
const modalCategoryClose = document.querySelector('.category__close');
modalCategoryClose.addEventListener('click', () => {
    categoryShow.classList.remove('modal__category__show');
})

// conexion con el json server de categorias
const allCategories = document.getElementById('all__categories');
clientServices.category()
    .then((data) => {
        data.forEach(({name, id}) => {
            const createNewCategory = readCategories(name, id)
            allCategories.append(createNewCategory);
        })
    })
    .catch((error) => console.log(error));
// conexion con el json server productos
const elements = document.querySelector('[data-product]');
clientServices.producto()
    .then((data) => {
        data.forEach(({name, price, url, id}) => {
            let num = parseFloat(price)
            let numFixed = num.toFixed(2)
            const nuevaLinea =  readProduct(name, numFixed, url, id)
            elements.appendChild(nuevaLinea)
        })
    })
    .catch((error) => console.log(error));
