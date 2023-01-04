// Names
var userOne = document.querySelector("#user1");
var userTwo = document.querySelector("#user2");
var userThree = document.querySelector("#user3");
var userFour = document.querySelector("#user4");
var userFive = document.querySelector("#user5");

// Scores
var userOneScore = document.querySelector("#u1-score");
var userTwoScore = document.querySelector("#u2-score");
var userThreeScore = document.querySelector("#u3-score");
var userFourScore = document.querySelector("#u4-score");
var userFiveScore = document.querySelector("#u5-score");

var setStandings = function () {
    // If no local objects, set values
    if (!localStorage.getItem("firstPlace")) {
        var firstPlace = {
            name: "",
            score: "",
        };
        localStorage.setItem("firstPlace", JSON.stringify(firstPlace));

        var secondPlace = {
            name: "",
            score: "",
        };
        localStorage.setItem("secondPlace", JSON.stringify(secondPlace));

        var thirdPlace = {
            name: "",
            score: "",
        };
        localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));

        var fourthPlace = {
            name: "",
            score: "",
        };
        localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));

        var fifthPlace = {
            name: "",
            score: "",
        };
        localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));

        // Access new local objects
        var firstPlaceUser = JSON.parse(localStorage.getItem("firstPlace"));
        var secondPlaceUser = JSON.parse(localStorage.getItem("secondPlace"));
        var thirdPlaceUser = JSON.parse(localStorage.getItem("thirdPlace"));
        var fourthPlaceUser = JSON.parse(localStorage.getItem("fourthPlace"));
        var fifthPlaceUser = JSON.parse(localStorage.getItem("fifthPlace"));

        // Set standings content
        userOne.textContent = firstPlaceUser.name;
        userTwo.textContent = secondPlaceUser.name;
        userThree.textContent = thirdPlaceUser.name;
        userFour.textContent = fourthPlaceUser.name;
        userFive.textContent = fifthPlaceUser.name;

        userOneScore.textContent = firstPlaceUser.score;
        userTwoScore.textContent = secondPlaceUser.score;
        userThreeScore.textContent = thirdPlaceUser.score;
        userFourScore.textContent = fourthPlaceUser.score;
        userFiveScore.textContent = fifthPlaceUser.score;
    } else {
        // Access esixting local objects
        var firstPlaceUser = JSON.parse(localStorage.getItem("firstPlace"));
        var secondPlaceUser = JSON.parse(localStorage.getItem("secondPlace"));
        var thirdPlaceUser = JSON.parse(localStorage.getItem("thirdPlace"));
        var fourthPlaceUser = JSON.parse(localStorage.getItem("fourthPlace"));
        var fifthPlaceUser = JSON.parse(localStorage.getItem("fifthPlace"));

        // Set standings content
        userOne.textContent = firstPlaceUser.name;
        userTwo.textContent = secondPlaceUser.name;
        userThree.textContent = thirdPlaceUser.name;
        userFour.textContent = fourthPlaceUser.name;
        userFive.textContent = fifthPlaceUser.name;

        userOneScore.textContent = firstPlaceUser.score;
        userTwoScore.textContent = secondPlaceUser.score;
        userThreeScore.textContent = thirdPlaceUser.score;
        userFourScore.textContent = fourthPlaceUser.score;
        userFiveScore.textContent = fifthPlaceUser.score;
    };
};

setStandings();