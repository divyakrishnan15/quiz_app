var timeEle = document.querySelector(".timer")
var scoresEle = document.querySelector(".scores")
var startBtnEle = document.querySelector(".startbtn")

var quesAnsMainEle = document.querySelector(".quiz-submain")
var quesEle = document.querySelector(".question")
var ans1Ele = document.querySelector(".ans1")
var ans2Ele = document.querySelector(".ans2")
var ans3Ele = document.querySelector(".ans3")
var ans4Ele = document.querySelector(".ans4")
var nextBtnEle = document.querySelector(".nextbtn")

let colors =['green','red','grey']

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timeval = 0 ;
var value = 0;
var score=0;

// The startGame function is called when the start button is clicked
function startGame(){
    isWin = false;
    timeval = 10;
    // Prevents start button from being clicked when round is in progress
    startBtnEle.disabled = true;
    // renderBlanks()
    startTimer()
    displayQuestions()
}


// Attach event listener to start button to call startGame function on click
startBtnEle.addEventListener("click", startGame());



function startTimer(){
    var timeInterval = setInterval(function(){
        // console.log("timeval = ",timeval)
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
    // console.log(data)
    // console.log(data[0].question)
   
    quesEle.textContent = data[value].question
    ans1Ele.textContent = data[value].answer[0]
    ans2Ele.textContent = data[value].answer[1]
    ans3Ele.textContent = data[value].answer[2]
    ans4Ele.textContent = data[value].answer[3]

    checkAnswers()

    nextBtnEle.addEventListener('click',()=>{
        if(value < data.length){
            console.log("VALLLLLLLUE", value)
            console.log("QQQ = ",quesEle.innerHTML)
            value+=1
             displayQuestions()
            
        }
    })

}

function checkAnswers(){
    console.log("val checkans = ",value)
    console.log("ans1Ele.innerHTML = ",ans1Ele.innerHTML)
    console.log("data[value].correctAns = ",data[value].correctAns)

    ans1Ele.addEventListener('click',()=>{
        if (ans1Ele.innerHTML === data[value].correctAns){
            score+=1
            scoresEle.textContent = score
            ans1Ele.setAttribute('style','backgrounColor:green;')
            console.log("correct answer")
        }else{
            ans1Ele.setAttribute('style','backgrounColor:red;')
            console.log("wrong answer")
        }
    })

    ans2Ele.addEventListener('click',()=>{
        if (ans2Ele.innerHTML === data[value].correctAns){
            score+=1
            scoresEle.textContent = score
            ans2Ele.setAttribute('style','backgrounColor:green;')
            console.log("correct answer")
        }else{
            ans2Ele.setAttribute('style','backgrounColor:red;')
            console.log("wrong answer")
        }
    })

    ans3Ele.addEventListener('click',()=>{
        if (ans3Ele.innerHTML === data[value].correctAns){
            score+=1
            scoresEle.textContent = score
            ans3Ele.setAttribute('style','backgrounColor:green;')
            console.log("correct answer")
        }else{
            ans3Ele.setAttribute('style','backgrounColor:red;')
            console.log("wrong answer")
        }
    })

    ans4Ele.addEventListener('click',()=>{
        if (ans4Ele.innerHTML === data[value].correctAns){
            score+=1
            scoresEle.textContent = score
            ans4Ele.setAttribute('style','backgrounColor:green;')
            console.log("correct answer")
        }else{
            ans4Ele.setAttribute('style','backgrounColor:red;')
            console.log("wrong answer")
        }
    })
   
}
console.log("SCORE ===== ",score)




function sendMessage(){
    timeEl.textContent = " ";
    var imgEle=document.createElement("img")
    imgEle.setAttribute('src',"./gameover.jpg")
    mainEle.append(imgEle)

}