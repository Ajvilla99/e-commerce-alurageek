
const producto = () => {
    return fetch("http://localhost:3000/products").then( respuesta => respuesta.json())
}

const crearProducto = (name, description, price, url = "") => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({name,description,price,url,id:uuid.v4()})

    })
}

export const clientServices = {
    producto,
    crearProducto,
}