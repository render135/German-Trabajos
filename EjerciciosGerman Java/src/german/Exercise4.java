package german;

import java.util.Scanner;

public class Exercise4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner scanner = new Scanner(System.in);
		 
		 System.out.println("Ingresa el área del triangulo");
		 double area = scanner.nextDouble();
		 
		 System.out.println("Ingresa la altura del triangulo");
		 double altura = scanner.nextDouble();
		 
		 double resultado = (double) area * altura;
		 
		 System.out.printf("El area del triangulo es: %.2f%n", resultado);
	}

}
