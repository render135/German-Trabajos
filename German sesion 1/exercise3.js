let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

if (numero1 > numero2) {
    alert(`El número #1 (${numero1}) es mayor que el número #2 (${numero2})`);
} else if (numero2 > numero1) {
    alert(`El número #2 (${numero2}) es mayor que el número #1 (${numero1})`);
} else {
    alert(`El número #1 (${numero1}) es igual que el número #2 (${numero2})`);
}