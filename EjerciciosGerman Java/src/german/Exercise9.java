package german;

import java.util.Scanner;

public class Exercise9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner scanner = new Scanner(System.in);

	        System.out.print("Ingrese la cantidad base: ");
	        double cantidad = scanner.nextDouble();

	        System.out.print("Ingrese el porcentaje a calcular (sin el símbolo %): ");
	        double porcentaje = scanner.nextDouble();

	        double resultado = cantidad * (porcentaje / 100);

	        System.out.println("El " + porcentaje + "% de " + cantidad + " es: " + resultado);
	}

}
