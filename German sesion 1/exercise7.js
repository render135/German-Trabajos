let valorNumero = parseInt(prompt("Ingrese un número entre 1 y 15:"));

alert("--------- Condicionales ----------");

let esPrimo = true;

if (valorNumero > 15) {
    alert('Error, el número ingresado no está en el rango de 1 a 15.');
} else {
    if (valorNumero <= 1) {
        alert(`El número ${valorNumero} No es un número primo porque es menor o igual a 1.`);
    } else {
        for (let i = 2; i < valorNumero; i++) {
            if (valorNumero % i === 0) {
                esPrimo = false; 
                break;
            }
        }
    }

    if (esPrimo) { 
        alert(`El número ${valorNumero} Sí es un número primo.`);
    } else {
        alert(`El número ${valorNumero} No es un número primo.`);
    }
}

alert("--------- Switch Case ----------");

if (valorNumero > 15) {
    alert('Error, el número ingresado no está en el rango de 1 a 15.');
} else {
    switch (true) {
        case valorNumero <= 1:
            alert(`El número ${valorNumero} No es un número primo porque es menor o igual a 1.`);
            break;
        default:
            for (let i = 2; i < valorNumero; i++) {
                if (valorNumero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }

            if (esPrimo) { 
                alert(`El número ${valorNumero} Sí es un número primo.`);
            } else {
                alert(`El número ${valorNumero} No es un número primo.`);
            }
            break;
    }
}