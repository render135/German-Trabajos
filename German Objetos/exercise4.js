// clase animal y metodos de hacer sonido

class animal{
    hacerSonido(){
        console.log("Sonido de un animal")
    }
} class perro extends animal {
    hacerSonido(){
        console.log("Guau")
    }
}  class gato extends animal{
    hacerSonido() {
        console.log("Miau")
    }
}

const Animal = new animal()
Animal.hacerSonido()

const Perro = new perro()
Perro.hacerSonido()

const Gato = new gato()
Gato.hacerSonido()