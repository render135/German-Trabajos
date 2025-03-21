let numero = parseInt(prompt("Ingrese un número para saber si es par o impar:"));

alert("-------- Condicionales ---------");

if (numero % 2 === 0) {
    alert(`El número ${numero} es par.`);
} else if (numero % 2 !== 0) {
    alert(`El número ${numero} es impar.`);
} else {
    alert("Error, ingresó un valor inválido.");
}

alert("-------- Switch Case ---------");

switch (true) {
    case numero % 2 === 0:
        alert(`El número ${numero} es par.`);
        break;
    case numero % 2 !== 0:
        alert(`El número ${numero} es impar.`);
        break;
    default:
        alert("Error, ingresó un valor inválido.");
        break;
}