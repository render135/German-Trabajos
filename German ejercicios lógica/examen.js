const horaExtra = 2000
let horasTrabajadas = parseInt(prompt("Ingresa la cantidad de horas trabajadas en la quincena"))

if (horasTrabajadas <= 96) {
    alert ("El trabajador no tiene horas extras")
} 

else (horasTrabajadas > 96)
 {
    let cantidadHoras = parseInt(prompt("Ingresa la cantidad de horas extras trabajadas"))
    let valor = horaExtra * cantidadHoras
    alert (`el valor de las horas extras es de ${valor} pesos`)
}