// Defin variables
var question = document.querySelector("#question");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");
var result = document.querySelector("#result")

var currentQuestion = 1;

// Define Correct/Incorrect Functionality

var correct = function () {
    result.textContent = "Correct";
    currentQuestion += 1;
    quiz();
};

var incorrect = function () {
    result.textContent = "Incorrect";
    currentQuestion += 1;
    // Decrease time

    quiz();
};

// Define Questions
var questionOne = function () {
    // Set content
    question.textContent = "Which of the following is NOT a Javascript datatype?";
    answerOne.textContent = "conditional";
    answerTwo.textContent = "int";
    answerThree.textContent = "string";
    answerFour.textContent = "boolean";
    // Assign correct/incorrect answers
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
    // Assign correct/incorrect answers
    answerFour.setAttribute("class", "correct");
    // Run correct/incorrect if clicked
    answerOne.addEventListener("click", incorrect);
    answerTwo.addEventListener("click", incorrect);
    answerThree.addEventListener("click", incorrect);
    answerFour.addEventListener("click", correct);
}

var quiz = function () {
    if (currentQuestion === 1) {
        questionOne();
    } else if (currentQuestion === 2) {
        questionTwo();
    };
};

quiz();