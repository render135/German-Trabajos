function contarBasesADN(cadenaADN) {
    let conteo = {
        'A': 0,
        'T': 0,
        'C': 0,
        'G': 0
    };

    for (let i = 0; i < cadenaADN.length; i++) {
        let base = cadenaADN[i];

        if (conteo.hasOwnProperty(base)) {
            conteo[base]++;
        }
    }

    console.log(`Cantidad de A: ${conteo['A']}`);
    console.log(`Cantidad de T: ${conteo['T']}`);
    console.log(`Cantidad de C: ${conteo['C']}`);
    console.log(`Cantidad de G: ${conteo['G']}`);
}

contarBasesADN('ATCGGCATCGTACATG'); 