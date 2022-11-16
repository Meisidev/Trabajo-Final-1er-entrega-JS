let carrito = []
const tbody = document.querySelector('.tbody')
const clickButton = document.querySelectorAll('.button')


//agregar a carrito
clickButton.forEach(btn => {
    btn.addEventListener('click', addCarrito)
})


function addCarrito(e) {
    const button = e.target
    const item = button.closest ('.card')
    const itemName = item.querySelector('.card-text').textContent
    const itemPrice = item.querySelector('.card-title').textContent
    const newItem = {
        title: itemName.trim(),
        price: itemPrice,
        cantidad: 1
    }
    addItemCarrito(newItem)
}

function addItemCarrito (newItem) {

    const alert = document.querySelector('.alert')
    setTimeout(function(){
        alert.classList.add('hide')
    }, 1000)
        alert.classList.remove('hide')
        
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

//agregar carrito DOM
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
        tr.querySelector('.inputCantidad').addEventListener('change', sumaCantidad)
    })
    carritoTotal()

}

//suma total
function carritoTotal() {
    let Total = 0
    const itemCarTotal = document.querySelector('.tablaTotal')
    carrito.forEach((item)=>{
        const precio = Number(item.price.replace("$", ''))
        Total = Total + precio*item.cantidad
    })
    itemCarTotal.innerHTML = `Total $${Total}`
    addLocalStorage ()
}

//borrar item carrito
function deleteItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest (".ItemCarrito")
    const title = tr.querySelector('.title').textContent
    for(let i=0; i<carrito.length; i++) {
        if(carrito[i].title.trim() === title.trim()) {
            carrito.splice(i,1)
        }
    }
    const alert = document.querySelector('.remove')
    setTimeout(function(){
        alert.classList.add('remove')
    }, 1000)
        alert.classList.remove('remove')

    tr.remove ()
    carritoTotal()
}
//suma en DOM
function sumaCantidad(e) {
    const sumaInput= e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent
    carrito.forEach(item => {
        if(item.title.trim()=== title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value
            item.cantidad = sumaInput.value
            carritoTotal()
        }
    })
}
//JSON, guardamos la data en el localstorage
function addLocalStorage (){
    localStorage.setItem ('carrito', JSON.stringify(carrito))
}
//al actualizar pagina, mantener items en carrito
window.onload = function() {
    const storage = JSON.parse(localStorage.getItem('carrito'))
    if(storage) {
        carrito = storage
        renderCarrito ()
    }
}
