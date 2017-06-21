package io.altar.jseproject.textinderface;

import java.util.Scanner;

//import io.altar.jseproject.model.Product;

public class TextInterface {
	
//	public static ArrayList<Product> pList = new ArrayList<Product>();
	
	public static void mainMenu() {
		
		// Display menu graphic
		System.out.println("============================");
		System.out.println("|       MENU SELECTION     |");
		System.out.println("============================");
		System.out.println("| Options:                 |");
		System.out.println("|    1. Listar Produtos    |");
		System.out.println("|    2. Listar Prateleiras |");
		System.out.println("|    3. Sair               |");
		System.out.println("============================");
		
		
//		int option = utils.numValidate(1, 3);
		int input = getInput(1, 3);
		switch (input) {
		case 1:
			productMenu();
			break;
		case 2:
			shelfMenu();
			break;
		case 3:
			System.out.println("FIM");
		}
	}

	public static int getInput(int min, int max) {

		Scanner s = new Scanner(System.in);
		//try (Scanner s = new Scanner(System.in)){
		int input = 0;

		while (true) {
			if (s.hasNextInt()) {
				input = s.nextInt();
				if (input >= min && input <= max) {
					return input;
				} else {
					System.out.println("Por favor introduza um numero entre " + min + " e " + max);
				}
			} else {
				System.out.println("Por favor introduza um número");
				s.next();
			}
		}
	}		
	public static void productMenu() {

		// Display menu graphics
		System.out.println("==================================");
		System.out.println("|         Product Menu           |");
		System.out.println("==================================");
		System.out.println("| Options:                       |");
		System.out.println("|    1. Criar novo Produto       |");
		System.out.println("|    2. Editar produto existente |");
		System.out.println("|    3. Consultar um produto     |");
		System.out.println("|    4. Remover um Produto       |");
		System.out.println("|    5. Voltar ao ecra anterior  |");
		System.out.println("==================================");
		
		int input = getInput(1, 5);
		switch (input) {
		case 1:
			createnewproduct();
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			mainMenu();
			break;
		}
	}
	
	public static void shelfMenu() {
		
		// Display menu graphics
		System.out.println("==================================");
		System.out.println("|          Shelf Menu            |");
		System.out.println("==================================");
		System.out.println("| Options:                       |");
		System.out.println("|    1. Criar novo Prateleira    |");
		System.out.println("|    2. Editar produto existente |");
		System.out.println("|    3. Consultar um produto     |");
		System.out.println("|    4. Remover um Produto       |");
		System.out.println("|    5. Voltar ao ecra anterior  |");
		System.out.println("==================================");
		
		int input = getInput(1, 5);
		switch (input) {
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			mainMenu();
			break;
		}
	}

	public static void createnewproduct(){
		System.out.println("===================================");
		System.out.println("Selecione os campos do novo produto");
		System.out.println("===================================");
		System.out.println("| Options:                        |");
		System.out.println("|       Prateleira                |");
//		input.next();
		System.out.println("|       Valor Unitário            |");
		
		System.out.println("|       IVA                       |");
		
		System.out.println("|       PVP                       |");
		System.out.println("===================================");
		}
}
	



	