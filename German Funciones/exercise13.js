function positivoNegativo(){
    let numero = parseFloat(prompt("Ingresa un número :)"))
    if (isNaN(numero) || numero == 0) {
        alert ("Por favor ingresa un número")
    }else if (numero < 0) {
        alert ("El número es negativo")
    } else if (numero > 0) {
        alert ("El número es positivo")
    }
}
positivoNegativo()