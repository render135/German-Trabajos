function notas () {
    let nota1 = parseFloat(prompt("Ingrese la primera nota"))
    let nota2 = parseFloat(prompt("Ingrese la segunda nota"))
    let nota3 = parseFloat(prompt("Ingrese la tercera nota"))
    return [nota1, nota2, nota3]
}

function promedio (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) /3
}

function promedioEstudiantes () {
let estudiante = parseInt(prompt("Ingrese el numero de estudiantes"))

for (i = 0; i<estudiante; i++) {
    alert(`Ingrese las notas del estudiante ${i + 1} `)

    let notass = notas()
    let promedios = promedio(notass[0], notass[1], notass[2])
    alert(`El promedio del estudiante ${i + 1} es : ${promedios}`)
}
}
promedioEstudiantes()
alert("Fin del programa, espero haberte ayudado!")