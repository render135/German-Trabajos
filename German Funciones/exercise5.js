//escriba una funcion que reciba un numero n como parametreo y genere su factorial

let n = parseInt(prompt("Ingresa un número entero no negativo para calcular su factorial"));

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0 || isNaN(n)) {
        return "El factorial no está definido para números negativos o no válidos";
    }
    let resultado = 1;
    for (let index = 1; index <= n; index++) {
        resultado = resultado * index;
    }
    return resultado;
}

// Llamamos a la función y mostramos el resultado
alert ("El factorial de " + n + " es: " + factorial(n));