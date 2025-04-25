class Empleado {
    static totalEmpleados = 0

    constructor(nombre, puesto) {
        this.nombre = nombre
        this.puesto = puesto
        Empleado.totalEmpleados++
    }

    static obtenerTotalEmpleados() {
        return Empleado.totalEmpleados
    }
}

class Gerente extends Empleado {
    constructor(nombre, puesto, departamento) {
        super(nombre, puesto)
        this.departamento = departamento
    }
}

const empleado1 = new Empleado("Carlos", "Desarrollador")
const empleado2 = new Empleado("Ana", "Diseñadora")
const gerente1 = new Gerente("Pedro", "Gerente", "Ventas")
const gerente2 = new Gerente("Laura", "Gerente", "Marketing")

console.log(`Total de empleados: ${Empleado.obtenerTotalEmpleados()}`)