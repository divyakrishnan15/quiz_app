var timeEle = document.querySelector(".timer")
var scoresEle = document.querySelector(".scores")
var scoreLabelEle = document.querySelector('.score-label')
var startBtnEle = document.querySelector(".startbtn")

var quesAnsMainEle = document.querySelector(".quiz-submain")
var quesEle = document.querySelector(".question")
var ans1Ele = document.querySelector(".ans1")
var ans2Ele = document.querySelector(".ans2")
var ans3Ele = document.querySelector(".ans3")
var ans4Ele = document.querySelector(".ans4")
var result = document.querySelector('.result')
var nextBtnEle = document.querySelector(".nextbtn")

var initialsEle = document.querySelector(".alldone-initials")


var highScoreSection = document.querySelector(".highscores")
var ultag = document.querySelector('.highscores-ultag')

let colors =['green','red','grey']

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timeval = 0 ;
var value = 0;
var score=0;

if(localStorage.getItem("QuizAppGameData") === null){
    localStorage.setItem("QuizAppGameData",JSON.stringify([]))
}

var userData=JSON.parse(localStorage.getItem("QuizAppGameData"))

startGame()


// The startGame function is called when the start button is clicked
function startGame(){
    isWin = false;
    timeval = 60;
    timeEle.textContent = timeval
    document.querySelector('.quiz-submain').style.display='none'
    document.querySelector('.alldone').style.display='none'
    document.querySelector('.highscores').style.display='none'
}

//After clicking on start button, the timer will be on and questions will be displayed, start game button is not displayed
startBtnEle.addEventListener('click', function(){
    startTimer()
    displayQuestions()
});


function startTimer(){
    var timeInterval = setInterval(function(){
        // console.log("timeval = ",timeval)
        if(timeval >0){
            timeval--
            timeEle.textContent = timeval + " seconds left"
            // sendMsgWonGame()
        }

        if (timeval === 0){
            clearInterval(timeInterval)
            // sendMsgLoseGame()
        }
    },1000) 
}

function displayQuestions(){
    // console.log(data)
    // console.log(data[0].question)

    document.querySelector('.quiz-submain').style.display='flex'

    document.querySelector('.start-submain').style.display='none'
    document.querySelector('.alldone').style.display='none'

   
    quesEle.textContent = data[value].question
    ans1Ele.textContent = data[value].answer[0]
    ans2Ele.textContent = data[value].answer[1]
    ans3Ele.textContent = data[value].answer[2]
    ans4Ele.textContent = data[value].answer[3]

    checkAnswers()

    // ans1Ele.addEventListener('click',nextQuestions())
    // ans2Ele.addEventListener('click',nextQuestions())
    // ans3Ele.addEventListener('click',nextQuestions())
    // ans4Ele.addEventListener('click',nextQuestions())
}


function checkAnswers(){
    console.log("vaLUEEE === ",value)
    console.log("SCOREEE =",score)

    ans1Ele.addEventListener('click',()=>{
        console.log("ans1Ele.innerHTML = ",ans1Ele.innerHTML)
        console.log("data[value].correctAns = ",data[value].correctAns)
        if (ans1Ele.innerHTML === data[value].correctAns){
            score++
            scoresEle.textContent = score
            // ans1Ele.setAttribute('style','background-color:lightgreen;')
            result.textContent="Correct Answer"
            console.log("correct answer")
            nextQuestions()
        }else{
            // ans1Ele.setAttribute('style','background-color:red;')
            result.textContent="Wrong Answer"
            console.log("wrong answer")
            nextQuestions()
        }
    })

    ans2Ele.addEventListener('click',()=>{
        console.log("ans2Ele.innerHTML = ",ans2Ele.innerHTML)
        console.log("data[value].correctAns = ",data[value].correctAns)
        if (ans2Ele.innerHTML === data[value].correctAns){
            score++
            scoresEle.textContent = score
            // ans2Ele.setAttribute('style','background-color:lightgreen;')
            result.textContent="Correct Answer"
            console.log("correct answer")
            nextQuestions()
        }else{
            // ans2Ele.setAttribute('style','background-color:red;')
            result.textContent="Wrong Answer"
            console.log("wrong answer")
            nextQuestions()
        }
    })

    ans3Ele.addEventListener('click',()=>{
        console.log("ans3Ele.innerHTML = ",ans3Ele.innerHTML)
        console.log("data[value].correctAns = ",data[value].correctAns)
        if (ans3Ele.innerHTML === data[value].correctAns){
            score++
            scoresEle.textContent = score
            // ans3Ele.setAttribute('style','background-color:lightgreen;')
            result.textContent="Correct Answer"
            console.log("correct answer")
            nextQuestions()
        }else{
            // ans3Ele.setAttribute('style','background-color:red;')
            result.textContent="Wrong Answer"
            console.log("wrong answer")
            nextQuestions()
        }
    })

    ans4Ele.addEventListener('click',()=>{
        console.log("ans4Ele.innerHTML = ",ans4Ele.innerHTML)
        console.log("data[value].correctAns = ",data[value].correctAns)
        if (ans4Ele.innerHTML === data[value].correctAns){
            score++
            scoresEle.textContent = score
            // ans4Ele.setAttribute('style','background-color:lightgreen;')
            result.textContent="Correct Answer"
            console.log("correct answer")
            nextQuestions()
        }else{
            // ans4Ele.setAttribute('style','background-color:red;')
            result.textContent="Wrong Answer"
            console.log("wrong answer")
            nextQuestions()
        }
    })
   
}

function nextQuestions(){
    if(value < data.length){
        console.log("VAL IMP1", value)
        // console.log("QQQ = ",quesEle.innerHTML)
        value++
        console.log("VAL IMP2", value)
         displayQuestions()
        
    }else{
        document.querySelector('.alldone').style.display='flex'
        document.querySelector('.quiz-submain').style.display='none'
        // InitialHighScores()
    }

}

console.log("SCORE ===== ",score)

function InitialHighScores(){
    // console.log("e.target.value = ",e.target.value)
    // let doc_initials = document.getElementById("initials").innerHTML
    console.log("initialsEle val = ",initialsEle.value)
    // const userData={
    //     initials:initialsEle.value,
    //     scores:scoresEle.innerHTML
    // }
    console.log("userData = ",userData)

    userData.push({
            initials:initialsEle.value,
            scores:scoresEle.innerHTML
        })
        console.log("userData = ",userData)
    localStorage.setItem('QuizAppGameData',JSON.stringify(userData))
}

scoreLabelEle.addEventListener('click',()=>{
    highScores()
})

function highScores(){
    document.querySelector('.alldone').style.display='none'
    document.querySelector('.start-submain').style.display='none'
    document.querySelector('.quiz-submain').style.display='none'
    document.querySelector('.highscores').style.display='block'

    var localStorage_data= JSON.parse(localStorage.getItem("QuizAppGameData"))
    console.log("localStorage_data = ",localStorage_data)
    console.log("localStorage_data length= ",localStorage_data.length)
    console.log("initials = ",localStorage_data[1].initials)
    console.log("scores = ",localStorage_data[1].scores)

    for (let i=0;i<=localStorage_data.length-1;i++){
        var liTag = document.createElement('li')
        liTag.textContent = localStorage_data[i].initials +" "+ localStorage_data[i].scores
        ultag.appendChild(liTag)
        highScoreSection.append(ultag)
    }
}


