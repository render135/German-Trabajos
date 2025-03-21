function sumaCuadrados(n) {
    let suma = 0
    for (let i = 1; i <= n; i++) {
        suma += i * i
    }
    return suma
}

let n = parseInt(prompt("Introduce el valor de n:"))

let resultado = sumaCuadrados(n)
alert("La suma de los cuadrados de los números entre 1 y " + n + " es: " + resultado)