function atracciones () {
let mayorEdad = parseInt(prompt("Ingresa tu edad"))
if (isNaN(mayorEdad)){
    return alert ("Ingresa una edad con números, no con letras")
} else if (mayorEdad < 18) {
    const si = prompt ("¿Tienes el permiso de un adulto?")
    if (si !="si" && si != "SI" && si != "no" && si != "NO") {
        return alert ("Ingresa si o no")
    }
    else if (si == "no" || si == "NO") {
        return alert ("No puedes entrar sin un permiso de un adulto")
    } else if (si == "si" || si == "SI") {
        alert ("Perfecto!")
    }
}

let estatura = parseFloat(prompt("Ingresa tú estatura, no es necesario agregar el simbolo CM ni ,"))
if (isNaN(estatura)) {
    return alert ("Ingresa tú estatura con números, las letras no podrán ser leidas ")
} else if (estatura < 150) {
    alert ("Lo siento, no puedes entrar, tú estatura no cumple con los requisitos establecidos")
} else {
    alert ("Cumples con todos los requisitos, puedes ingresar, disfruta tú estadía")
}
}

atracciones()