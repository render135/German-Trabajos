class empleado {
    constructor(nombre){
        this.nombre = nombre
    }
    trabajar(){
        console.log(`El empleado ${this.nombre} está trabajando`)
    }
}

class gerente extends empleado{
    constructor(nombre){
        super(nombre)
    }
    trabajar(){
        console.log(`El gerente ${this.nombre} está trabajando`)
    }
}

const empleado1 = new empleado("Camilo")
empleado1.trabajar()

const gerente1 = new gerente("Rúben")
gerente1.trabajar()
