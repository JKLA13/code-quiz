// make a btn and and event listener

//research making a timer

//declare variables

var timerEl = document.getElementById("countdown");
var time = 75;
var timerCd;

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

// timer functions
// set interval
function ticktock() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    stopQuiz(); //TODO: build stop quiz function
  }
}


TODO:
//Question index 0 ++, then next question

//setup if -  conditional statements to check which user answer picked
