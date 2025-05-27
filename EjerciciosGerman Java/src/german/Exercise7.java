package german;

import java.util.Scanner;

public class Exercise7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa el valor del producto");
		double producto = scanner.nextDouble();
		
		final double iva = 1.19f;
		
		double resultado = (double) producto * iva;
		
		System.out.printf("El valor a pagar con iva incluido es de: %.2f pesos%n", resultado);
	}

}
