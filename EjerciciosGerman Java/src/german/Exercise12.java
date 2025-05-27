package german;

import java.util.Scanner;

public class Exercise12 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa grados Celsius para convertirlos a a Fahrenheit");
		double grados = scanner.nextDouble();
		
		double conversion = (grados * 9/5) + 32;
		
		System.out.println("El resultado es de " + conversion +" grados Fahrenheit");
	}

}
