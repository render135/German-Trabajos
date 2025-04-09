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
    setEdad(edad) {
        this.edad = edad
        console.log(`${this.getNombre()} tiene ${this.edad} años`)
    }
}



const persona1 = new Persona("Juan David")
persona1.caminar()

const empleado1 = new Empleado("Juan David", 50000)
empleado1.trabajar()
empleado1.setSalario(150000)
empleado1.setEdad(20)

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
    this.#saldo += monto
    }
    depositar(monto){
        if (monto > 0){
         this.#actualizarSaldo(monto)
        } else {
            console.log("Error, el valor debe ser superior a 0")
        }
    }

    retirar(monto){
        if (monto > 0 && monto <= this.#saldo){
            this.#actualizarSaldo(-monto)
        } else {
            console.log(`Saldo insuficiente, tu saldo actual es de ${this.#saldo}`)
        }
    }
}

const cuenta1 = new cuentaBancaria
cuenta1.depositar(100000)
cuenta1.retirar(32100)
console.log(`Tu saldo actual es de ${cuenta1.getSaldo()}`)

// vehiculo

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    #encenderMotor() {
        console.log("Motor encendido.");
    }

    arrancar() {
        this.#encenderMotor();
        console.log(`${this.marca} ${this.modelo} está arrancando.`);
    }
    mover() {
        console.log("El vehículo se está moviendo.");
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
    }

    mover() {
        console.log("El coche está conduciendo por la carretera.");
    }
}

class Bicicleta extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
    }

    mover() {
        console.log("La bicicleta está pedaleando por el sendero.");
    }
}

const coche1 = new Coche("Toyota", "Corolla");
coche1.arrancar(); 
coche1.mover();   

const bici1 = new Bicicleta("Cicla", "Montaña");
bici1.mover();    
 

// EmpresaTransporte

class EmpresaTransporte {
    static totalEmpleados = 0
    
    static registrarEmpleado(){
        this.totalEmpleados ++
    }

    asignarVehiculo(empleado, vehiculo){
        console.log(`El empleado ${empleado} está trabjando en el vehiculo ${vehiculo}`)
    }
}

const empresa1 = new EmpresaTransporte()
EmpresaTransporte.registrarEmpleado()
EmpresaTransporte.registrarEmpleado()
EmpresaTransporte.registrarEmpleado()
EmpresaTransporte.registrarEmpleado()
EmpresaTransporte.registrarEmpleado()
EmpresaTransporte.registrarEmpleado()
empresa1.asignarVehiculo("Juan", "Toyota")
console.log(`El total de empleados registrados es de ${EmpresaTransporte.totalEmpleados}`)