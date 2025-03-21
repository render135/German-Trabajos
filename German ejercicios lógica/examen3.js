const horaExtra = 2000
let horasTrabajadas = parseInt(prompt("Ingresa la cantidad de horas tranjadas en la quincena"))
if (isNaN(horasTrabajadas) || horasTrabajadas <= 0){
    alert ("Ingresa un valor válido")
}  else {
    if (horasTrabajadas <= 96)
        alert("El trabajador no tiene horas extras")
    else {
        let cantidadHoras = parseInt(prompt("Ingresa la cantidad de horas  extras trabajadas"))
        if (isNaN(cantidadHoras) || cantidadHoras <=0 ) {
            alert("Ingresa un valor valido")
        } else {
            let valor = horaExtra * horasTrabajadas
            alert(`El valor de las horas extra es de $${valor} pesos`)
        }
        }
}