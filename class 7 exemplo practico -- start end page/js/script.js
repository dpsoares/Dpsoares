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

function LoadDataWithHTML(){
	//criamos uma variável com o HTML que pretendemos inserir por CADA livro
	var HTMLtoInsert = `
		<div class="book">
			<h1></h1>
			<a></a>
			<button></button>
		</div>`;

	jQuery.each(Library,function(index,value){
		//inserimos o HTML na div ".bookDiv" antes de fazermos qualquer alteração de valores
		$("#bookContainer").append(HTMLtoInsert);
		$currentBook = $(".book").eq(index);
		$("h1",$currentBook).text(value.name);
		$("a",$currentBook).attr("href",value.href);
		$("a",$currentBook).text("link");
	});
	$(".book").eq(0).addClass("active");
}
LoadDataWithHTML();

$(".book button").click(function(){
	$allBooks = $(".book");
	$book = $(this).parents(".book");
	$next = $book.next(".book");

	$book.removeClass("active");

	if( $allBooks.index($book) == $allBooks.length-1){
		$next = $allBooks.eq(0);
		$("#bookContainer").hide();
		$("#endPage").show();

	}
	$next.addClass("active");

});
$("#startButton").click(function(){
	$("#startPage").hide();
	$("#bookContainer").show();
});
$("#restartButton").click(function(){
	$("#endPage").hide();
	$("#startPage").show();
});
