//declare variables

var startTimer = document.getElementById("timerStart");
var timerEl = document.getElementById("countdown");
var questionSection = document.getElementById("questionSection");
var ulCreate = document.createElement("div");
var messages = document.getElementById("messages");
var clickStop = document.getElementById("clickStop");

// declare timer variables
var timeLeft = 75;
var timerHold = 0;
var wrongPenalty = 10;

// declare variables for scores: wins, losses, to store and pull from local storage for high scores
var questionIndex = 0;
var wins = 0;
var losses = 0;

//make an array of objects
//(question: question, question: choices, key:value pair )
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within______.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    answer: "2. curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store______.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables. ",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    question:
      "A very useful tool used during development and debuggin for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console log",
    ],
    answer: "4. console log",
  },
];

// need to display question upon start quiz button click, and switch question upon answers submitted

///3 different screens/setups

function displayQuestion() {
  clickStop.classList.remove("show");
  clickStop.classList.add("hide");

  questionSection.innerHTML = "";
  ulCreate.innerHTML = "";

  var playerQuestions = questions[questionIndex].question;
  questionSection.textContent = playerQuestions;

  questions[questionIndex].choices.forEach(function (newChoice) {
    var newItem = document.createElement("p");
    newItem.textContent = newChoice;
    questionSection.appendChild(ulCreate);
    newItem.addEventListener("click", answerCheck);
    ulCreate.appendChild(newItem);
    questionSection.appendChild(ulCreate);
  });
}

// setup if -  conditional statements to check which user answer picked
function answerCheck(event) {
  clickStop.classList.remove("hide");
  clickStop.classList.add("show");

  var elCheck = event.target;

  if (elCheck.textContent == questions[questionIndex].answer) {
    wins++;
    messages.innerHTML = "You got the right answer! ";
    //when answers are wrong need to subtract time from clock
  } else {
    timeLeft = timeLeft - wrongPenalty;
    messages.innerHTML = "You guessed wrong!";
  }

  questionIndex++;

  if (questionIndex > 4) {
    messages.innerHTML = "";
    stopQuiz();
  } else {
    setTimeout(function () {
      messages.innerHTML = "";
      displayQuestion();
    }, 2000);
  }
}

// Need End section
function stopQuiz() {
  questionSection.innerHTML = "";
  timerEl.innerHTML = "";

  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", "newH1");
  newH1.textContent = "Quiz over!";

  questionSection.appendChild(newH1);

  var newP = document.createElement("div");
  newP.setAttribute("id", "newP");
  questionSection.appendChild(newP);

  if (timeLeft >= 0) {
    var secondsLeft = timeLeft;
    var newP2 = document.createElement("div");
    clearInterval(timerHold);
    newP.textContent = "Your final score: " + wins;
    newSection.appendChild(newP2);
  }
}

// make a btn and and event listener
//need to display Coding Quiz title and Start Quiz btn

startTimer.addEventListener("click", function () {
  displayQuestion(questionIndex);

  if (timerHold === 0) {
    timerHold = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerHold);
        stopQuiz();
        timerEl.textContent = "All out of time :-(";
      }
    }, 1000);
  }
});

//When questions or game is over, we need a text input for initials that pulls high scores from local storage
