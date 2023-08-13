const formLogin = () => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/users").then( response => response.json())
}

const createUser = (name, email, password) => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/users", {
        method: "POST",
        headers: {
            "content-type": "Application/JSON"
        },
        body: JSON.stringify({name, email, password, id:uuid.v4()})
    })
}

const category = () => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/categories").then( response => response.json())
}

const createCategory = (name) => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/categories", {
        method: "POST",
        headers: {
            "content-type": "Application/JSON"
        },
        body: JSON.stringify({name, id:uuid.v4()})

    })
}

const editCategory = (id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/categories/${id}`).then( response => response.json())
}

const updateCategory = (name, id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/categories/${id}`, {
        method: 'PUT',
        headers: {"Content-Type": "Application/JSON"},
        body: JSON.stringify({name, id}),
    })
        .then( response => response.json())
        .catch((error) => error)
}

const deleteCategory = (id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/categories/${id}`, {
        method: "DELETE"
    })
}

const ordenerCategory = (category) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/${category}`).then( response => response.json())
}

const producto = () => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/products").then( response => response.json())
}

const crearProducto = (name, description, url, price, category) => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/products", {
        method: "POST",
        headers: {
            "content-type": "Application/JSON"
        },
        body: JSON.stringify({name, description, url, price, category, id:uuid.v4()})

    })
}

const editProduct = (id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/products/${id}`).then( response => response.json())
}

const deleteProduct = (id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/products/${id}`, {
        method: "DELETE"
    })
}

const updateProduct = (name, description, url, price, category, id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/products/${id}`, {
        method: 'PUT',
        headers:{'Content-Type': 'Application/JSON'},
        body : JSON.stringify ({name, description, url, price, category, id}),
    })
        .then((response) => response)
        .catch((error) => error);
};

const productCategory = () => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/products").then( response => response.json())
}

export const clientServices = {
    formLogin,
    createUser,
    producto,
    crearProducto,
    editProduct,
    deleteProduct,
    updateProduct,
    category,
    createCategory,
    deleteCategory,
    editCategory,
    updateCategory,
    ordenerCategory,
    productCategory,
}
