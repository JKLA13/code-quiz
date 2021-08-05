//declare variables

var startTimer = document.getElementById("timerStart")
var timerEl = document.getElementById("countdown");
var questionSection = document.getElementById("questionSection");
var ulCreate = document.createElement("ul");

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
    answer: "3. parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store______.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. cooleans",
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
    answer: "3. console log",
  },
];

// need to display question upon start quiz button click, and switch question upon answers submitted


///3 different screens/setups

function displayQuestion(questionIndex) {
    questionSection.innerHTML = "";
    ulCreate.innerHTML = "";

    // Question index 0 ++, then next question
    // need for loops
    for  (var i = 0; i < questions.length; i++){
      var playerQuestions = questions[questionIndex].question;
      var playerAnswers = questions[questionIndex].choices;
      questionSection.textContent = playerQuestions;

    }
}

playerAnswers.forEach(function (newChoice) {
  var newItem = document.createElement("li");
  newItem.textContent = newChoice;
  questionSection.appendChild(ulCreate);
  ulCreate.appendChild(newItem);
  newItem.addEventListener("lick", (answerCheck));

});

// setup if -  conditional statements to check which user answer picked
function answerCheck(event) {
  var elCheck = event.target;

  if (elCheck.matches("li")) {
    var newSection = document.createElement("div");
    newSection.setAttribute("id", "newSection");
  }
  
  if (elCheck.textContent == questions[questionIndex].answer) {
    wins++;
    userMessage.textContent = "You got the right answer: " + questions[questionIndex].answer) {

    } else {
      timeLeft = timeLeft - wrongPenalty;
      newSection.textContent = "You guessed wrong!  Here's the correct answer: " + questions[questionIndex].answer;
    }
  }

  questionIndex ++;

  if (questionIndex >= questions.length) {
    stopQuiz();
    newSection.textContent = "Quiz Over!" + " " + "Your wins: " + wins + " out of" + questions.length + "!";

  } else {
    displayQuestion(questionIndex);
  }
  questionSection.appendChild(newSection);

// Need End section
function stopQuiz() {
  questionSection.innerHTML = "";
  timerEl.innerHTML = "";

    var newH1 = document.createElement("h1");
    newH1.setAttribute("id", "newH1");
    newH1.textContent = "Quiz over!";

    questionSection.appendChild(newH1);

    var newP = document.createElement("p");
    newP.setAttribute("id", "newP");
    questionSection.appendChild(newP);

  if (timeLeft >= 0) {
    var secondsLeft = timeLeft;
    var newP2 = document.createElement("p");
    clearInterval(timerHold);
    newP.textContent = "Your final score: " + secondsLeft;
    newSection.appendChild(newP2);
  }

}


// make a btn and and event listener
//need to display Coding Quiz title and Start Quiz btn

timerEl.addEventListener("click", function () {
    if (timerHold === 0) {
        timerHold = setInterval(function () {
            timeLeft --;
            timerEl.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerHold);
                stopQuiz();
                timerEl.textContent = "All out of time :-("
            }
        }, 1000);
    } 
}



//When questions or game is over, we need a text input for initials that pulls high scores from local storage




// timer functions
// set interval
//when answers are wrong need to subtract time from clock

// function ticktock() {
//   time--;
//   timerEl.textContent = time;

//   if (time <= 0) {
//     stopQuiz(); //TODO: build stop quiz function
//   }
// }

// setInterval(ticktock, 1000);






