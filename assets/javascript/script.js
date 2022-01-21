const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#startBtn");
const submitBtn = document.querySelector("#submitButton");
const form = document.querySelector("#form");
const gameStats = document.querySelector("#gameStats");
const restartBtn = document.querySelector("#restartBtn");
const input = document.querySelectorAll("input");
const correct = document.querySelector("#correct");
const incorrect = document.querySelector("#incorrect");
const unanswered = document.querySelector("#unanswered");
let correctScore = 0;
let incorrectScore = 0;
let unansweredScore = 0;
let time = 60;
let intervalID;

function contentDisplay() {
  form.style.display = "block";
  startBtn.style.display = "none";
}

function timeRemaining() {
  time--;
  timer.textContent = `${time} seconds remaining`;
  console.log(time);
  if (time === 0) {
    gameOver();
  }
}

function gameOver() {
  form.style.display = "none";
  gameStats.style.display = "block";
  restartBtn.style.display = "inline";
  console.log("Game is Over");
  clearInterval(intervalID);
}

function startGame() {
  intervalID = setInterval(timeRemaining, 1000);
  contentDisplay();
}

function submitAnswers(e) {
  e.preventDefault();
  clearInterval(intervalID);
  gameOver();
  score();
}

function restartGame() {
  time = 60;
  form.style.display = "block";
  gameStats.style.display = "none";
  restartBtn.style.display = "none";
  intervalID = setInterval(timeRemaining, 1000);
  document.querySelector('input[name="shape"]:checked').checked = false;
  document.querySelector('input[name="person"]:checked').checked = false;
  document.querySelector('input[name="fear"]:checked').checked = false;
  document.querySelector('input[name="company"]:checked').checked = false;
}

function score() {
  let firstAnswer = document.querySelector('input[name="shape"]:checked').value;
  let secondAnswer = document.querySelector('input[name="fear"]:checked').value;
  let thirdAnswer = document.querySelector(
    'input[name="person"]:checked'
  ).value;
  let fourthAnswer = document.querySelector(
    'input[name="company"]:checked'
  ).value;
  console.log(input);
  correct.textContent = `Correct Answers: ${correctScore}`;
  incorrect.textContent = `Incorrect Answers: ${incorrectScore}`;
  unanswered.textContent = `Blank Answers : ${unansweredScore}`;
}

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", submitAnswers);
restartBtn.addEventListener("click", restartGame);
