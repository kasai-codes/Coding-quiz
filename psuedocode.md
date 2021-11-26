# What starting data does my app. need?
 - Q's & A's

  - Arary list for our questions

        - Each question is an object 
        {
            question: "What is a breaker bar used for?",
            multiChoiceOptions: [
                "break free rusty bolts",
                "words",
                "words",
            ]
            correct: "break free rusty bolts" 
        }

- Timer / Score 

# What kinds of actions does my app. need to do?


These can all be functions.

    - START GAME

        - hiding welcome message

        - displaying first question 

  - ANSWER A QUESTION

        - validate and compare user inout with an "if" statement

        - display next question

        - starting count down timer

        - display answer result 

        - if choice is wrong subtract time 

     - end game, stop interval with (clearInterval)
