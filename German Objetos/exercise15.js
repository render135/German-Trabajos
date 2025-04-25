class Animal{
    hacerSonido(){
        console.log(`Animal desconocido haciendo un sonido`)
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log("Un perro ladrando")
    }
}

class Gato extends Animal{
    hacerSonido(){
        console.log("Un gato maullando")
    }
}

const animal1 = new Animal()
animal1.hacerSonido()

const gato1 = new Gato()
gato1.hacerSonido()

const perro1 = new Perro()
perro1.hacerSonido()