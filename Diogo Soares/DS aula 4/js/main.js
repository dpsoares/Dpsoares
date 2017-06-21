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


$ (".Books button.like").click(function(){
	$allBooks = $(".Books");
	$parent = $(this).parents(".Books");

	var index = $allBooks.index($parent); 
	$next = $parent.next(".Books");
	if( index >= $allBooks.length-1 ){
		$next = $allBooks.eq(0);
	} 
	$parent.fadeOut(500,function(){
		$parent.removeClass("active");
		$next.fadeIn(500,function(){
			$next.addClass("active")
		})
	})
})


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
