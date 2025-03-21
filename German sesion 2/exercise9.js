let letra
alert ("Si deseas salir escribe s")
alert ("Si no quieres salir escribe cualquier otra tecla")
do {
    letra = prompt("¿Quieres salir?")
    if (!isNaN(letra)) {
        alert("Debes ingresar una letra")
    } else {
}} while (letra != "s" && letra != "S")
alert ("Gracias por usar el programa")
