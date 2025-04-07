// Trabajo en clase Persona

class Persona {
    #nombre
    constructor(nombre) {
        this.#nombre = nombre
    }
    getNombre() {
        return this.#nombre
    }
    caminar() {
        console.log(`${this.getNombre()} está caminando`)
    }
    setEdad(edad) {
        this.edad = edad
        console.log(`${this.getNombre()} tiene ${this.edad} años`)
    }
}

class Empleado extends Persona {
    #salario
    constructor(nombre, salario) {
        super(nombre) 
        this.#salario = salario
    }
    getSalario(){
        return this.#salario
    }
    setSalario(salario){
        this.#salario = salario
        console.log(`El nuevo salario de ${this.getNombre()} es de ${this.getSalario()} pesos`)
    }
    trabajar() {
        console.log(`${this.getNombre()} está trabajando`)
    }
}



const persona1 = new Persona("Juan David")
persona1.caminar()
persona1.setEdad(20)

const empleado1 = new Empleado("Juan David", 50000)
empleado1.trabajar()
empleado1.setSalario(150000)

// Cuenta bancaria

class cuentaBancaria {
    #saldo
    constructor(){
    this.#saldo = 0
}
getSaldo(){
    return this.#saldo
}
#actualizarSaldo(monto){
    this.getSaldo() += monto
4
    }
    depositar(monto){
        if (monto > 0){
         this.#actualizarSaldo(monto)
         
        }

    }
}
