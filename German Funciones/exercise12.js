function notas () {
    let nota1 = parseFloat(prompt("Ingrese la primera nota"))
    let nota2 = parseFloat(prompt("Ingrese la segunda nota"))
    let nota3 = parseFloat(prompt("Ingrese la tercera nota"))
    let nota4 = parseFloat(prompt("Ingrese la cuarta nota"))
    let nota5 = parseFloat(prompt("Ingrese la quinta nota"))
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4) && !isNaN(nota5)) {
        return [nota1, nota2, nota3, nota4, nota5]   
    } else {
     alert ("Por favor ingresa un valor válido")
     return null
}
}
    function pasarAño(nota1, nota2, nota3, nota4, nota5) {
        let suma = nota1 + nota2 + nota3 + nota4 + nota5
        let resultado = suma/5
        resultado = parseFloat(resultado.toFixed(1))
        return resultado 
    } 

let notasEstudiante = notas()
if (notasEstudiante) {
    let resultado = pasarAño(...notasEstudiante)
    if (resultado >= 3.0) {
    alert (`El estudiante aprobó con una nota de ${resultado}`)
} else{
    alert (`El estudiante reprobó con una nota de ${resultado}`)
}
}
alert ("Fin del programa")

