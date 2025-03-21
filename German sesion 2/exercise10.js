let numero1 = parseFloat(prompt("Ingrese el primer número"))
let numero2 = parseFloat(prompt("Ingrese el segundo número"))
let numero3 = parseFloat(prompt("Ingrese el tercer número"))
let numero4 = parseFloat(prompt("Ingrese el cuarto número"))
let numero5 = parseFloat(prompt("Ingrese el quinto número"))
let numero6 = parseFloat(prompt("Ingrese el sexto número"))
let numero7 = parseFloat(prompt("Ingrese el septimo número"))
let numero8 = parseFloat(prompt("Ingrese el octavo número"))
let numero9 = parseFloat(prompt("Ingrese el noveno número"))
let numero10 = parseFloat(prompt("Ingrese el decimo número"))

function promedioFunction (numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10)
{
    let suma = numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10
    let promedio = suma / 10
    alert(`El promedio de los números ingresados es: ${promedio}`)
}
promedioFunction (numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10)
alert ("Fin del programa, espero haberte ayudado!")