// usar dicionario, passar tudo do html para jv
var bookDictionary1 = {name:"Nome do Vento", 
price:"19,99€", 
sinopse:"Em seu primeiro romance - ambientado em um mundo medieval alternativo - Rothfuss conta história de Kvothe, dono da hospedaria Marco do Percurso - que leva uma vida pacata, em um vilarejo sem grandes agitações.<br>Até o dia em que salva a vida de um cronista durante o ataque noturno de “criaturas sombrias” e o abriga em sua hospedaria. Conhecendo uma misteriosa história sobre Kvothe, o cronista se oferece para escrever uma biografia do estaleiro, que exige então três dias para contá-la e afirma que dirá “nada além da verdade”.", 
imagpath:"capa.jpg",
linkwiki:"https://pt.wikipedia.org/wiki/O_Nome_do_Vento", 
linkFoursquare:"https://pt.foursquare.com/",
linkZomato:"https://www.zomato.com/pt/grande-lisboa", 
linkOutros:""};

var bookDictionary2 = {name:"As mentiras de locke lamora", 
price:"19,29€", 
sinopse:"As Mentiras de Locke Lamora é um livro de fantasia de 2006 escrito por Scott Lynch, o primeiro livro da série Os Nobres Vigaristas. Vigaristas de elite que chamam a si próprios de Os Nobres Vigaristas roubam dos ricos na cidade de Camorr, uma cidade baseada na Veneza medieval, mas em um mundo sem nome. <br> Duas histórias se entrelaçam: no presente, os Nobres Vigaristas lutam contra o misterioso Rei Cinza.", 
imagpath:"capaLL.jpg",
linkwiki:"https://pt.wikipedia.org/wiki/O_Nome_do_Vento", 
linkFoursquare:"https://pt.foursquare.com/",
linkZomato:"https://www.zomato.com/pt/grande-lisboa", 
linkOutros:"http://www.slbenfica.pt/"};

// dar classses diferentes a cada link e dpois acrescentar "a fourquare"

var bookDictionary3 = {name:"Mistborn", 
price:"18,46€", 
sinopse:"O Império Final - Saga Mistborn - Nascida das Brumas Vol 1 Num mundo onde as cinzas caem do céu e as brumas dominam a noite, o povo dos Skaa vive escravizado e na absoluta miséria.Durante mais de mil anos, o Senhor Soberano governou com um poder divino inquestionável e pela força do terror. <br> Mas quando a esperança parecia perdida, um sobrevivente de nome Kelsier escapa do mais terrível cativeiro graças à estranha magia dos metais – a Alomância.", 
imagpath:"capaMB.jpg",
linkwiki:"https://pt.wikipedia.org/wiki/O_Nome_do_Vento", 
linkFoursquare:"https://pt.foursquare.com/",
linkZomato:"https://www.zomato.com/pt/grande-lisboa", 
linkOutros:"http://www.slbenfica.pt/"};

//criar array com os dicionários para podermos usar no .each()
// var Library = new Array(bookDictionary1);

// function LoadDataWithHTML(){
// 	var HTMLtoInsert = `
// 	<div class="Books col-sm-4 col-sm-offset-4">
// 	<img>
// 	<h1></h1>
// 	<h3></h3>
// 	<p></p>
// 	<div class="clearfix"> 
// 	<button type="button" class="btn btn-success btn-lg pull-left like"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>Gosto</button>
// 	<button type="button" " class="btn btn-danger btn-lg pull-right dislike"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>Não Gosto</button>
// 	</div>  
// 	<br>
// 	<div class="clearfix"> 
// 	<a class="wikipedia pull-left"; target="blank"></a> 
// 	<a class="zomato pull-right"; target="blank"></a> 
// 	</div>
// 	<div class="clearfix"> 
// 	<a class="foursquare pull-left" target="_blank"></a>
// 	<a class="outros pull-right"; target="_blank"></a>
// 	</div>
// 	</div>`;

// 	jQuery.each(Library,function(index,value){
// 		//inserimos o HTML na div ".bookDiv" antes de fazermos qualquer alteração de valores
// 		$(".bookcontainer").append(HTMLtoInsert);
// 		$currentBook = $(".Books").eq(index);
// 		$("img",$currentBook).attr("src",value.imagpath);
// 		$("h1",$currentBook).text(value.name);
// 		$("h3",$currentBook).text(value.price);
// 		$("p",$currentBook).text(value.sinopse);
		
// 		$("a.outros",$currentBook).text("Outros",value.linkOutros);
// 		$("a.zomato",$currentBook).text("Zomato",value.linkZomato);
// 		$("a.wikipedia",$currentBook).text("Wikipédia",value.linkwiki);
// 		$("a.foursquare",$currentBook).text("Foursquare",value.linkFoursquare);
		
// 		$("a.outros",$currentBook).attr("href",value.linkOutros);
// 		$("a.zomato",$currentBook).attr("href",value.linkZomato);
// 		$("a.wikipedia",$currentBook).attr("href",value.linkwiki);
// 		$("a.foursquare",$currentBook).attr("href",value.linkFoursquare)

// 		// $("h1",$currentBook).text(volumeInfo.title);
// 		// $("img",$currentBook).attr("src",value,imagpath);
// 	}); 
// 	$(".Books").eq(0).addClass("active");
// }
// LoadDataWithHTML();

var count = 0;
$(".Booksa label.countlike").text("Gostos: "+count);



var counte = 0;
$(".Booksa label.countdislike").text("Não Gostos: "+counte);
$ (".Books button.dislike").click(function(){
	$allBooks = $(".Books");
	$parent = $(this).parents(".Books");

	var index = $allBooks.index($parent); 
	$next = $parent.next(".Books");

	if( index >= $allBooks.length-1 ){
		$next = $allBooks.eq(0);
		//esconder container dos livros
		//mostrar stats
		$("#container").hide();
		$("#stats").show();
	} 
	$parent.fadeOut(200,function(){
		$parent.removeClass("active");
		$next.fadeIn(200,function(){
			$next.addClass("active");
			counte++;
			$(".Booksa label.countdislike").text("Não Gostos: "+counte);
		});
	});
});

// jquery click objects = 
// 	$(bookcontainer).on("click", ".book button", function(){
// 	console.log('clicked');
// });

$ (".Books button.like").click(function(){
	$allBooks = $(".Books");
	$parent = $(this).parents(".Books");

	var index = $allBooks.index($parent); 
	$next = $parent.next(".Books");
	if( index >= $allBooks.length-1 ){
		$next = $allBooks.eq(0);
		$("#container").hide();
		$("#stats").show();
	} 
	$parent.fadeOut(200,function(){
		$parent.removeClass("active");
		$next.fadeIn(200,function(){
			$next.addClass("active");
			count++;
			$(".Booksa label.countlike").text("Gostos: "+count);
		});
	});
});

// var APIKey = "AIzaSyDpvVpmWlQYfZH4D9AApOFy3wl3_5qWaIU";
// var UserID = "112651269133624807357";
// var ShelfID = "1002";


// $.ajax({
// 	url:"https://www.googleapis.com/books/v1/users/" + UserID + "/bookshelves/" 
// 	+ ShelfID + "/volumes?key=" + APIKey 

// }).done(function(data){
// 	console.log(data);
// 	$.each(data.items,function(index,item){
// 		var book = {name:item.volumeInfo.title}
// 		$("h1",$book).text(volumeInfo.title);
// 		$("img",$book).attr("src",value,imagpath);
// 		LoadDataWithHTML(item);
// 	});
// });

// var q = "nome do livro + inauthor:nome do autor"
// var obj;
// $.ajax({
// 	url:""
// 	datatype
// }).done(function(data){	
// 		console.log(data.items[0].id);
// });
 


// codigo andre
var APIKey = "AIzaSyDpvVpmWlQYfZH4D9AApOFy3wl3_5qWaIU";
var UserID = "112651269133624807357";
var ShelfID = "1002";

function LoadData(Books){
	var html = `
	<div class="Books col-sm-4 col-sm-offset-4">
	<img>
	<h1></h1>
	<h3></h3>
	<p></p>
	<div class="clearfix"> 
	<button type="button" class="btn btn-success btn-lg pull-left like"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>Gosto</button>
	<button type="button" " class="btn btn-danger btn-lg pull-right dislike"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>Não Gosto</button>
	</div>  
	<br>
	<div class="clearfix"> 
	<a class="wikipedia pull-left"; target="blank"></a> 
	<a class="zomato pull-right"; target="blank"></a> 
	</div>
	<div class="clearfix"> 
	<a class="foursquare pull-left" target="_blank"></a>
	<a class="outros pull-right"; target="_blank"></a>
	</div>
	</div>`;

	$(".bookcontainer").append(html);
	$bookhtml = $('.Books').eq(-1);
	$('h1',$bookhtml).text(book.volumeInfo.title);
}

$.ajax({
	url:"https://www.googleapis.com/books/v1/users/" + UserID + "/bookshelves/" 
		+ ShelfID + "/volumes?key=" + APIKey 

	}).done(function(data){
		console.log(data);
		$.each(data.items,function(index,item){
			LoadData(item);
		});
	});













