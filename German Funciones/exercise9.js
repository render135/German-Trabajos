let cadena = prompt("Ingresa una cadena de texto");
function cantidadVocales(cadena) {
    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    for (let index = 0; index < cadena.length; index++) {
        if (vocales.includes(cadena.charAt(index))) {
            contador++;
        }
    }
    return contador;
}
alert("La cantidad de vocales en la cadena de texto es: " + cantidadVocales(cadena));