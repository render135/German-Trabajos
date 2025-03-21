function resolverEcuacionCuadratica(a, b, c) {
    let discriminante = b * b - 4 * a * c; 

    if (discriminante < 0) {
        return "No hay soluciones reales"; 
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        return "La única solución es: x = " + x;
    } else {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return "Las soluciones son: x1 = " + x1 + " y x2 = " + x2;
    }
}


let resultado = resolverEcuacionCuadratica(1, -3, 2);
alert(resultado);