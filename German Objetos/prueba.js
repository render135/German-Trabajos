class inventario {
    constructor(){
        this.videojuegos = []
    }

    ingresarVideojuego(nombre, precio, categoria){
        const videojuego = {
            nombre: nombre,
            precio: precio,
            categoria: categoria
        }
        this.videojuegos.push(videojuego)
    }

    eliminarVideojuego(nombre){
        this.videojuegos = this.videojuegos.filter(videojuego => videojuego.nombre !== nombre)
    }

    actualizarVideojuego(nombre, nuevoPrecio, nuevaCategoria) {
        const videojuego = this.videojuegos.find(v => v.nombre === nombre)
    
        if (videojuego) {
            videojuego.precio = nuevoPrecio
            videojuego.categoria = nuevaCategoria
        } else {
            console.log(`No se encontró el videojuego con el nombre: ${nombre}`)
        }
    }

    mostrarVideojuegos(){
        console.log("Los videojuegos disponibles son:")
        console.log(this.videojuegos)
    }
}

class Admin {
    constructor(nombre, contraseña, email) {
        this.nombre = nombre
        this.contraseña = contraseña
        this.email = email
    }

    agregarVideojuego(inventario, nombre, precio, categoria) {
        inventario.ingresarVideojuego(nombre, precio, categoria)
        console.log(`Admin ${this.nombre} agregó el videojuego "${nombre}".`)
    }

    eliminarVideojuego(inventario, nombre) {
        inventario.eliminarVideojuego(nombre)
        console.log(`Admin ${this.nombre} eliminó el videojuego "${nombre}".`)
    }
}

const inventario1 = new inventario()
const admin1 = new Admin("Carlos", "1234", "carlos@example.com")

admin1.agregarVideojuego(inventario1, "Zelda", 60, "Aventura")
admin1.agregarVideojuego(inventario1, "FIFA 25", 70, "Deportes")
inventario1.mostrarVideojuegos()

admin1.eliminarVideojuego(inventario1, "FIFA 25")
inventario1.mostrarVideojuegos()

