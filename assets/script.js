
// variables

var startButton = document.getElementById("start-btn");

var hideStartScreen = document.querySelector(".starting-screen");

var timer = document.getElementById("time");

// var multipleChoice = document.querySelector("choice-buttons");

var secondsLeft = 30;
var timerInterval;

startButton.addEventListener("click", function () {
    hideStartScreen.setAttribute("style", "display:none;")

   
    countdown();
    displayQuestion();
}); 


var currentIndex = 0;
var currentQuestion;

var questionText = document.getElementById("question-text");

var choiceButtons = document.getElementById("choice-buttons");

var questionText = document.getElementById("questionContent");

function displayQuestion() {
    for (var i = 0; i < questions.length; i++) {
        if (currentIndex >= questions.length) {
            endQuiz();

        console.log("questions.length" + questions.length);
        }
        
    }



function checkAnswer(event) {
    console.log(currentQuestion);
    console.log(event.target.value);

    if (event.target.value === currentQuestion.correct) {
        console.log("Correct!");

    }
    else {
        console.log("nope");
        timeLeft = timeLeft - 3;
    }
    currentIndex++
    displayQuestion();
}

function nexrQuestion() {

}

// timer
function countdown() {
    timerInterval = setInterval(function () {
        timer.textContent = "Time remaining: " + secondsLeft;
        secondsLeft--;

        if (secondsLeft <= -1) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    // Clear timer
    clearInterval(timerInterval);

    questionText.setAttribute("style", "display:none;");

}
