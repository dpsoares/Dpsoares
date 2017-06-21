/*

function like(button){
button.parentElement.parentElement.classList.remove("active");
button.parentElement.parentElement.nextElementSibling.classList.add("active");
} 

function dislike(button){
button.parentElement.parentElement.classList.remove("active");
button.parentElement.parentElement.nextElementSibling.classList.add("active");
} 

*/

/*
$ (".book button.like").click(function(){
	$ parent=$(this).parent(".Books");
	$ parent.removeClass("active");
	$ parent.next(".Books").addClass("active");
})
*/
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

var titulos = []
function myfunction(){
	
}






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
