var time = 60
var timer;

var correctAnswers = 0;
var incorrectAnswers = 0;
var blankAnswers = 6;

window.onload = function() {	

setTimeout(function(){  

	$('.modal').css("display","block");
	
}, 60 * 1000);


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
	blankAnswers--;
	$("#correctresponses").html("Correct Answers: " + correctAnswers);
	$("#blank").html("Left Blank: " + blankAnswers);
	console.log(correctAnswers);
})

$(".incorrect").on("click", function incorrect() {
	incorrectAnswers++;
	blankAnswers--;
	$("#incorrectresponses").html("Incorrect Answers: " + incorrectAnswers);
	$("#blank").html("Left Blank: " + blankAnswers);
	console.log(incorrectAnswers);
})

$(".submit").on("click", function correct() {

	$('.modal').css("display","block");

})


$("#reload").on("click", function reload() {
	document.location.reload();
})


};