package german;

import java.util.Scanner;

public class Exercise8 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner scanner = new Scanner(System.in);
		 
		 System.out.println("Ingresa el valor del producto");
		 double producto = scanner.nextDouble();
		 
		 double resultado = producto * 0.90;
		 
		 System.out.printf("El valor a pagar en total aplicando un 10 porciento de descuento es de: %.2f pesos%n", resultado);
	}

}
