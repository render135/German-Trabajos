package german;

import java.util.Scanner;

public class Exercise2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa el primer número");
		int numero1 = scanner.nextInt();
		
		System.out.println("Ingresa el segundo número");
		int numero2 = scanner.nextInt();
		
		int suma = numero1 + numero2;
		System.out.println("La suma de los dos numeros es: " + suma);
		
		int resta = numero1 - numero2;
		System.out.println("La resta de los dos numeros es: " + resta);
		
		int multiplicacion = numero1 * numero2;
		System.out.println("El resultado de la multiplicacion es: " + multiplicacion);
		
		if (numero2 > 0) {
			double division = (double) numero1 / numero2;
			System.out.println("El resultado de la division es: " + division);
		}else {
			System.out.println("Error, no se puede dividir entre 0");
		}
		
		if (numero2 > 0) {
			int modulo = numero1 % numero2;
			System.out.println("El resultado del módulo es de: " + modulo);
		}
	
	}

}
