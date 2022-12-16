
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
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var headerEl = document.querySelector("#header");
var submBtn = document.querySelector("#subm");
var startBtn = document.querySelector("#start");


// variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;