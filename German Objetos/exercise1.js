// persona y nombre
class persona {
    constructor(nombre){
        this.nombre = nombre
    }
    caminar() {
        console.log (`${this.nombre} está caminando`)
    }
}

const persona1 = new persona ("Carlos")
persona1.caminar()
const persona2 = new persona ("Juan David")
persona2.caminar()
const persona3 = new persona ("Camilo")
persona3.caminar()