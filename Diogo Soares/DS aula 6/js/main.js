// usar dicionario, passar tudo do html para jv
var book1 {name:"Nome do Vento", price="19,99", sinopse="Em seu primeiro romance - ambientado em um mundo medieval alternativo - Rothfuss conta história de Kvothe, dono da hospedaria Marco do Percurso - que leva uma vida pacata, em um vilarejo sem grandes agitações.<br>Até o dia em que salva a vida de um cronista durante o ataque noturno de “criaturas sombrias” e o abriga em sua hospedaria. Conhecendo uma misteriosa história sobre Kvothe, o cronista se oferece para escrever uma biografia do estaleiro, que exige então três dias para contá-la e afirma que dirá “nada além da verdade”.", imagpath="capa.jpg",
linkwiki="https://pt.wikipedia.org/wiki/O_Nome_do_Vento", linkFoursquare="",linkZomato="", linkOutros="",
};
var book2 {name:"As mentiras de locke lamora", price="17,99", sinopse="äsfasda", imagem= 
}
var book3 {name:"Mistborn", price="19,99", sinopse="äsfasda", imagem= 
}

function loadData (){
	$book1 = $('.Books').eq(0); 
	$("h1",$book1) 

};





// Conta os gostos e naogosto
var count = 0;
$(".Books label.countlike").text("Gostos: "+count);

$ (".Books button.like").click(function(){
	$allBooks = $(".Books");
	$parent = $(this).parents(".Books");

	var index = $allBooks.index($parent); 
	$next = $parent.next(".Books");
	if( index >= $allBooks.length-1 ){
		$next = $allBooks.eq(0);
	} 
	$parent.fadeOut(200,function(){
		$parent.removeClass("active");
		$next.fadeIn(200,function(){
			$next.addClass("active");
	count++;
    $(".Books label.countlike").text("Gostos: "+count);
		});
	});
});
var counte = 0;
$(".Books label.countdislike").text("Não Gostos: "+counte);

$ (".Books button.dislike").click(function(){
	$allBooks = $(".Books");
	$parent = $(this).parents(".Books");

	var index = $allBooks.index($parent); 
	$next = $parent.next(".Books");
	if( index >= $allBooks.length-1 ){
		$next = $allBooks.eq(0);
	} 
	$parent.fadeOut(200,function(){
		$parent.removeClass("active");
		$next.fadeIn(200,function(){
			$next.addClass("active");
	counte++;
    $(".Books label.countdislike").text("Não Gostos: "+counte);
		});
	});
});


/*  $(".Books button.dislike").click(function() {
    count++;
    $(".Books.countdislike").text("Gostaste de: "+count);

});

/*

$ (".Books button.like").click(function(){
	$allBooks = $(".Books");
	$parent = $(this).parents(".Books");

	var index = $allBooks.index($parent); 
	$next = $parent.next(".Books");
	if( index >= $allBooks.length-1 ){
		$next = $allBooks.eq(0);
	} 
	$parent.removeClass("active");
	$next.addClass("active");
})

*/





























