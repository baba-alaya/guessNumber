"use strict";
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let randomNumber = Math.floor(Math.random() * 20 + 1);
let userScore = 20;
let userHighscore = 0;
// console.log(randomNumber);

checkBtn.addEventListener("click", function () {
  let guessNumber = Number(guess.value);
//   console.log(
//     guessNumber,
//     randomNumber,
//     typeof guessNumber,
//     typeof randomNumber
//   );
  if (!guessNumber) {
    message.textContent = `⛔️ No Number`;
  } else if (randomNumber === guessNumber) {
    document.body.style.backgroundColor = "#60b347";
    number.textContent = randomNumber;
    message.textContent = `🎉 Correct Number!`;
    number.style.width = "30rem";
    highscore.textContent = userScore;
  } else if (randomNumber !== guessNumber) {
    if (userScore > 1) {
      userScore--;
      score.textContent = userScore;
      message.textContent =
        guessNumber > randomNumber ? "📈 Too high!" : "📉 Too low!";
    } else {
      message.textContent = `💥 You lost the game!`;
    }
  }
});

againBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  userScore = 20;
  score.textContent = userScore;
  number.textContent = '?';
  message.textContent = `Start guessing ...`;
  guess.value = ''
});
