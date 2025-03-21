let edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
    alert("Usted es mayor de edad.");
} else if (edad >= 1 && edad < 18) {
    alert("Usted es menor de edad.");
} else {
    alert("Usted ingresó una edad inválida.");
}