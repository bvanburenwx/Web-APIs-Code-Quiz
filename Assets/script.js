// select element by class for the timer 
var timeEL = document.querySelector(".timeCounter");
// select element by ID for the startQuiz bttn. 
var startQuiz = document.querySelector(".startQuiz");
// selecting the questions element from HTML 
var questions = document.querySelector("#questionChoices");
// selecting the ul element to display the questions from the questions array
var createList = document.createElement("ul");

startQuiz.addEventListener("click", setTime);


var questionNumber = 0;

// variable array for questions and answers.
var quizQuestions = [
    {
        question: "What does DOM stand for?",
        choices:["Distributed Object Management", "Document Object Model", "Digital Output Module", "Document Object Management"],
        answer: "Document Object Model"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<javascript>", "<style>", "<script>"],
        answer: "<script>"
    },
    {
        question: 'How do you write "Hello World" in an alert box?', 
        choices: ['alert("Hello World")','msg("Hello World")','confirm("Hello World")','msgBox("Hello World")'],
        answer: 'alert("Hello World")'
    },
    {
        question: "Commonly used data types DO NOT include:", 
        choices:["strings", "booleans", "alerts", "numbers"], 
        answer: "alerts"
    },
    {
        question: "How does a FOR loop start?",
        choices:["for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)", "for (i <= 5; i++)"],
        answer: "for (i = 0; i <= 5; i++)"
    },
];

var secondsLeft = 76;
var startInterval = 0


function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = secondsLeft + " seconds left.";

        if(secondsLeft <= 0 || questionNumber === quizQuestions.length) {
            clearInterval(timerInterval);
            getScore()
        } 
    }, 1000);
}
