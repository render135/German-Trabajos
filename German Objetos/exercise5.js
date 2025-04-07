// vehículos

class Vehiculo {
    constructor(peso, velocidadMax) {
        this.peso = peso
        this.velocidadMax = velocidadMax
    }
    
    mover() {
        console.log("El vehículo está en movimiento")
    }
}

class Carro extends Vehiculo {
    constructor(peso, velocidadMax) {
        super(peso, velocidadMax)  
    }

    mover() {
        console.log("El carro está en movimiento")
    }
}
 
 class Bicicleta extends Vehiculo {
    constructor(peso, velocidadMax) {
        super(peso, velocidadMax)
    }

    mover(){
        console.log("La bicileta está en movimiento")
    }
 }

const vehiculo1 = new Vehiculo(1500, 180)
vehiculo1.mover()

const carro1 = new Carro(1200, 220)
carro1.mover() 

const Bicicleta1 = new Bicicleta(40, 50)
Bicicleta1.mover()