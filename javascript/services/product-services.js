const formLogin = () => {
    return fetch("http://localhost:3000/users").then( response => response.json())
}

const createUser = (name, email, password) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({name, email, password, id:uuid.v4()})
    })
}

const category = () => {
    return fetch("http://localhost:3000/categories").then( response => response.json())
}

const createCategory = (name, description, ) => {
    return fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
            "content-type": "Application/JSON"
        },
        body: JSON.stringify({name, description, id:uuid.v4()})

    })
}

const producto = () => {
    return fetch("http://localhost:3000/products").then( response => response.json())
}

const crearProducto = (name, description, url, price, category) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "content-type": "Application/JSON"
        },
        body: JSON.stringify({name, description, url, price, category, id:uuid.v4()})

    })
}

const editProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`).then( response => response.json())
}

const deleteProduct = (id) => {
    console.log('eliminar a -->', id);
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
    })
}

const updateProduct = (name, description, url, price, category, id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers:{'Content-Type': 'Application/JSON'},
        body : JSON.stringify ({name, description, url, price, category, id}),
    })
        .then((response) => response)
        .catch((error) => error);
};


export const clientServices = {
    formLogin,
    createUser,
    producto,
    crearProducto,
    editProduct,
    deleteProduct,
    updateProduct,
}