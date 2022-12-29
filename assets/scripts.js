// Define variables
var start = document.querySelectorAll(".start");
var questions = document.querySelectorAll(".question");
var end = document.querySelectorAll(".end");

var startButton = document.getElementById("start-button");

var question = document.getElementById("question");

mode = "start"

// var startGame = function () {
//     var state = question.getAttribute("data-state");
//     if (state === "hidden") {
//         question.setAttribute("data-state", "visible")
//         question.textContent = "Hello";
//     } else {
//         question.textContent = "";
//         question.setAttribute("data-state", "hidden")
//     }
// }

// startButton.addEventListener("click", startGame)