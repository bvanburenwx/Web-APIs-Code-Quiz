// select element by class for the timer 
var timeEL = document.querySelector(".timeCounter");
// select element by ID for the startQuiz bttn. 
var startQuiz = document.getElementById("#startQuiz");

// variable array for questions and answers.
var quizQuestions = [
    {
        question1: "What does DOM stand for?",
        choices:["Distributed Object Management", "Document Object Model", "Digital Output Module", "Document Object Management"],
        answer: "Document Object Model"
    },
    {
        question2: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>," "<javascript>", "<style>", "<script>"],
        answer: "<script>"
    },
    {
        question3: "How do you write "Hello World" in an alert box?", 
        choices: ["alert("Hello World")", "msg("Hello World")", "confirm("Hello World")", "msgBox("Hello World")"],
        answer: "alert("Hello World")"
    },
    {
        question4: "Commonly used data types DO NOT include:", 
        choices:["strings", "booleans", "alerts", "numbers"], 
        answer: "alerts"
    },
    {
        question5: "How does a FOR loop start?",
        choices:["for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)" "for (i <= 5; i++)"],
        answer: "for (i = 0; i <= 5; i++)"
    },
];

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {
            
            clearInterval(timerInterval);
        } 
    }, 1000);
}