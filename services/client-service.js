const http = new XMLHttpRequest();

// Abriendo http (metodo, url)
// CRUD - Metodos HTTP
// Create - Post 
// Read - GET
// Update PUT/PATCH
// Delete - DELETE
http.open("GET", "http://localhost:3000/users");

http.send();

// Una vez se cargue y reciba la respuesta ejecutara la funcion
http.onload = () => {
    const data = http.response
    console.log(data);
}