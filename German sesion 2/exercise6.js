let contador = 1
let acumuladora = 0
let n = parseInt(prompt("Ingresa n para calcular los numeros naturales hasta n"))
if (n <=0) {
    alert("Los numeros naturales no pueden ser negativos o cero")
} else {
    alert (`los numeros naturales hasta ${n} son:`)
while (contador <= n) {
    alert(contador)
    acumuladora = acumuladora + contador
    contador++
  }
}
alert(`La suma de los numeros naturales hasta ${n} es: ${acumuladora}`)