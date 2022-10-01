//declaro primeras variables
let nombre
let apellido
let numeroBebidas
let precioBebidas

//genero una funcion con condicional

function intro() {
    if (nombre != "" && apellido != "" && nombre != null && apellido != null) {
        alert ("Bienvenido a nuestro simulador de carrito, "+nombre+" "+apellido+"!")
        numeroBebidas = parseInt (prompt (nombre +","+" ingrese el numero de bebidas que desea comprar"))
        alert (nombre +", El total a pagar por sus bebidas es de: "+"$"+calcPrecio ())
    }
    else {
        alert ("No ingresaste ningun dato")
    }
}

nombre = (prompt ("Ingrese su nombre"))
apellido = (prompt ("Ingrese su apellido"))

//invoco la funcion

intro ();

function calcPrecio () {
    let suma = 0
    for (let i = 1; i<=numeroBebidas; i++) {
    precioBebidas = parseFloat (prompt ("Ingrese el precio individual de cada bebida sin simbolo monetario"))
    suma = suma + precioBebidas
    }
    return suma
}
