const triviaQuestions = [
  {
    questionOne: "Which geometric shape is used for stop signs?",
    a: "Square",
    b: "Triangle",
    c: "Octagon",
    d: "Hexagon",
    correct: "Octagon",
  },
  {
    questionTwo: "What is cynophobia?",
    a: "Fear of Dogs",
    b: "Fear of Cats",
    c: "Fear of Heights",
    d: "Fear of Dentists",
    correct: "a",
  },
  {
    questionThree: "Who named the Pacific Ocean?",
    a: "Ferdinand the Bull",
    b: "Ferdinand Magellan",
    c: "Franz Ferdinand",
    d: "Ferdinand Marcos",
    correct: "b",
  },
  {
    questionFour: "What is the biggest tech company in South Korea?",
    a: "Lenovo",
    b: "Huawei",
    c: "Mitsibushi",
    d: "Samsung",
    correct: "d",
  },
];
const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#startBtn");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("#form");
const gameStats = document.querySelector("#gameStats");
const restartBtn = document.querySelector("#restartBtn");
let time = 60;
let intervalID;

function timeRemaining() {
  time--;
  timer.textContent = `${time} seconds remaining`;
  if (time === 0) {
    gameOver();
  }
}

function gameOver() {
  form.style.display = "none";
  gameStats.style.display = "block";
  restartBtn.style.display = "inline";
  clearInterval(intervalID);
}

function startGame() {
  intervalID = setInterval(timeRemaining, 1000);
  form.style.display = "block";
  startBtn.style.display = "none";
}

function submitAnswers(e) {
  e.preventDefault();
  clearInterval(intervalID);
  gameOver();
}

function restartGame() {
  time = 60;
  form.style.display = "block";
  gameStats.style.display = "none";
  restartBtn.style.display = "none";
  allOptions.forEach((option) => (option.checked = false));
  intervalID = setInterval(timeRemaining, 1000);
}

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", submitAnswers);
restartBtn.addEventListener("click", restartGame);
