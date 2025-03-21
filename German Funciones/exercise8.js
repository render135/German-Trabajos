let palabra = prompt("Ingresa una palabra");
if (!isNaN(palabra)) {
    alert("No es una palabra");
} else {
function obtenerPrimeraLetra(palabra){
    return palabra.charAt(0);
}
}
alert(obtenerPrimeraLetra(palabra));
