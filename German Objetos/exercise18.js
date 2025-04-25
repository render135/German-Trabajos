class Persona {
    
    #edad

    constructor(nombre, edad) {
        this.nombre = nombre
        this.#edad = edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(edad) {
        if (edad >= 0) {
            this.#edad = edad
        } else {
            console.log("Edad no válida.")
        }
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad)
        this.puesto = puesto
    }

    cambiarEdad(nuevaEdad) {
        this.setEdad(nuevaEdad)
    }
}

const persona1 = new Persona("Carlos", 30)
console.log(`${persona1.nombre} tiene ${persona1.getEdad()} años.`)

const empleado1 = new Empleado("Ana", 25, "Desarrolladora")
console.log(`${empleado1.nombre} tiene ${empleado1.getEdad()} años.`)
empleado1.cambiarEdad(28)
console.log(`${empleado1.nombre} ahora tiene ${empleado1.getEdad()} años.`)