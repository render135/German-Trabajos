class CuentaBancaria {
    #saldo
    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial
    }

    #actualizarSaldo(monto) {
        this.#saldo += monto
    }

    depositar(monto) {
        if (monto > 0) {
            this.#actualizarSaldo(monto)
            console.log(`Depósito exitoso. Saldo actual: $${this.#saldo}`)
        } else {
            console.log("El monto a depositar debe ser mayor a 0.")
        }
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#actualizarSaldo(-monto);
            console.log(`Retiro exitoso. Saldo actual: $${this.#saldo}`)
        } else {
            console.log("Fondos insuficientes o monto inválido.")
        }
    }

    consultarSaldo() {
        return this.#saldo
    }
}

const cuenta = new CuentaBancaria(100000)
cuenta.depositar(500000)
cuenta.retirar(30000)
cuenta.retirar(140000)
console.log(cuenta.consultarSaldo())