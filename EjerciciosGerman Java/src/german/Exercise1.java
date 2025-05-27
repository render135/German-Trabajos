package german;

import java.util.Scanner;

public class Exercise1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa tú edad");
		int edad = scanner.nextInt();
		
		System.out.println("Ingresa los años para sumar");
		int años = scanner.nextInt();
		
		System.out.println("Veamos cuantos años tendras dentro de " + años + " años ");
		
		if (edad <= 0) {
			System.out.println("¿Acaso no has nacido?");
		} else {
			int resultado = edad + años;
			System.out.println("Dentro de " + años + " años tendras " + resultado + " años ");
		}
	}

}
