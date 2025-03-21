// Escriba una función que muestre los números de 1 a n, teniendo n como parámetro.

let n = parseInt(prompt("Ingrese n"))
function cadena(n){
    if (isNaN(n)) {
        alert ("Ingresa un número")
    }else{
        alert ("El resultado es:")
        for (let contador = 1; contador <= n; contador++) {
            alert (contador)
        }
        }
    }
    cadena (n)
