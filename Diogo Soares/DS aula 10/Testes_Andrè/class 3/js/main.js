var counter = 0;
document.getElementById("counter").innerHTML = counter;

function IncrementarContador(){
	counter++;
	document.getElementById("counter").innerHTML = counter;	
}

function ToggleDiv(){
	if(document.getElementById("divEscondida").style.display == "block"){
		document.getElementById("divEscondida").style.display = "none";
	}
	else if(document.getElementById("divEscondida").style.display == "none"){
		document.getElementById("divEscondida").style.display = "block";
	}

}

var timer = 0;
var timerObject;
var isRunning = false;
document.getElementById("timer").innerHTML = timer;

function startTimer(){
	if(!isRunning){
		timerObject = setInterval(function(){ 
			timer++;
			document.getElementById("timer").innerHTML = timer;
		}, 1000);
		isRunning = true;
	}
	else{ console.log("O timer já está a correr!"); }
	
}
function stopTimer(){
	clearInterval(timerObject);
	isRunning = false;
}


// console.log("Operações aritméticas");

// var x = 1;
// var y = 2;

/*console.log( x + y );
console.log( x - y );
console.log( x * y );
console.log( x / y );*/

// var t = true;
// var f = false;

// console.log("Operações lógicas");

// console.log("AND");

// console.log( t && t );
// console.log( t && f );
// console.log( f && t );
// console.log( f && f );

// console.log("OR");

// console.log( t || t );
// console.log( t || f );
// console.log( f || t );
// console.log( f || f );