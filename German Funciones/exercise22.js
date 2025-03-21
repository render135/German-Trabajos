let nota1= 9;
let nota2= 3;
let nota3 = 2; 


function calcularPromedio(){
    let promedio= (nota1 + nota2 + nota3) / 3;
    return promedio;
}

function esAprobado(promedio){
    if (promedio >= 6) {
        return true;
    }

    return false
}

function mostrarResultado(){
    let promedio= calcularPromedio();
    if (esAprobado(promedio)) {
        console.log(`El estudiante Aprobo, el promedio fue de ${promedio}`);
    } else{
        console.log(`El estudiante no Aprobo, el promedio fue de ${promedio}`);
    }
}

mostrarResultado();