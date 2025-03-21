function generarContraseña(n) {
    
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&()_;:,.";


    let contraseña = "";

    
    for (let i = 0; i < n; i++) {
        
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }

    
    return contraseña;
}


console.log(generarContraseña(10));  
console.log(generarContraseña(15));  