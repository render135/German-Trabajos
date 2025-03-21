const horaExtra = 2000;
let horasTrabajadas = parseInt(prompt("Ingresa la cantidad de horas trabajadas en la quincena"));

// Validamos si las horas trabajadas son un número válido
if (isNaN(horasTrabajadas) || horasTrabajadas <= 0) {
    alert("Por favor, ingresa un número válido de horas trabajadas.");
} else {
    if (horasTrabajadas <= 96) {
        alert("El trabajador no tiene horas extras.");
    } else {
        let cantidadHoras = parseInt(prompt("Ingresa la cantidad de horas extras trabajadas"));
        
        // Validamos si las horas extras son un número válido
        if (isNaN(cantidadHoras) || cantidadHoras < 0) {
            alert("Por favor, ingresa un número válido de horas extras.");
        } else {
            let valor = horaExtra * cantidadHoras;
            alert(`El valor de las horas extras es de ${valor} pesos.`);
        }
    }
}