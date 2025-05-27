package german;

import java.util.Random;

public class Exercise14 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Random random = new Random();
		
		int numero = random.nextInt(100) + 1;
		
		System.out.println("El resultado del numero aleatorio entre 1 y 100 es: " + numero);
	}

}
