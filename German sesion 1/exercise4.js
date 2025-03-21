let angulo1 = parseInt(prompt("Ingrese el primer ángulo del triángulo:"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo del triángulo:"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo del triángulo:"));

let sumaAngulos = angulo1 + angulo2 + angulo3;

alert("------------ Condicionales ---------------");

if (sumaAngulos === 180) {
    alert(`La suma de los ángulos es ${sumaAngulos}. Es un triángulo válido.`);
} else {
    alert(`La suma de los ángulos es ${sumaAngulos}. No es un triángulo válido.`);
}

alert("------------ Switch Case ---------------");

switch (true) { 
    case angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0:
        alert("Error, no pueden haber ángulos menores o iguales a cero.");
        break;
    case sumaAngulos === 180:
        alert(`La suma de los ángulos es ${sumaAngulos}. Es un triángulo válido.`);
        break;
    default:
        alert(`La suma de los ángulos es ${sumaAngulos}. No es un triángulo válido.`);
        break;
}