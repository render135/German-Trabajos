function resolverEcuacionCuadratica(a, b, c) {
    let discriminante = b * b - 4 * a * c; 

    if (discriminante < 0) {
        return "No hay soluciones reales"; 
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        return "La única so