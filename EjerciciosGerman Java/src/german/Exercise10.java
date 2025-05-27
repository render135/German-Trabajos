package german;

import java.util.Scanner;

public class Exercise10 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número real: ");
        double numero = scanner.nextDouble();

        double valorAbsoluto = Math.abs(numero);

        System.out.println("El valor absoluto es: " + valorAbsoluto);

	}

}
