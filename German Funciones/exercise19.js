function celsiusToFahrenheit(a) {
    let convercion= ((a * 9)/5) + 32;
    return convercion;
}

let resultado= celsiusToFahrenheit(10);
console.log(`La convercion de celsius a fahrenheit es ${resultado} `);


function fahrenheitToCelsius(b) {
    let convercion1= (b - 32) * 5/9;
    return convercion1;
}

let resultado1= fahrenheitToCelsius(100);
console.log(`La conversion de fahrenheit a celsius es ${resultado1}`);