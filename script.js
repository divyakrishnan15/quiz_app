var timeEle = document.querySelector(".timer")
var scoresEle = document.querySelector(".scores")
var startBtnEle = document.querySelector(".startbtn")

var quesEle = document.querySelector(".question")
var ans1Ele = document.querySelector(".ans1")
var ans2Ele = document.querySelector(".ans2")
var ans3Ele = document.querySelector(".ans3")
var ans4Ele = document.querySelector(".ans4")

// timeEle.textContent = 5 + " seconds left"

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timeval = 0 ;

// startGame()

// The startGame function is called when the start button is clicked
function startGame(){
    isWin = false;
    timeval = 10;
    // Prevents start button from being clicked when round is in progress
    // startBtnEle.disabled = true;
    // renderBlanks()
    startTimer()
    displayQuestions()
}


// Attach event listener to start button to call startGame function on click
startBtnEle.addEventListener("click", startGame());


// Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//     event.preventDefault()
//     // If the count is zero, exit function
//     if (timerCount === 0) {
//       return;
//     }
//     // checkWin();
//   });


function startTimer(){
    var timeInterval = setInterval(function(){
        console.log("timeval = ",timeval)
        timeval--
        timeEle.textContent = timeval + " seconds left"
        // sendMsgWonGame()

        if (timeval === 0){
            clearInterval(timeInterval)
            // sendMsgLoseGame()
        }
    },1000) 
}

function displayQuestions(){
    console.log(data)
    console.log(data[0].question)
    console.log(data[0].answer.answer1)

    quesEle.textContent = data[0].question
    ans1Ele.textContent = data[0].answer.answer1
    ans2Ele.textContent = data[0].answer.answer2
    ans3Ele.textContent = data[0].answer.answer3
    ans4Ele.textContent = data[0].answer.answer4

}

function sendMessage(){
    timeEl.textContent = " ";
    var imgEle=document.createElement("img")
    imgEle.setAttribute('src',"./gameover.jpg")
    mainEle.append(imgEle)

}