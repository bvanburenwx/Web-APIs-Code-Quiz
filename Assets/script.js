// select element by class for the timer 
var timeEL = document.querySelector(".timeCounter");
// select element by ID for the startQuiz bttn. 
var startQuiz = document.querySelector(".startQuiz");
// selecting the questions element from HTML 
var choices = document.getElementById("questionChoices");
// selecting the ul element to display the questions from the questions array
var createList = document.createElement("ul");
var startScreen = document.getElementById("startScreen");
var questions = document.querySelector("#quizQuestions");
var questionIndex = 0;
 startQuiz.addEventListener("click", beginQuiz);


function beginQuiz(){
setTime();
startScreen.setAttribute("class", "hide");
startQuiz.setAttribute("class", "hide");
questions.removeAttribute("class");
// choices.removeAttribute("class");
showQuestions();

}

function showQuestions() {
   var currentQuestion = quizQuestions[questionIndex].question;
   var currentChoices = quizQuestions[questionIndex].choices;

    questions.innerHTML = currentQuestion;
    // choices.innerHTML = currentChoices;

 for (var i = 0; i < currentChoices.length; i++) {
    console.log(currentChoices[i])
     var choiceButton = document.createElement('button');
     choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", currentChoices[i]) 
     choiceButton.textContent = i + 1 + " " + currentChoices[i];

    var blah = choices.appendChild(choiceButton);
    choices.innerHTML = blah;

console.log(blah);
 }


 
}

var questionNumber = 0;

// variable array for questions and answers.
var quizQuestions = [
    {
        question: "What does DOM stand for?",
        choices:["Distributed Object Management", "Document Object Model", "Digital Output Module", "Document Object Management"],
        answer: "Document Object Model",
        userAnswer: ""
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
        } 
    }, 1000);
}

