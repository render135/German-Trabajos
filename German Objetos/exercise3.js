// Cuenta bancaria y transacciones
class cuentaBancaria {
    #nombre
    #cedula
    #saldo
    constructor(nombre, cedula) {
        this.#nombre = nombre
        this.#cedula = cedula
        this.#saldo = 0
    }
    verCuenta(){
        console.log(`La cuenta está a nombre de ${this.#nombre} identificado con cedula de ciudadania n° ${this.#cedula}.`)
    }
    verSaldo(){
        console.log(`El saldo actual es ${this.#saldo}`)
    }
    depositar(cantidad) {
        if (cantidad > 0){
            this.#saldo += cantidad
            console.log(`Transacción realizada con exito. Saldo agregado ${cantidad}. Tú saldo actual es de ${this.#saldo}`)
        } else {
            console.log(`El valor ingresado es ${cantidad}. Este valor no es válido`)
        }
    }
    retirar(cantidad){
        if (cantidad > 0 && cantidad <= this.#saldo){
            this.#saldo -= cantidad
            console.log(`Transacción realizada con exito. Saldo retirado ${cantidad}. Tú saldo actual es de ${this.#saldo}`)
        } else {
            console.log(`No es posible retirar la cantidad ${cantidad}. Saldo insuficiente. Tú saldo actual es de ${this.#saldo}`) 
        }
    }
}

const cuenta1 = new cuentaBancaria("Juan David", 109232174)
cuenta1.verCuenta()
cuenta1.verSaldo()
cuenta1.depositar(1000)
cuenta1.retirar(300)
cuenta1.depositar(1000)
cuenta1.retirar(1200)
cuenta1.verSaldo()
