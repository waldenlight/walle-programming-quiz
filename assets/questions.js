// Defin variables
var question = document.querySelector("#question");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");
var result = document.querySelector("#result")
var timer = document.querySelector("#timer")


function quiz() {
    // Timer
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval);
            // End quiz
            endQuiz();
        }
    }, 1000);

    // Correct functionality
    var correct = function () {
        result.textContent = "Correct";
        currentQuestion += 1;
        setInterval(function () {
            result.textContent = "";
            clearInterval();
            questionOn();
        }, 2000);
    };

    // Incorrect functionality
    var incorrect = function () {
        result.textContent = "Incorrect";
        // Decrease time
        timeLeft -= 15;
        currentQuestion += 1;
        setInterval(function () {
            result.textContent = "";
            clearInterval();
            questionOn();
        }, 2000);
    };

    var currentQuestion = 1;

    // Define Questions
    var questionOne = function () {
        // Set content
        question.textContent = "Which of the following is NOT a Javascript datatype?";
        answerOne.textContent = "conditional";
        answerTwo.textContent = "int";
        answerThree.textContent = "string";
        answerFour.textContent = "boolean";
        // Assign correct answer(s)
        answerOne.setAttribute("class", "correct");
        // Run correct/incorrect if clicked
        answerOne.addEventListener("click", correct);
        answerTwo.addEventListener("click", incorrect);
        answerThree.addEventListener("click", incorrect);
        answerFour.addEventListener("click", incorrect);
    }

    var questionTwo = function () {
        // Set content
        question.textContent = "Arrays in Javascript can be used to store...";
        answerOne.textContent = "integers";
        answerTwo.textContent = "arrays";
        answerThree.textContent = "strings";
        answerFour.textContent = "All the above";
        // Assign correct answer(s)
        answerFour.setAttribute("class", "correct");
        // Run correct/incorrect if clicked
        answerOne.addEventListener("click", incorrect);
        answerTwo.addEventListener("click", incorrect);
        answerThree.addEventListener("click", incorrect);
        answerFour.addEventListener("click", correct);
    }

    // Determines question user is on
    var questionOn = function () {
        if (currentQuestion === 1) {
            questionOne();
        } else if (currentQuestion === 2) {
            questionTwo();
        };
    };

    questionOn();
}

var endQuiz = function () {
    // end functionality
};

quiz();