const active = document.querySelector('.activar')
const animation = document.querySelector('.circle-box')
const body = document.body;
active.addEventListener('click', () => {
    const newElement = crearElement('actualizado')
    body.appendChild(newElement)
    setTimeout(() => {
        newElement.remove()
    }, 1500);
})

function crearElement(name) {
    const linea = document.createElement('div')
    linea.classList.add('circle-box')
    linea.classList.add('active')
    name = 'Actualizado'
    const content = `
        <div class="circle">
            <div class="circle-child">
                <i class='bx bx-check'></i>
            </div>
            <span class="text">${name}</span>
        </div>`
    linea.innerHTML = content
    return linea
}