class Vehiculo{
    #modelo
    constructor(modelo, marca){
        this.#modelo = modelo
        this.marca = marca
    }
    getModelo(){
        return this.#modelo
    }
    #encenderMotor(){
        console.log("Motor encendido")
    }
    arrancar(){
        this.#encenderMotor
        console.log(`El vehiculo de marca ${this.marca} y el modelo ${this.getModelo()} está en movimiento`)
    }
}

const coche1 = new Vehiculo("pulsar", "bajaj")
coche1.arrancar()
