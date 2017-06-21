var bookDictionary1 = {
	name:"LOTR: Fellowship of the ring",
	href:"http://livro1.html",
}
var bookDictionary2 = {
	name:"LOTR: The Two Towers",
	href:"http://livro2.html",
}
var bookDictionary3 = {
	name:"LOTR: Return of the King",
	href:"http://livro3.html",
}

//criar array com os dicionários para podermos usar no .each()
var Library = new Array(bookDictionary1,bookDictionary2,bookDictionary3);

function LoadData(){
	//definir uma variável que contém todos os livros
	$allBooks = $(".book");
	//.each() vai correr por cada objecto que existe no array Library
	//e dá-nos acesso a duas variáveis:
		//index = índice da lista Library que está a correr naquele momento;
		//value = valor do índice na lista, ou seja, o dicionário correspondente;
	jQuery.each(Library,function(index,value){
		//após termos o index do dicionário, conseguimos ir encontrar o livro
		//correspondente no HTML
		$currentBook = $allBooks.eq(index);
		//e mudamos os valores dos elementos
		$("h1",$currentBook).text(value.name);
		$("a",$currentBook).attr("href",value.href);
		$("a",$currentBook).text("link");
	});
}



function LoadDataWithHTML(){
	//criamos uma variável com o HTML que pretendemos inserir por CADA livro
	var HTMLtoInsert = `
		<div class="book">
			<h1></h1>
			<a></a>
		</div>`;

	jQuery.each(Library,function(index,value){
		//inserimos o HTML na div ".bookDiv" antes de fazermos qualquer alteração de valores
		$(".bookDiv").append(HTMLtoInsert);
		$currentBook = $(".book").eq(index);
		$("h1",$currentBook).text(value.name);
		$("a",$currentBook).attr("href",value.href);
		$("a",$currentBook).text("link");
	});
}