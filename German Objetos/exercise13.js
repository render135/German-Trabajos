class Cliente {
    #saldo
    constructor(nombre, saldo) {
      this.nombre = nombre
      this.#saldo = saldo
    }
  
    #calcularDescuento() {
      if (this.#saldo > 1000) {
        return 0.10
      } else if (this.#saldo > 500) {
        return 0.05
      } else {
        return 0.02
      }
    }
  
    aplicarDescuento() {
      const descuento = this.#calcularDescuento();
      const montoDescuento = this.#saldo * descuento;
      const nuevoSaldo = this.#saldo - montoDescuento;
  
      console.log(`${this.nombre}, se ha aplicado un descuento del ${descuento * 100}%.`);
      console.log(`Saldo original: $${this.#saldo.toFixed(2)}`);
      console.log(`Descuento aplicado: $${montoDescuento.toFixed(2)}`);
      console.log(`Nuevo saldo: $${nuevoSaldo.toFixed(2)}`);
  
      this.#saldo = nuevoSaldo;
    }
  }
  
  const cliente1 = new Cliente("Ana", 1200);
  cliente1.aplicarDescuento();