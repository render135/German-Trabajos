let numero
let acumuladora = 0
let contador = 0
alert ("Si deseas parar escribe 0")
do {
    numero = parseFloat(prompt("Ingresa un número"))
    if (isNaN(numero)) {
        alert("Ingresa un número, las letras no pueden ser promediadas")
    }else if ( numero !== 0) {
        acumuladora += numero
        contador++
    }
} while (numero !== 0);
    
     if (contador > 0) {
        let promedio = acumuladora / contador
        alert (`El promedio de los numeros ingresado es: ${promedio}`)
     }else {
        alert ("No se ingresaron números para promediar")
     }
        alert ("Gracias por usar el programa") 
