
// var count = 0; 
// console.log(document)

// //  Select increment and decrement button elements
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// // Updates count on page
// function setCounterText() {
//   countEl.textContent = count;
// }

// const Questions = [{
//     id: 0,
//     q: "Inside which HTML element do we put the JavaScript?",
//     a: [{ text: "javascript", isCorrect: false },
//         { text: "js", isCorrect: false },
//         { text: "<script>", isCorrect: true },
//         { text: "<js>", isCorrect: false }
//     ]

// },
// {
//     id: 1,
//     q: "Where is the correct place to insert a JavaScript?",
//     a: [{ text: "In the <head>", isCorrect: false, isSelected: false },
//         { text: "In he <body>", isCorrect: false },
//         { text: "In the <footer>", isCorrect: false },
//         { text: "Either in the <head> or <body>", isCorrect: true }
//     ]

// },
// {
//     id: 2,
//     q: "How can we write 'Hello' in an alert box?",
//     a: [{ text: "alertBox('Hello')", isCorrect: false },
//         { text: "msg(Hello)", isCorrect: false },
//         { text: "alert('Hello)", isCorrect: true },
//         { text: "msgBox(Hello)", isCorrect: false }
//     ]

// }

// ]
// DOM 
// DOM elements
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var headerEl = document.querySelector("#header");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var button = document.getElementById("highsestscores");
var input = document.getElementById("final-score");
var ul = document.querySelector("ol");


// quiz state variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function startQuiz() {
  //  This will hide the start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  //to hide header when quiz Begins
  headerEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  // the timer
  timerId = setInterval(clockTick, 1000);

  // this shows starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceButton.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceButton);
  });
}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // deduct time
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    // display new time on page
    timerEl.textContent = time;
    feedbackEl.textContent = "Nooooo!";
    feedbackEl.style.color = "pink";
    feedbackEl.style.fontSize = "300%";
  } else {
    feedbackEl.textContent = "Yesssss!";
    feedbackEl.style.color = "blue";
    feedbackEl.style.fontSize = "300%";
  }

  // flash right/wrong feedback
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // next question
  currentQuestionIndex++;

  // time checker
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // updates time
  time--;
  timerEl.textContent = time;

  // checks if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    // get saved scores
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));



    // redirect to next page
    window.location.href = "results.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}





submitBtn.onclick = saveHighscore;
startBtn.onclick = startQuiz;
initialsEl.onkeyup = checkForEnter;
