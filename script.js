var timeEle = document.querySelector(".right-timer")
var mainEle = document.querySelector(".right-timer")
var timeval = 10;

function startgame(data){
    // const json=JSON.parse(data)
    // console.log(json[0].question)
    startTimer()
}

function startTimer(){
    var timeInterval = setInterval(function(){
        console.log("timeval = ",timeval)
        timeval--
        timeEle.textContent = timeval + " seconds left"

        if (timeval === 0){
            clearInterval(timeInterval)
            sendMessage()
        }
    },1000) 
}

function sendMessage(){
    timeEl.textContent = " ";
    var imgEle=document.createElement("img")
    imgEle.setAttribute('src',"./gameover.jpg")
    mainEle.append(imgEle)

}