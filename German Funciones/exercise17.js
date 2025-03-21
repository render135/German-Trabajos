function matematico(a,b,operacion) {
    let resultado;

    switch (operacion) {
        case 'resta':
            resultado= a - b;
            break;
        case 'suma':
            resultado= a + b;
            break;
        case 'multiplicacion':
            resultado= a * b;
            break;
        case 'division':
            resultado= a / b;
            break;
        default:
            return "operacion no valida"
            break;
    }
    return resultado;

}

console.log(matematico(21,3,'suma'));
console.log(matematico(21,3,'resta'));
console.log(matematico(21,3,'multiplicacion'));
console.log(matematico(21,3,'division'));