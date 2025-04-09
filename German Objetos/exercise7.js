// Coche

class Coche{
    #encendermotor(){
        console.log("El motor está encendido")
    }

    conducir(){
        this.#encendermotor
        console.log("Está conduciendo")
    }
}

const coche1 = new Coche
coche1.conducir()