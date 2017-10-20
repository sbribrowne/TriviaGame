var time = 120
var timer;

var correctAnswers = 0;
var incorrectAnswers = 0;
var blankAnswers = 0;

window.onload = function() {	

	setTimeout(function(){
    
    alert("Time is up!")
    }, 2 * 60 * 1000);

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
	console.log(correctAnswers);
})

$(".incorrect").on("click", function incorrect() {
	incorrectAnswers++;
	console.log(incorrectAnswers);
})

};