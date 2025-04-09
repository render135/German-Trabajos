class Empleado {
    #nombre
    #salario
    constructor(nombre, salario){
        this.#nombre = nombre
        this.#salario = salario
    }
    
    getNombre(){
        return this.#nombre
    }
    
    getSalario(){
        return this.#salario
    }

    trabajar(){
        console.log(`El empleado ${this.getNombre()} está trabjando con un salario de ${this.getSalario()} pesos`)
    }
}

const empleado1 = new Empleado("Jhonatan", 130000)
empleado1.trabajar()