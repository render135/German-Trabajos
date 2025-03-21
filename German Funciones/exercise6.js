let palabra = prompt("Ingresa algo")
function esVocal(palabra) {
    let vocales = ["a", "e", "i", "o", "u"];
    if (vocales.includes(palabra)) {
        return "Es vocal";
    } else {
        return "No es vocal";
    }
}
alert(esVocal(palabra))