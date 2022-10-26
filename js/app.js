let carrito = []
const tbody = document.querySelector('.tbody')
const clickButton = document.querySelectorAll('.button')

clickButton.forEach(btn => {
    btn.addEventListener('click', addCarrito)
})

function addCarrito(e) {
    const button = e.target
    const item = button.closest ('.card')
    const itemName = item.querySelector('.card-text').textContent
    const itemPrice = item.querySelector('.card-title').textContent
    const newItem = {
        title: itemName,
        price: itemPrice,
        cantidad: 1
    }
    addItemCarrito(newItem)
}

function addItemCarrito (newItem) {
    const inputElement = tbody.getElementsByClassName('inputCantidad')
    for(let i= 0; i< carrito.length; i++) {
        if(carrito[i].title.trim()=== newItem.title.trim()) {
            carrito[i].cantidad ++
            const inputValue = inputElement[i]
            inputValue.value++
            carritoTotal()
            return null
        }
    }
    carrito.push(newItem)

    renderCarrito()
}

function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr =document.createElement ('tr')
        tr.classList.add('ItemCarrito')
        const content = `
        <th scope="row">1</th>
        <td class="tablaProducto"><h6 class="title">${item.title}</h6></td>
        <td class="tablaPrecio"><p>${item.price}</p></td>
        <td class="tablaCantidad"><input type="number" min="1" value=${item.cantidad} class= "inputCantidad">
        <button class="delete btn btn-danger">x</button></td>
        `
        tr.innerHTML = content
        tbody.append(tr)

        tr.querySelector('.delete').addEventListener('click', deleteItemCarrito)
    })
    carritoTotal()

}

function carritoTotal() {
    let Total = 0
    const itemCarTotal = document.querySelector('.tablaTotal')
    carrito.forEach((item)=>{
        const precio = Number(item.price.replace("$", ''))
        Total = Total + precio*item.cantidad
    })
    itemCarTotal.innerHTML = `Total $${Total}`
}

function deleteItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest (".ItemCarrito")
    const title = tr.querySelector('.title').textContent
    for(let i=0; i<carrito.length; i++) {
        if(carrito[i].title.trim() === title.trim()) {
            carrito.splice(i,1)
        }
    }
    tr.remove ()
    carritoTotal()
}