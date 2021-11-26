console.log("hi!");

var questions = [
    {
        question: "two plus two equals?",
        multipleChoice: [
            "one",
            "two",
            "four"
        ],
        correct: "four"
    },

    {
        question: "one plus one equals?",
        multipleChoice: [
            "one",
            "two",
            "four"
        ],
        correct: "two"
    },

    {
        question: "one times zero equals?",
        multipleChoice: [
            "one",
            "two",
            "four"
        ],
        correct: "one"
    },
]

var startButton = document.getElementById("start-btn");
var welcome = document.querySelector(".start-screen");

startButton.addEventListener("click", function() {
        welcome.setAttribute("style", "display:none;");
        displayQuestions(questions)

});

function displayQuestions()