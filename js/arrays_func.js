class Personaje {
    constructor (nombre, vida, poder) {
        this.nombre = nombre
        this.vida = vida
        this.poder = poder
    }
}

function promptDato(texto) {
    let result
    while (result == null || result == "") {
        result = prompt(texto)
    }
    return result
}

function crearPersonaje() {
    nombre = promptDato("Ingrese el nombre del personaje")
    vida = parseInt(promptDato("Ingrese la vida (solo enteros)"))
    poder = parseInt(promptDato("Ingrese el poder (solo enteros)"))

    return new Personaje(nombre, vida, poder) 
}

function crearClan(nombre_de_clan) {
    cantidad = parseInt(promptDato("Ingrese el tamaño del clan " + nombre_de_clan))
    let personajes = []

    for (let i = 1; i <= cantidad; i++) {
        let personaje = crearPersonaje()
        personajes.push(personaje)
    }

    return personajes
}

function enfrentarClanes() {
    let enanos = crearClan("enanos")    
    let elfos = crearClan("elfos")

    let vida_enanos = 0
    enanos.forEach(enano => {
        vida_enanos += enano.vida
    });
    console.log("Los enanos tienen " + vida_enanos + " de vida en total")
    
    let vida_elfos = 0
    elfos.forEach(elfo => {
        vida_elfos += elfo.vida
    });
    console.log("Los elfos tienen " + vida_elfos + " de vida en total")

    let poder_enanos = 0
    enanos.forEach(enano => {
        poder_enanos += enano.poder
    });
    console.log("Los enanos tienen " + poder_enanos + " de poder en total")

    let poder_elfos = 0
    elfos.forEach(elfo => {
        poder_elfos += elfo.poder
    });
    console.log("Los elfos tienen " + poder_elfos + " de poder en total")

    if (poder_enanos >= vida_elfos) {
        console.log("Los enanos matan a los elfos")
    } else {
        console.log("Los enanos no pueden matar a los elfos")
    }

    if (poder_elfos >= vida_enanos) {
        console.log("Los elfos matan a los enanos")
    } else {
        console.log("Los elfos no pueden matar a los enanos")
    }

    if (poder_enanos >= vida_elfos && poder_elfos >= vida_enanos) {
        console.log("nadie queda vivo xd")
    }
}

enfrentarClanes()
