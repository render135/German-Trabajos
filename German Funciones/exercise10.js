 let palabra = prompt("Ingresa una palabra");
if (!isNaN(palabra)) {
    alert("No es una palabra");
} else { function sinVocales(palabra) {
    let resultado = ""
    for (i = 0; i < palabra.length; i++) {
        let letra = palabra[i]
        if (letra !== "a" && letra !== "e" && letra !== "i" && letra !== "o" && letra !== "u" &&
            letra !== "A" && letra !== "E" && letra !== "I" && letra !== "O" && letra !== "U") {
                resultado += letra
            }
    }
    return resultado
}
}
alert (sinVocales(palabra))