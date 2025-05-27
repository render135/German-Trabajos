package german;

import java.util.Scanner;

public class Exercise6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa el lado del cubo :)");
		double lado = scanner.nextDouble();
		
		double resultado = Math.pow(lado, 3);
		
		System.out.printf("El volumen del cubo es: %.2f cm%n", resultado);
	}

}
