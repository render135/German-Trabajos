alert ("hola, bienvenido a la calculadora de edad");
alert ("Aquí podrás saber que edad tendrás en unos años");
let nombre = prompt("¿cómo te llamas?");
alert ("Bonito nombre!");
let edadActual = parseInt(prompt("ingresa tu edad actual"));
alert ("Muy bien!");
alert ("ahora vamos a calcular tu edad en años NO en una fecha");
let añosFuturo = parseInt(prompt("Ingresa la cantidad de años"));
let añosTotal = edadActual + añosFuturo
alert (`hola ${nombre} dentro de ${añosFuturo} años tendrás ${añosTotal} años`);
