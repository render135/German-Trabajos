class Producto{
    #precio
    constructor(nombre, precio){
        this.nombre = nombre
        this.#precio = precio
    }

    getPrecio(){
        console.log(`El precio actual es de ${this.#precio}$`)
    }

    setPrecio(newPrecio){
        this.#precio = newPrecio
    }
}

const producto1 = new Producto("Manzana", 3000)
producto1.getPrecio()
producto1.setPrecio(2500)
producto1.getPrecio()