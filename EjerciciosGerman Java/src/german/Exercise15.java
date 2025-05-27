package german;

import java.util.Scanner;

public class Exercise15 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la cantidad de segundos: ");
        int segundos = scanner.nextInt();

        int horas = segundos / 3600;      
        int minutos = (segundos % 3600) / 60;   

        System.out.println(segundos + " segundos equivalen a " + horas + " horas y " + minutos + " minutos.");
	}
}
