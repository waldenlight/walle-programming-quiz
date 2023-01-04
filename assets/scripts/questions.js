// Define variables
// Questions
var displayedScore = document.querySelector("#displayed-score")
var title = document.querySelector("#title");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");

// Form
var initialForm = document.querySelector("#initial-form")
var initialLabel = document.querySelector("#initial-label");
var initialInput = document.querySelector("#initial-input")
var result = document.querySelector("#result");
var saveButton = document.querySelector("#save");

// Timer
var timeLabel = document.querySelector("#time-left");
var timer = document.querySelector("#timer");


function quiz() {
    score = 0;
    quizOver = false;
    initialForm.hidden = true;
    initialLabel.hidden = true;
    initialInput.hidden = true;
    saveButton.hidden = true;

    // Timer
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0 && !quizOver) {
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
        result.setAttribute("class", "result")
        result.textContent = "Correct";
        score += 1;
        displayedScore.textContent = score;
        currentQuestion += 1;
        window.setTimeout(function questionResult() {
            result.textContent = "";
            clearInterval(questionResult);
            questionOn();
        }, 2000);
    };

    // Incorrect functionality
    var incorrect = function () {
        result.setAttribute("class", "result")
        result.textContent = "Incorrect";
        // Decrease time
        timeLeft -= 15;
        currentQuestion += 1;
        window.setTimeout(function questionResult() {
            result.textContent = "";
            questionOn();
        }, 2000);
    };

    var currentQuestion = 1;

    // Define Questions
    var questionOne = function () {
        // Set content
        title.textContent = "Which of the following is NOT a Javascript datatype?";
        answerOne.textContent = "conditional";
        answerTwo.textContent = "int";
        answerThree.textContent = "string";
        answerFour.textContent = "boolean";
        // Run correct/incorrect if clicked
        answerOne.addEventListener("click", correct);
        answerTwo.addEventListener("click", incorrect);
        answerThree.addEventListener("click", incorrect);
        answerFour.addEventListener("click", incorrect);
    }

    var questionTwo = function () {
        // Set content
        title.textContent = "Arrays in Javascript can be used to store...";
        answerOne.textContent = "integers";
        answerTwo.textContent = "arrays";
        answerThree.textContent = "strings";
        answerFour.textContent = "All the above";
        // Reset event listeners
        answerOne.removeEventListener("click", correct);
        answerTwo.removeEventListener("click", incorrect);
        answerThree.removeEventListener("click", incorrect);
        answerFour.removeEventListener("click", incorrect);
        // Run correct/incorrect if clicked
        answerOne.addEventListener("click", incorrect);
        answerTwo.addEventListener("click", incorrect);
        answerThree.addEventListener("click", incorrect);
        answerFour.addEventListener("click", correct);
    }

    var questionThree = function () {
        // Set content
        title.textContent = "Which is a 'truthy' Javascript value?";
        answerOne.textContent = "undefined";
        answerTwo.textContent = "null";
        answerThree.textContent = "1";
        answerFour.textContent = "0";
        // Reset event listeners
        answerOne.removeEventListener("click", incorrect);
        answerTwo.removeEventListener("click", incorrect);
        answerThree.removeEventListener("click", incorrect);
        answerFour.removeEventListener("click", correct);
        // Run correct/incorrect if clicked
        answerOne.addEventListener("click", incorrect);
        answerTwo.addEventListener("click", incorrect);
        answerThree.addEventListener("click", correct);
        answerFour.addEventListener("click", incorrect);
    }

    var questionFour = function () {
        // Set content
        title.textContent = "Inside what HTML element do we put the JavaScript?";
        answerOne.textContent = "<HTML>";
        answerTwo.textContent = "<js>";
        answerThree.textContent = "<script>";
        answerFour.textContent = "<link>";
        // Assign correct answer(s)
        answerOne.removeEventListener("click", incorrect);
        answerTwo.removeEventListener("click", incorrect);
        answerThree.removeEventListener("click", correct);
        answerFour.removeEventListener("click", incorrect);
        // Run correct/incorrect if clicked
        answerOne.addEventListener("click", incorrect);
        answerTwo.addEventListener("click", incorrect);
        answerThree.addEventListener("click", correct);
        answerFour.addEventListener("click", incorrect);
    }

    var questionFive = function () {
        // Set content
        title.textContent = "What is used to print to the console?";
        answerOne.textContent = "console.log()";
        answerTwo.textContent = "print()";
        answerThree.textContent = "alert()";
        answerFour.textContent = "function()";
        // Reset even listeners
        answerOne.removeEventListener("click", incorrect);
        answerTwo.removeEventListener("click", incorrect);
        answerThree.removeEventListener("click", correct);
        answerFour.removeEventListener("click", incorrect);
        // Run correct/incorrect if clicked
        answerOne.addEventListener("click", correct);
        answerTwo.addEventListener("click", incorrect);
        answerThree.addEventListener("click", incorrect);
        answerFour.addEventListener("click", incorrect);
    }

    // End functionality
    var endQuiz = function () {
        // Remove content
        answerOne.textContent = "";
        answerTwo.textContent = "";
        answerThree.textContent = "";
        answerFour.textContent = "";
        // Stop timer
        timeLabel.hidden = true;
        // Hide question content
        answerOne.hidden = true;
        answerTwo.hidden = true;
        answerThree.hidden = true;
        answerFour.hidden = true;
        // Make form visible
        initialForm.hidden = false;
        initialLabel.hidden = false;
        initialInput.hidden = false;
        saveButton.hidden = false;
        // End prompts
        title.textContent = "All done!";
        initialLabel.textContent = "Enter your initials:";
        saveButton.textContent = "Save";
        result.textContent = "You had a score of " + score + " out of 5";
        // Submit form
        saveButton.addEventListener("click", saveScore)
        return;
    };

    // Determines question user is on
    var questionOn = function () {
        if (currentQuestion === 1) {
            questionOne();
        } else if (currentQuestion === 2) {
            questionTwo();
        } else if (currentQuestion === 3) {
            questionThree();
        } else if (currentQuestion === 4) {
            questionFour();
        } else if (currentQuestion === 5) {
            questionFive();
        } else {
            quizOver = true;
            endQuiz();
        }
    };

    questionOn();
}

quiz();

// Post Quiz Scoring
var leaderboard = document.querySelector("#leaderboard");

var userOne = document.querySelector("#user1");
var userTwo = document.querySelector("#user2");
var userThree = document.querySelector("#user3");
var userFour = document.querySelector("#user4");
var userFive = document.querySelector("#user5");

var userOneScore = document.querySelector("#u1-score");
var userTwoScore = document.querySelector("#u2-score");
var userThreeScore = document.querySelector("#u3-score");
var userFourScore = document.querySelector("#u4-score");
var userFiveScore = document.querySelector("#u5-score");

leaderboard.hidden = true;

// Save score
var saveScore = function (event) {
    // Hide form
    initialLabel.hidden = true;
    initialInput.hidden = true;
    saveButton.hidden = true;
    result.textContent = "";
    result.hidden = true;
    // Show leaderboard
    title.textContent = "Highscores";
    leaderboard.hidden = false;
    event.preventDefault();
    var quizTaker = {
        name: initialInput.value,
        score: score
    };
    localStorage.setItem("quizTaker", JSON.stringify(quizTaker));
    addToLeaderboard();
}

var initiateStandings = function () {
    // Put user in first place
    var quizTaker = JSON.parse(localStorage.getItem("quizTaker"));
    var firstPlace = {
        name: quizTaker.name,
        score: quizTaker.score,
    };
    localStorage.setItem("firstPlace", JSON.stringify(firstPlace));

    var secondPlace = {
        name: "",
        score: 0,
    };
    localStorage.setItem("secondPlace", JSON.stringify(secondPlace));

    var thirdPlace = {
        name: "",
        score: 0,
    };
    localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));

    var fourthPlace = {
        name: "",
        score: 0,
    };
    localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));

    var fifthPlace = {
        name: "",
        score: 0,
    };
    localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));
    // Add to leaderboard
    userOne.textContent = firstPlace.name;
    userOneScore.textContent = firstPlace.score;
    userTwo.textContent = secondPlace.name;
    userTwoScore.textContent = secondPlace.score;
    userThree.textContent = thirdPlace.name;
    userThreeScore.textContent = thirdPlace.score;
    userFour.textContent = fourthPlace.name;
    userFourScore.textContent = fourthPlace.score;
    userFive.textContent = fifthPlace.name;
    userFiveScore.textContent = fifthPlace.score;
};

var editStandings = function () {
    // Set standing variables
    var firstPlaceUser = JSON.parse(localStorage.getItem("firstPlace"));
    var secondPlaceUser = JSON.parse(localStorage.getItem("secondPlace"));
    var thirdPlaceUser = JSON.parse(localStorage.getItem("thirdPlace"));
    var fourthPlaceUser = JSON.parse(localStorage.getItem("fourthPlace"));
    var fifthPlaceUser = JSON.parse(localStorage.getItem("fifthPlace"));
    // Change standings
    var quizTaker = JSON.parse(localStorage.getItem("quizTaker"));
    if (quizTaker.score >= firstPlaceUser.score) {
        // Move other scores down
        var secondPlace = {
            name: firstPlaceUser.name,
            score: firstPlaceUser.score,
        };
        localStorage.setItem("secondPlace", JSON.stringify(secondPlace));
        var thirdPlace = {
            name: secondPlaceUser.name,
            score: secondPlaceUser.score,
        };
        localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));
        var fourthPlace = {
            name: thirdPlaceUser.name,
            score: thirdPlaceUser.score,
        };
        localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));
        var fifthPlace = {
            name: fourthPlaceUser.name,
            score: fourthPlaceUser.score,
        };
        localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));
        // Reassign first place
        var firstPlace = {
            name: quizTaker.name,
            score: quizTaker.score,
        };
        localStorage.setItem("firstPlace", JSON.stringify(firstPlace));
    } else if (quizTaker.score >= secondPlaceUser.score) {
        // Keep above standings
        var firstPlace = {
            name: firstPlaceUser.name,
            score: firstPlaceUser.score,
        };
        localStorage.setItem("firstPlace", JSON.stringify(firstPlace));
        // Move other scores down
        var thirdPlace = {
            name: secondPlaceUser.name,
            score: secondPlaceUser.score,
        };
        localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));
        var fourthPlace = {
            name: thirdPlaceUser.name,
            score: thirdPlaceUser.score,
        };
        localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));
        var fifthPlace = {
            name: fourthPlaceUser.name,
            score: fourthPlaceUser.score,
        };
        localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));
        // Reassign second place
        var secondPlace = {
            name: quizTaker.name,
            score: quizTaker.score,
        };
        localStorage.setItem("secondPlace", JSON.stringify(secondPlace));
    } else if (quizTaker.score >= thirdPlaceUser.score) {
        // Keep above standings
        var firstPlace = {
            name: firstPlaceUser.name,
            score: firstPlaceUser.score,
        };
        localStorage.setItem("firstPlace", JSON.stringify(firstPlace));
        var secondPlace = {
            name: secondPlaceUser.name,
            score: secondPlaceUser.score,
        };
        localStorage.setItem("secondPlace", JSON.stringify(secondPlace));
        // Move other scores down
        var fourthPlace = {
            name: thirdPlaceUser.name,
            score: thirdPlaceUser.score,
        };
        localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));
        var fifthPlace = {
            name: fourthPlaceUser.name,
            score: fourthPlaceUser.score,
        };
        localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));
        // Reassign third place
        var thirdPlace = {
            name: quizTaker.name,
            score: quizTaker.score,
        };
        localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));
    } else if (quizTaker.score >= fourthPlaceUser.score) {
        // Keep above standings
        var firstPlace = {
            name: firstPlaceUser.name,
            score: firstPlaceUser.score,
        };
        localStorage.setItem("firstPlace", JSON.stringify(firstPlace));
        var secondPlace = {
            name: secondPlaceUser.name,
            score: secondPlaceUser.score,
        };
        localStorage.setItem("secondPlace", JSON.stringify(secondPlace));
        var thirdPlace = {
            name: thirdPlaceUser.name,
            score: thirdPlaceUser.score,
        };
        localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));
        // Move other scores down
        var fifthPlace = {
            name: fourthPlaceUser.name,
            score: fourthPlaceUser.score,
        };
        localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));
        // Reassign fourth place
        var fourthPlace = {
            name: quizTaker.name,
            score: quizTaker.score,
        };
        localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));
    } else if (quizTaker.score >= fifthPlaceUser.score) {
        // Keep above standings
        var firstPlace = {
            name: firstPlaceUser.name,
            score: firstPlaceUser.score,
        };
        localStorage.setItem("firstPlace", JSON.stringify(firstPlace));
        var secondPlace = {
            name: secondPlaceUser.name,
            score: secondPlaceUser.score,
        };
        localStorage.setItem("secondPlace", JSON.stringify(secondPlace));
        var thirdPlace = {
            name: thirdPlaceUser.name,
            score: thirdPlaceUser.score,
        };
        localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));
        var fourthPlace = {
            name: fourthPlaceUser.name,
            score: fourthPlaceUser.score,
        };
        localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));
        // Reassign fifth place
        var fifthPlace = {
            name: quizTaker.name,
            score: quizTaker.score,
        };
        localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));
    };
    // Add to leaderboard
    userOne.textContent = firstPlace.name;
    userOneScore.textContent = firstPlace.score;
    userTwo.textContent = secondPlace.name;
    userTwoScore.textContent = secondPlace.score;
    userThree.textContent = thirdPlace.name;
    userThreeScore.textContent = thirdPlace.score;
    userFour.textContent = fourthPlace.name;
    userFourScore.textContent = fourthPlace.score;
    userFive.textContent = fifthPlace.name;
    userFiveScore.textContent = fifthPlace.score;
};

// Add name to leaderboard
var addToLeaderboard = function () {
    // Set user variables
    var firstPlaceUser = JSON.parse(localStorage.getItem("firstPlace"));
    // If no standings yet, initate settings
    if (!firstPlaceUser) {
        initiateStandings();
    } else {
        editStandings();
    };
};