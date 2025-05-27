package german;

import java.util.Scanner;

public class Exercise5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa el radio del circulo");
		double radio = scanner.nextDouble();
		
		final double pi = 3.14159f;
		
		double perimetro = (double) (pi * 2) * radio;
		double area = (double) pi * (radio * radio);
		
		System.out.printf("El area del circulo es: %.2f. Y el perimetro del circulo es: %.2f%n", area, perimetro);
	}

}
