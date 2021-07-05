// select element by class for the timer 
var timeEL = document.querySelector(".timeCounter");
var start = document.querySelector("#startQuiz");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {
            
            clearInterval(timerInterval);

            sendMessage();
        }
    }, 1000);
}
console.log(setTime());
start.addEventListener(click, setTime());