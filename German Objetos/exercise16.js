class Vehiculo{
    constructor(marca, tipo){
        this.marca = marca
        this.tipo = tipo
    }

    mover() {
        if (this.tipo === "montaña") {
            console.log(`El vehículo de marca ${this.marca} se está moviendo por la montaña.`)
        } else {
            console.log(`El vehículo de marca ${this.marca} se está moviendo por la carretera.`)
        }
    }
}
class Coche extends Vehiculo{
    constructor(marca, modelo, tipo){
        super(marca, tipo)
        this.modelo = modelo
    }

    mover() {
        if (this.tipo === "montaña") {
            console.log(`El coche modelo ${this.modelo} se está moviendo por la montaña.`)
        } else {
            console.log(`El coche modelo ${this.modelo} se está moviendo por la carretera.`)
        }
    }
}

class Bicicleta extends Vehiculo{
    constructor(marca, tamaño, tipo){
        super(marca, tipo)
        this.tamaño = tamaño
    }

    mover() {
        if (this.tipo === "montaña") {
            console.log(`La bicileta todo terreno de tamaño ${this.tamaño} se está moviendo por la montaña.`)
        } else if (this.tipo === "bmx"){
            console.log(`La bicileta bmx de tamaño ${this.tamaño} está haciendo maniobras en el skate park`)
        } else{
            console.log(`La bicileta de tamaño${this.tamaño} se está moviendo por la carretera.`)
        }
    }
}

const vehiculo1 = new Vehiculo("Toyota", "montaña")
vehiculo1.mover()
const vehiculo2 = new Vehiculo("Kawasaki", "carreras")
vehiculo2.mover()

const coche1 = new Coche("Nissan", "4x4", "montaña")
coche1.mover()

const bici1 = new Bicicleta("Trek", "M", "bmx")
bici1.mover()