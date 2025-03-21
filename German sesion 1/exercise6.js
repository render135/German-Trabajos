let num = parseInt(prompt("Ingrese un número para saber si es divisible entre 5:"));

alert("--------- Condicionales ----------");

if (num % 10 === 0 || num % 10 === 5) {
    alert(`El número ${num} Sí es divisible entre 5.`);
} else {
    alert(`El número ${num} No es divisible entre 5.`);
}

alert("--------- Switch Case ----------");

switch (true) {
    case num % 10 === 0 || num % 10 === 5:
        alert(`El número ${num} Sí es divisible entre 5.`);
        break;
    default:
        alert(`El número ${num} No es divisible entre 5.`);
        break;
}