class InstrumentoMusical{
    constructor(instrumento){
        this.instrumento = instrumento
    }
    tocar(){
        console.log(`El instrumento está sonando`)
    }
}

class instrumento1 extends InstrumentoMusical{
    constructor(instrumento){
    super(instrumento)
}   tocar(){
    console.log(`La ${this.instrumento} está sonando`)
} 
}

class instrumento2 extends InstrumentoMusical{
    constructor(instrumento){
        super(instrumento)
    } tocar(){
        console.log(`El ${this.instrumento} está sonando`)
    }
}

const guitarra = new instrumento1("Guitarra")
guitarra.tocar()

const piano = new instrumento2("Piano")
piano.tocar()