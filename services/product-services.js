
const producto = () => {
    return fetch("http://localhost:3000/products").then( respuesta => respuesta.json())
}

export const clientServices = {
    producto,
}