var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {

	//tx.executeSql('DROP TABLE books');

    tx.executeSql('CREATE TABLE IF NOT EXISTS books (id unique, title, opinion)');
 });




function LoadBook(book){
	var html = `
	<div class="book">
	<input type="hidden" class="hiddenFieldId"></input>
	<img>
	<h1></h1>
	</div>`;
	$('.bookContainer').append(html);
	$bookHTML = $('.book').eq(-1);

	if( typeof book.volumeInfo.title !== "undefined"){
		$('h1',$bookHTML).text(book.volumeInfo.title);
	}
	if( typeof book.volumeInfo.imageLinks !== "undefined"){
		$('img',$bookHTML).attr('src',book.volumeInfo.imageLinks.thumbnail);
	}
	if( typeof book.id !== "undefined"){
		$('.hiddenFieldId',$bookHTML).text(book.id);
	}

}


var inAnimation = false;
$('.buttons button').click(function(){
	if(!inAnimation){
		inAnimation = true;
		$book = $('.book.active');

		var id = $('.hiddenFieldId',$book).text();
		var title = $('h1',$book).text();
		var opinion = $(this).attr('data-opinion');

		db.transaction(function (tx) {
			tx.executeSql('INSERT INTO books(id, title, opinion) VALUES(?,?,?)',[id, title, opinion]);
		});

		$book.fadeOut(300,function(){
			$book.removeClass('active');
			$book.next('.book').fadeIn(300,function(){
				$book.next('.book').addClass('active');
				inAnimation = false;
			});
		});
		currentIndex++;
		if((currentIndex % 10) == 0){
			getData();
			inAnimation = false;
		}
	}
});

$('#consultDb').click(function(){
	db.transaction(function (tx) {
		tx.executeSql('SELECT * FROM books', [], function (tx, results) {
	   		$.each(results.rows,function(index,item){
				console.log(item);
			});
		}, null);
	});
});




var typing = false;
var current = null;
var currentIndex = 0;

$('#tbSearch, #tbFilter').keyup(function(event){
	if(event.which == 13){
		clearTimeout(current);
		autoSearch();
	}
	else if(!typing){
		typing = true;
		current = setTimeout( function(){ autoSearch(); }, 2000);		
	}
	else{
		clearTimeout(current);
		current = setTimeout( function(){ autoSearch(); }, 2000);	
	}
});

function autoSearch(){
	typing = false;
	currentIndex = 0;
	getData();
	
}


function getData(){
	var searchText = $('#tbSearch').val();
	if(searchText == "") return;
	var filter = $('#ddlFilter option:selected').text();
	var filterText = $('#tbFilter').val();
	var query = "";
	if(filterText != ""){			
		switch(filter){
			case 'Title':
				query = "+intitle:" + filterText;
				break;
			case 'Author':
				query = "+inauthor:" + filterText;
				break;
			case 'Publisher':
				query = "+inpublisher:" + filterText;
				break;
			case 'Subject':
				query = "+subject:" + filterText;
				break;
			case 'ISBN':
				query = "+isbn:" + filterText;
				break;
		}
	}
	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" + searchText + query + "&startIndex=" + currentIndex
	}).done(function(data){
		$('.bookContainer').empty();
		$.each(data.items,function(index,item){
			LoadBook(item);
		});
		$('.book:first-of-type').addClass('active');
	});
}

$(document).on({
    ajaxStart: function() { $('body').addClass("loading"); },
    ajaxStop: function() { $('body').removeClass("loading"); }    
});