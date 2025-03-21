alert ("Bienvenido usuario!")
let electrodomestico = parseFloat(prompt("Ingrese el valor del electrodómestico"))
let cuotas = parseInt(prompt("Ingrese la cantidad de meses"))
let meses = cuotas
const intereses = (5/100)
let precioTotal = (electrodomestico * intereses) + (electrodomestico)
precioTotal = precioTotal/cuotas
precioFinal = precioTotal * meses

alert (`El valor del producto es de: $${electrodomestico} pesos
    pagando a ${cuotas} meses
    pagarás cuotas de $${precioTotal} pesos
    pagando un total de $${precioFinal} pesos`)