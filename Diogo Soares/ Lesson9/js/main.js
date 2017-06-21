// function like(button){
// 	button.parentElement.parentElement.classList.remove("active");
// 	button.parentElement.parentElement.nextElementSibling.classList.add("active");
// }	
// var book1 ={butao:"https://www.wook.pt/ebook/caim-jose-saramago/18941658", image:"C1.jpg", name:"Caim", price:"9.99€", sinopse:'Aquando da sua publicação, o livro suscitou polémicas e recebeu fortes críticas, sendo desencadeadas, nas palavras de Saramago, "a mando da Igreja Católica e com a execução dos seus homens de mão (servos), ou jornalistas de mão, ou outros que se guiam por interesses pessoais ou rancores pessoais". Saramago classificou tal "polêmica" como "uma espécie de fartar-vilanagem", dizendo que ela nem sequer lhe "tocou a pele" e que resistiria "a todas as canalhadas que se façam à volta do livro" e de sua figura.'}
// var book2 ={butao:"https://www.wook.pt/livro/ensaio-sobre-a-cegueira-jose-saramago/15825486", image:"C2.jpg", name:"Ensaio Sobre a Cegueira", price:"17.70€", sinopse:"«Este é um livro francamente terrível com o qual eu quero que o leitor sofra tanto como eu sofri ao escrevê-lo. Nele se descreve uma longa tortura. É um livro brutal e violento e é simultaneamente uma das experiências mais dolorosas da minha vida. São 300 páginas de constante aflição. Através da escrita, tentei dizer que não somos bons e que é preciso que tenhamos coragem para reconhecer isso.»"}
// var book3 ={butao:"https://www.wook.pt/livro/o-evangelho-segundo-jesus-cristo-jose-saramago/15825485", image:"C3.jpg", name:"Evangelho Segundo Jesus Cristo", price:"16.60€", sinopse:'O livro conta uma história humanizada da vida de Jesus e alude a uma sua eventual relação com Maria Madalena (no livro, foi com ela que Jesus "conheceu o amor da carne e nele se reconheceu homem"). Ao adoptar essa perspectiva, de humanização de Cristo, distante da representação tradicional do Evangelho Saramago coloca que a propagada histórica da crucificação de Jesus, "um revulsivo forte, qualquer coisa capaz de chocar as sensibilidades e arrebatar os sentimentos.'}
function LoadDataWithHTML(book){
	var HTMLtoInsert = `
      <div class="book col-sm-4 col-sm-offset-4">
        <img>
        <h1></h1>
        <h3 style="display:inline;"></h3><a class="shop" target="blank"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a>
        <p></p>
        </div>
      </div>`;


		$("#bookContainer").append(HTMLtoInsert);
		$currentBook = $(".book").eq(-1);
		$("h1",$currentBook).text(book.volumeInfo.title);
		// $("h3",$currentBook).text(book.saleInfo.listlPrice.amount);
		$("p",$currentBook).text(book.volumeInfo.description);	
		$("img",$currentBook).attr("src",book.volumeInfo.imageLinks.thumbnail);
		$("a.shop",$currentBook).attr("href",book.saleInfo.buyLink);


}

var APIKey ="AIzaSyAe6Pmvy0F37CzEUl6pFW5UbQ9PBPy9A_Q";
var UserID = "109471736623302330343";
var ShelfID = "1001";

$.ajax({
	url:"https://www.googleapis.com/books/v1/users/" + UserID + "/bookshelves/" + ShelfID + "/volumes?key=" + APIKey,

}).done(function(data){
	$.each(data.items,function(index,value){
		console.log(value);
		LoadDataWithHTML(value);
	});
	$(".book").eq(0).addClass("active");
});
// var Library = new Array(book1,book2,book3);


// 	jQuery.each(Library,function(index,value){
// 		$("#bookContainer").append(HTMLtoInsert);
// 		$currentBook = $(".book").eq(index);
// 		$("h1",$currentBook).text(value.name);
// 		$("h3",$currentBook).text(value.price);
// 		$("p",$currentBook).text(value.sinopse);	
// 		$("img",$currentBook).attr("src",value.image);
// 		$("a.shop",$currentBook).attr("href",value.butao);
// 	});
// 	
// }
// LoadDataWithHTML();

$(".book button.like").click(function(){
	$allBooks = $(".book");
	$parent = $(this).parents(".book");
	
	
	var index = $allBooks.index($parent);
	$next = $parent.next(".book");

	if( index >= $allBooks.length-1){
		$next = $allBooks.eq(0);
		$("#bookContainer").hide()
		$("#stats").show();
	}
	$parent.fadeOut(100,function(){
		$parent.removeClass("active");
		$next.fadeIn(100,function(){
			$next.addClass("active");
		})
	})
});
$(".book button.dislike").click(function(){
	$allBooks = $(".book");
	$parent = $(this).parents(".book");
	
	
	var index = $allBooks.index($parent);
	$next = $parent.next(".book");

	if( index >= $allBooks.length-1){
		$next = $allBooks.eq(0);
		$("#bookContainer").hide()
		$("#stats").show();

	}
	$parent.fadeOut(100,function(){
		$parent.removeClass("active");
		$next.fadeIn(100,function(){
			$next.addClass("active");
		})
	})
});

var count = 0;
$("#stats label.countlike").text("Gosto: "+count);
$(".book button.like").click(function(){
	count++;
	$("#stats label.countlike").text("Gosto: "+count);
});
var counte = 0;
$("#stats label.countdislike").text("Não Gosto: "+counte);
$(".book button.dislike").click(function(){
	counte++;
	$("#stats label.countdislike").text("Não Gosto: "+counte);
});
