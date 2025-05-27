package german;

import java.util.Scanner;
import java.util.Locale;

public class Exercise3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Locale.setDefault(Locale.US);
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa el nombre del electrodómestico");
		String electro = scanner.next();
		
		System.out.println("Ingresa el valor del producto");
		double precio = scanner.nextDouble();
		
		
		System.out.println("¿Desea pagar a contado?");
		String metodoPago = scanner.next();
		
		if (metodoPago.equalsIgnoreCase("si")) {
			System.out.printf("El valor a pagar total es de: %.2f Pesos, gracias por su compra%n", precio);
		} else {
			System.out.println("¿A cuantos meses deseas pagar?");
			int meses = scanner.nextInt();
			
			double iva =  0.05;
		
			double precioFinal = precio * Math.pow(1 + iva, meses);
			
			double cuotas = precioFinal / meses;
			
			System.out.printf("El valor final del producto %s es de %.2f pesos. A %d cuotas, pagarás cuotas de %.2f pesos. Gracias por su compra%n", electro, precioFinal, meses, cuotas);
		}		
	}

}
