//declaro primeras variables
let nombre
let apellido
let numeroBebidas
let precioBebidas

//genero una funcion con condicional

function intro() {
        alert ("Bienvenido a nuestro simulador de carrito, "+nombre+" "+apellido+"!")
        numeroBebidas = parseInt (prompt (nombre +","+" ingrese el numero de bebidas que desea comprar"))
        alert (nombre +", El total a pagar por sus bebidas es de: "+"$"+calcPrecio ())
}

function promptVariable(nombre_del_parametro) {
    let result = null
    while (result == null || result == "") {
        result = prompt("Ingrese su " + nombre_del_parametro)
    }

    return result
}

nombre = promptVariable("nombre")
apellido = promptVariable("apellido")
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
