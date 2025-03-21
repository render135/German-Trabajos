let montoDelProducto= parseInt(prompt("Ingrese el precio del producto"));
let c = 0.1;
let e = 0.3;
let d= 0.2;
let montoMayores= 0.4;


function facturacion(){
    if (montoDelProducto < 200) {
        console.log(`No se hace ningun descuento, tienes que pagar ${montoDelProducto} pesos.`);        
    }else if (montoDelProducto >= 200 && montoDelProducto <= 400) {
        let mul= montoDelProducto * e ;
        let resta= montoDelProducto - mul;
        console.log(`El producto tiene 30% de descuento, tienes que pagar ${resta} pesos, si es en efectivo. `);
        console.log("----------------------");

        let mul1= montoDelProducto * d;
        let resta2= montoDelProducto - mul1;
        console.log(`El producto tiene 20% de descuento, tienes que pagar ${resta2} pesos , si se realiza con debito`);
        console.log("----------------------");

        let mul3= montoDelProducto * c;
        let resta3= montoDelProducto - mul3;
        console.log(`El producto tiene 10% de descuento, tienes que pagar ${resta3} pesos, si se realiza con credito`);
    } else{
        let mul4= montoDelProducto * montoMayores;
        let  resta4= montoDelProducto - mul4;
        console.log(`El producto tiene 40% de descuento, tienes que pagar ${resta4} pesos, de cualquier modo de pago`);
    }
    return montoDelProducto;
}

let resultado= facturacion();
console.log(`El producto vale ${resultado} pesos en general.`);