
// Variables for start button, hiding start screen, and modifying the timer.
var startButton = document.getElementById("start-btn");

var hideStartScreen = document.querySelector(".starting-screen");

var timer = document.getElementById("time");

var secondsLeft = 30;

var timerInterval;

// Variable for my index pointer, and empty var's to store data in.
var currentIndex = 0;

var currentQuestion;


// Hiding starting screeen on the click of the start quiz button, starting countdown, and displaying first question.
startButton.addEventListener("click", function () {
    hideStartScreen.setAttribute("style", "display:none;")


    countDown();
    displayQuestion();
});

// Variables to store functions to print question text and buttons to html.
var newButton;

var buttonSelection = document.getElementById("choice-buttons");

var questionText = document.getElementById("questionContent");

// Timer
function countDown() {
    timerInterval = setInterval(function () {
        timer.textContent = "Time remaining: " + secondsLeft;
        secondsLeft--;

        if (secondsLeft <= -1) {
            endQuiz();
        }
    }, 1000);
}

function displayQuestion() {

    var questionTitle = document.getElementById("question-title");

    for (var i = 0; i < questions.length; i++) {
        if (currentIndex >= questions.length) {

            endQuiz();
        }
    }

    questionTitle.textContent = questions[currentIndex].text;

    for (var i = 0; i < questions[currentIndex].choice.length; i++) {

        newButton = document.createElement("button");

        newButton.textContent = questions[currentIndex].choice[i];
        buttonSelection.append(newButton);
        console.log(newButton)

        
    newButton.addEventListener("click", function (event) {
        if (event.target.textContent === questions[currentIndex].correct) {
            console.log("Correct!");
        }
        else {
            secondsLeft -= 5;
            console.log("Incorrect");
            console.log(currentIndex);
        }
        displayNextQuestion();
    });

    }

    function displayNextQuestion() {
        questionTitle.innerHTML = "";
        buttonSelection.innerHTML = "";

       currentIndex ++;
       if (currentIndex < questions.length) {
           displayQuestion();
       } 
       else {
           endQuiz();
       }
    }
}

function endQuiz() {
    // Clear timer
    clearInterval(timerInterval);

    questionText.setAttribute("style", "display:none;");

}


