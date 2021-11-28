

    // Validates the Players button selection.

    choiceButton.addEventListener("click", function (event) {
   
      if (
        event.target.textContent ===
        questionsData[currentQuestion].correctAnswer
      ) {
        
        score++;
        console.log("Correct");
        console.log(score);
      } else {
        
        secondsRemaining -= 10;
        console.log("Incorrect");
      }
      nextQuestion();
    });