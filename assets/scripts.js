// // Initiate standings

// var firstPlace = {
//     name: "",
//     score: 0,
// };
// localStorage.setItem("firstPlace", JSON.stringify(firstPlace));

// var secondPlace = {
//     name: "",
//     score: 0,
// };
// localStorage.setItem("secondPlace", JSON.stringify(secondPlace));

// var thirdPlace = {
//     name: "",
//     score: 0,
// };
// localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));

// var fourthPlace = {
//     name: "",
//     score: 0,
// };
// localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));

// var fifthPlace = {
//     name: "",
//     score: 0,
// };
// localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));

// // If objects do not exist yet, assign values to them
// // var firstPlace = {
// //     name: "",
// //     score: 0,
// // };
// // var secondPlace = {
// //     name: "",
// //     score: 0,
// // };
// // var thirdPlace = {
// //     name: "",
// //     score: 0,
// // };
// // var fourthPlace = {
// //     name: "",
// //     score: 0,
// // };
// // var fifthPlace = {
// //     name: "",
// //     score: 0,
// // };

// // Set user variables
// var quizTaker = JSON.parse(localStorage.getItem("quizTaker"));
// var firstPlaceUser = JSON.parse(localStorage.getItem("firstPlaceUser"));
// var secondPlaceUser = JSON.parse(localStorage.getItem("secondPlaceUser"));
// var thirdPlaceUser = JSON.parse(localStorage.getItem("thirdPlaceUser"));
// var fourthPlaceUser = JSON.parse(localStorage.getItem("fourthPlaceUser"));
// var fifthPlaceUser = JSON.parse(localStorage.getItem("fifthPlaceUser"));
// if (quizTaker !== null) {
//     if (quizTaker.score >= firstPlace.score || !firstPlace.score) {
//         // Move down other scores
//         secondPlace.name = firstPlace.name;
//         secondPlace.score = firstPlace.score;
//         if (secondPlace.name !== "") {
//             userThree.textContent = secondPlaceUser.name;
//             userThreeScore.textContent = secondPlaceUser.score;
//         } else {
//             userThree.textContent = "";
//             userThreeScore.textContent = 0;
//         };
//         if (thirdPlaceUser) {
//             userFour.textContent = thirdPlaceUser.name;
//             userFourScore.textContent = thirdPlaceUser.score;
//         } else {
//             userFour.textContent = "";
//             userFourScore.textContent = 0;
//         };
//         if (fourthPlaceUser) {
//             userFive.textContent = fourthPlaceUser.name;
//             userFiveScore.textContent = fourthPlaceUser.score;
//         } else {
//             userFive.textContent = "";
//             userFiveScore.textContent = 0;
//         };
//         // Reassign first place
//         firstPlace.name = quizTaker.name;
//         firstPlace.score = quizTaker.score;
//         localStorage.setItem("firstPlace", JSON.stringify(firstPlace));
//         // Add to leaderboard
//         userOne.textContent = firstPlace.name;
//         userOneScore.textContent = firstPlace.score;
//     } else if (quizTaker.score >= secondPlace.score || !secondPlace.score) {
//         // Keep above scores
//         if (firstPlace.name && firstPlace.score) {
//             userOne.textContent = firstPlace.name;
//             userOneScore.textContent = firstPlace.score;
//         };
//         // Move down other scores
//         if (secondPlaceUser) {
//             userThree.textContent = secondPlaceUser.name;
//             userThreeScore.textContent = secondPlaceUser.score;
//         } else {
//             userThree.textContent = "";
//             userThreeScore.textContent = 0;
//         };
//         if (thirdPlaceUser) {
//             userFour.textContent = thirdPlaceUser.name;
//             userFourScore.textContent = thirdPlaceUser.score;
//         } else {
//             userFour.textContent = "";
//             userFourScore.textContent = 0;
//         };
//         if (fourthPlaceUser) {
//             userFive.textContent = fourthPlaceUser.name;
//             userFiveScore.textContent = fourthPlaceUser.score;
//         } else {
//             userFive.textContent = "";
//             userFiveScore.textContent = 0;
//         };
//         // Reassign second place
//         var secondPlace = {
//             name: quizTaker.name,
//             score: quizTaker.score,
//         };
//         localStorage.setItem("secondPlace", JSON.stringify(secondPlace));
//         // Add to leaderboard
//         userTwo.textContent = secondPlace.name;
//         userTwoScore.textContent = secondPlace.score;
//     } else if (quizTaker.score >= thirdPlace.score || !thirdPlace.score) {
//         // Keep above scores
//         if (thirdPlaceUser) {
//             userFour.textContent = thirdPlaceUser.name;
//             userFourScore.textContent = thirdPlaceUser.score;
//         } else {
//             userFour.textContent = "";
//             userFourScore.textContent = 0;
//         };
//         if (fourthPlaceUser) {
//             userFive.textContent = fourthPlaceUser.name;
//             userFiveScore.textContent = fourthPlaceUser.score;
//         } else {
//             userFive.textContent = "";
//             userFiveScore.textContent = 0;
//         };
//         // Move down other scores
//         if (thirdPlace.score) {
//             userFour.textContent = thirdPlace.name;
//             userFourScore.textContent = thirdPlace.score;
//         };
//         if (fourthPlace.score) {
//             userFive.textContent = fourthPlace.name;
//             userFiveScore.textContent = fourthPlace.score;
//         };
//         // Reassign third place
//         var thirdPlace = {
//             name: quizTaker.name,
//             score: quizTaker.score,
//         };
//         localStorage.setItem("thirdPlace", JSON.stringify(thirdPlace));
//         // Add to leaderboard
//         userThree.textContent = thirdPlace.name;
//         userThreeScore.textContent = thirdPlace.score;
//     } else if (quizTaker.score >= fourthPlace.score || !fourthPlace.score) {
//         // Keep above scores
//         if (firstPlace.name && firstPlace.score) {
//             userOne.textContent = firstPlace.name;
//             userOneScore.textContent = firstPlace.score;
//         };
//         if (secondPlace.name && secondPlace.score) {
//             userTwo.textContent = secondPlace.name;
//             userTwoScore.textContent = secondPlace.score;
//         };
//         if (thirdPlace.name && thirdPlace.score) {
//             userThree.textContent = thirdPlace.name;
//             userThreeScore.textContent = thirdPlace.score;
//         };
//         // Move down other scores
//         if (fourthPlaceUser) {
//             userFive.textContent = fourthPlaceUser.name;
//             userFiveScore.textContent = fourthPlaceUser.score;
//         } else {
//             userFive.textContent = "";
//             userFiveScore.textContent = 0;
//         };
//         // Reassign fourth place
//         var fourthPlace = {
//             name: quizTaker.name,
//             score: quizTaker.score,
//         };
//         localStorage.setItem("fourthPlace", JSON.stringify(fourthPlace));
//         // Add to leaderboard
//         userFour.textContent = fourthPlace.name;
//         userFourScore.textContent = fourthPlace.score;
//     } else if (quizTaker.score >= fifthPlace.score || !fifthPlace.score) {
//         // Keep above scores
//         if (firstPlace.name && firstPlace.score) {
//             userOne.textContent = firstPlace.name;
//             userOneScore.textContent = firstPlace.score;
//         };
//         if (secondPlace.name && secondPlace.score) {
//             userTwo.textContent = secondPlace.name;
//             userTwoScore.textContent = secondPlace.score;
//         };
//         if (thirdPlace.name && thirdPlace.score) {
//             userThree.textContent = thirdPlace.name;
//             userThreeScore.textContent = thirdPlace.score;
//         };
//         if (fourthPlace.name && fourthPlace.score) {
//             userFour.textContent = fourthPlace.name;
//             userFourScore.textContent = fourthPlace.score;
//         };
//         // Reassign fifth place
//         var fifthPlace = {
//             name: quizTaker.name,
//             score: quizTaker.score,
//         };
//         localStorage.setItem("fifthPlace", JSON.stringify(fifthPlace));
//         // Add to leaderboard
//         userFive.textContent = fifthPlace.name;
//         userFiveScore.textContent = fifthPlace.score;
//     };

//     // Set user variables
//     // var quizTaker = JSON.parse(localStorage.getItem("quizTaker"));
//     // var firstPlace = JSON.parse(localStorage.getItem("firstPlace"));
//     // var secondPlace = JSON.parse(localStorage.getItem("secondPlace"));
//     // var thirdPlace = JSON.parse(localStorage.getItem("thirdPlace"));
//     // var fourthPlace = JSON.parse(localStorage.getItem("fourthPlace"));
//     // var fifthPlace = JSON.parse(localStorage.getItem("fifthPlace"));

// };