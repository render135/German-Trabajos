let producto = prompt("Ingrese el nombre del producto:");


alert("-------------- Condicionales --------------------");

if (producto.toLowerCase() === 'lentejas') {
    alert(`El producto ${producto} No paga impuesto IVA.`);
} else if (producto.toLowerCase() === 'crema') {
    alert(`El producto ${producto} Si paga impuesto IVA.`);
} else if (producto.toLowerCase() === 'arroz') {
    alert(`El producto ${producto} No paga impuesto IVA.`);
} else if (producto.toLowerCase() === 'vino') {
    alert(`El producto ${producto} Si paga impuesto IVA.`);
} else {
    alert(`¡Ingreso un producto invalido!`);
}


alert("-------------- Switch Case --------------------");

switch (producto.toLowerCase()) {
    case 'lentejas':
        alert(`El producto ${producto} No paga impuesto IVA.`);
        break;
    case 'crema':
        alert(`El producto ${producto} Si paga impuesto IVA.`);
        break;
    case 'arroz':
        alert(`El producto ${producto} No paga impuesto IVA.`);
        break;
    case 'vino':
        alert(`El producto ${producto} Si paga impuesto IVA.`);
        break;
    default:
        alert(`¡Ingreso un producto invalido!`);
        break;
}