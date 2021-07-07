var timeEL = document.getElementById("timeCounter");
var startQuiz = document.querySelector(".startQuiz");
var choicesEl = document.getElementById("questionChoices");
var createList = document.createElement("ul");
var startScreen = document.getElementById("startScreen");
var questions = document.querySelector("#quizQuestions");
var quizPortion = document.querySelector("#quiz-area");
var rightWrongEl = document.querySelector("#right-wrong");
var highscoreEl = document.querySelector("#highscore-area");
var userScore = document.querySelector("#final-score");
var saveButton = document.getElementById("save-button");
var userInput = document.getElementById("name");
var showScore = document.getElementById("show-highscore");
var listOfHighscores = document.getElementById("list-of-highscores");
var questionIndex = 0;
var finalScore = [];
 startQuiz.addEventListener("click", beginQuiz);


// quiz start function that takes in account several other function to make things show up and disappear (worked with tutor on this)
 function beginQuiz(){
setTime();
startScreen.setAttribute("class", "hide");
startQuiz.setAttribute("class", "hide");
quizPortion.setAttribute("class", "show")
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
            finishQuiz();
        } 
    }, 1000);
}
// function to append the questions to the same div that the title screen showed up. (worked with tutor)
function showQuestions() {
   var currentQuestion = quizQuestions[questionIndex];

   var titleEl = document.getElementById("question-title");
   titleEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";
// used a foreach function to cycle through the questions until they were all answered by user. (worked with tutor)
    currentQuestion.choices.forEach(function(choice, i){

     var choiceButton = document.createElement('button');
     choiceButton.setAttribute("class", "choice");
     choiceButton.setAttribute("value", choice);
     
     choiceButton.textContent = i + 1 + ". " + choice;

     choiceButton.onclick = compare;

     choicesEl.appendChild(choiceButton);
    })
 }
// function to compare user answers with answer key and display correct or wrong based off the input. (Tutor helped)
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

        if (questionIndex === quizQuestions.length) {
            finishQuiz();
        } else {
            showQuestions();
        } 
    }
 console.log(compare);
// function to removed questions and save the time that was left and display as user score.
// function also hide the question screen and displays the highscore screen. 
    function finishQuiz () {

        highscoreEl.setAttribute("class", "score-show");

        userScore.textContent = secondsLeft;

        quizPortion.setAttribute("class", "hide");

        timeEL.setAttribute("class", "hide");

        showScore.removeAttribute("class", "hide");
        console.log(secondsLeft);
    }

    saveButton.addEventListener("click", function () {
        var userName = userInput.value;

        if (userName === "") {

           alert("Please enter a name");
        } else {
            var savedScore = {
                Name: userName,
                score: secondsLeft 
            }
            console.log(savedScore);
            var getScore = localStorage.getItem("getScore")
            if (getScore === null) {
                getScore = [];
            } else {
                getScore = JSON.parse(getScore);
            }
            getScore.push(savedScore);
            var newScore = JSON.stringify(getScore);
            localStorage.setItem("getScore", newScore); 

            showHighScores();
        }
    })
    function showHighScores() {
    
            var getScore = localStorage.getItem("getScore")

            var storedHighscore = JSON.parse(getScore);

            for (i = 0; i < storedHighscore.length; i++) {
                var newHighscore = document.createElement("p")
                newHighscore.innerHTML = storedHighscore[i].Name + ": " + storedHighscore[i].score;
                listOfHighscores.appendChild(newHighscore);
                console.log(storedHighscore[i]);
            }      
            
    }

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