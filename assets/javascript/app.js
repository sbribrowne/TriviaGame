var time = 10
var timer;

var correctAnswers = 0;
var incorrectAnswers = 0;
var blankAnswers = 0;

window.onload = function() {	

setTimeout(function(){  

	$('.modal').css("display","block");
	
}, 10 * 1000);


timer = setInterval(timeCounter,1000);

function timeCounter(){
	$("#timer").html(time);
	time--;

	if (time === 0) {
		clearInterval(timer);
	}

	console.log(time);
}

$(".correct").on("click", function correct() {
	correctAnswers++;
	$("#correctresponses").html("Correct Answers: " + correctAnswers);
	console.log(correctAnswers);
})

$(".incorrect").on("click", function incorrect() {
	incorrectAnswers++;
	$("#incorrectresponses").html("Incorrect Answers: " + incorrectAnswers);
	console.log(incorrectAnswers);
})

$("#reload").on("click", function reload() {
	document.location.reload();
})


};