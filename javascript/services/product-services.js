const formLogin = () => {
    return fetch("http://localhost:3000/users").then( response => response.json())
}

const producto = () => {
    return fetch("http://localhost:3000/products").then( response => response.json())
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

const crearProducto = (name, description, imageUrl ,price) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({name, description, imageUrl, price, id:uuid.v4()})

    })
}

export const clientServices = {
    formLogin,
    createUser,
    producto,
    crearProducto,
}