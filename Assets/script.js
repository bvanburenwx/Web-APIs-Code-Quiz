var timeEL = document.getElementById("timeCounter");
var startQuiz = document.querySelector(".startQuiz");
var choicesEl = document.getElementById("questionChoices");
var createList = document.createElement("ul");
var startScreen = document.getElementById("startScreen");
var questions = document.querySelector("#quizQuestions");
var quizScreen = document.querySelector("#quiz-area");
var rightWrongEl = document.querySelector("#right-wrong");
var questionIndex = 0;
 startQuiz.addEventListener("click", beginQuiz);


function beginQuiz(){
setTime();
startScreen.setAttribute("class", "hide");
startQuiz.setAttribute("class", "hide");
quizScreen.setAttribute("class", "show")
questions.removeAttribute("class");
// choices.removeAttribute("class");
showQuestions();
}

var secondsLeft = 76
var timerInterval = 0

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = secondsLeft + " seconds left.";

        if(secondsLeft <= 0 || questionIndex === quizQuestions.length) {
            clearInterval(timerInterval);
        } 
    }, 1000);
}

function showQuestions() {
   var currentQuestion = quizQuestions[questionIndex];

   var titleEl = document.getElementById("question-title");
   titleEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i){

     var choiceButton = document.createElement('button');
     choiceButton.setAttribute("class", "choice");
     choiceButton.setAttribute("value", choice);
     
     choiceButton.textContent = i + 1 + ". " + choice;

     choiceButton.onclick = compare;

     choicesEl.appendChild(choiceButton);
    })
 }

 function compare() {
     if (this.value !== quizQuestions[questionIndex].answer) {
         secondsLeft -= 15;

         if (secondsLeft < 0) {
             secondsLeft = 0;
         }

         timeEL.textContent = secondsLeft;

         rightWrongEl.textContent = "Sorry, Wrong Answer!";
        } else {
            rightWrongEl.textContent = "Good Job, That is Correct!";
        }

        rightWrongEl.setAttribute("class", "rightWrong");
        setTimeout(function() {
            rightWrongEl.setAttribute("class", "rightWrong-hide");
        }, 500);

        questionIndex++;

        showQuestions();
 }
 console.log(compare);
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

