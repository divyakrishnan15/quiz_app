var timeEle = document.querySelector(".timer");
var scoresEle = document.querySelector(".scores");
var highScoreLabelEle = document.querySelector(".score-label");
var startBtnEle = document.querySelector(".startbtn");

var quesAnsMainEle = document.querySelector(".quiz-submain");
var quesEle = document.querySelector(".question");
var ans1Ele = document.querySelector(".ans1");
var ans2Ele = document.querySelector(".ans2");
var ans3Ele = document.querySelector(".ans3");
var ans4Ele = document.querySelector(".ans4");
var result = document.querySelector(".result");
var nextBtnEle = document.querySelector(".nextbtn");
var AnsWrapperEle = document.querySelector(".ans-btn-wrapper");
var AnsBtnsEles = document.querySelectorAll(".ans-btn");
var q_numEle = document.querySelector(".q_num");

var allDoneScoreEle = document.querySelector(".alldone-score");
var initialsEle = document.querySelector(".alldone-initials");
var allDoneSubmitEle = document.querySelector(".alldone-submit");

var highScoreSection = document.querySelector(".highscores");
var ultag = document.querySelector(".highscores-ultag");
var goBackBtn = document.querySelector(".highscores-gobackbtn");
var clearHighScoreBtn = document.querySelector(".highscores-clearbtn");

var gameOverEle = document.querySelector(".gameover");

var timeval = 300;
var q_num = 0;
var score = 0;

if (localStorage.getItem("QuizAppGameData") === null) {
  localStorage.setItem("QuizAppGameData", JSON.stringify([]));
}

var userData = JSON.parse(localStorage.getItem("QuizAppGameData"));

startQuiz();

// The startGame function is called when the start button is clicked
function startQuiz() {
  isWin = false;
  timeval = 300;
  timeEle.textContent = 300;
  document.querySelector(".quiz-submain").style.display = "none";
  document.querySelector(".alldone").style.display = "none";
  document.querySelector(".highscores").style.display = "none";
  gameOverEle.style.display = "none";
}

//After clicking on start button, the timer will be on and questions will be displayed, start game button is not displayed
startBtnEle.addEventListener("click", function () {
  startTimer();
  displayQuestions(q_num, timeval);
});

function startTimer() {
  var timeInterval = setInterval(function () {
    // console.log("timeval = ",timeval)
    if (timeval > 0) {
      timeval--;
      timeEle.textContent = timeval;
    }

    if (timeval <= 0) {
      clearInterval(timeInterval);
      endGame(timeval, q_num);
    }
  }, 1000);
}

function displayQuestions() {
  document.querySelector(".quiz-submain").style.display = "flex";
  document.querySelector(".start-submain").style.display = "none";
  document.querySelector(".alldone").style.display = "none";

  var QA_num = 0;

  q_numEle.textContent = data[QA_num].id;
  quesEle.textContent = ". " + data[QA_num].question;
  ans1Ele.textContent = data[QA_num].answer[0];
  ans2Ele.textContent = data[QA_num].answer[1];
  ans3Ele.textContent = data[QA_num].answer[2];
  ans4Ele.textContent = data[QA_num].answer[3];

  checkAnswers(QA_num);
}

function checkAnswers(QA_num) {
  console.log("=========check answers - START========");

  AnsWrapperEle.addEventListener("click", (event) => Answer(event), {
    once: true,
  });

  function Answer(event) {
    var ansElement = event.target;

    var number = ansElement.getAttribute("button-num");
    console.log("btn number = ", number);

    // will not display default bg color for 2 seconds
    var timeOut = setTimeout(()=>{
      result.textContent =""
            ansElement.setAttribute("style", "background-color:#a74aef35;");

            AnsBtnsEles.forEach((btn1) => {
              btn1.disabled = false;
            });

            
            endGame(QA_num);
            QA_num++;

            q_numEle.textContent = data[QA_num].id;
            quesEle.textContent = ". " + data[QA_num].question;
            ans1Ele.textContent = data[QA_num].answer[0];
            ans2Ele.textContent = data[QA_num].answer[1];
            ans3Ele.textContent = data[QA_num].answer[2];
            ans4Ele.textContent = data[QA_num].answer[3];

            checkAnswers(QA_num);

      clearTimeout(timeOut)
    },2000)

    AnsBtnsEles.forEach((btn1) => {
      btn1.disabled = true;
    });

    // result.textContent = data[QA_num].correctAns === event.target.innerHTML ? "Correct Answer" : "Wrong Answer"
    let key = ansElement.innerHTML === data[QA_num].correctAns;
    console.log("KEYYYYY = ", key);

    switch (key) {
      case true:
        console.log("~~~~~TRUE~~~~~");
        console.log("event.target = ", event.target);

        
              ansElement.setAttribute("style", "background-color:#5cd16b;color:white;font-weight:bold;");
              // ansElement.classList.add("ans-btn-active-green");
              result.textContent = "Correct Answer";
        

        console.log("correct answer");
        score++;
        scoresEle.textContent = score;
        console.log("SCORE ===== ", score);


        break;
      case false:
        console.log("~~~~~FALSE~~~~~");
        console.log("event.target = ", event.target);

        ansElement.setAttribute("style", "background-color:#eb6d82;color:white;font-weight:bold;");
        result.textContent = "Wrong Answer";
        console.log("wrong answer");

        console.log("timeval else ***** = ", timeval);
        //decrease the timer for 10 seconds for wrong answer
        timeval = timeval - 10;
        console.log("MINUS ===", timeval);
        timeEle.textContent = timeval;

        // //check if last question is reached
        // endGame(QA_num);
        // //increment the Question Number
        // QA_num++;

        // q_numEle.textContent = data[QA_num].id;
        // quesEle.textContent = ". " + data[QA_num].question;
        // ans1Ele.textContent = data[QA_num].answer[0];
        // ans2Ele.textContent = data[QA_num].answer[1];
        // ans3Ele.textContent = data[QA_num].answer[2];
        // ans4Ele.textContent = data[QA_num].answer[3];

        // checkAnswers(QA_num);

        break;
      default:
        return;
    }
  }
}

function InitialHighScores() {
  console.log("initialsEle val = ", initialsEle.value);
  console.log("userData = ", userData);

  userData.push({
    initials: initialsEle.value,
    scores: scoresEle.innerHTML,
  });
  console.log("userData = ", userData);
  localStorage.setItem("QuizAppGameData", JSON.stringify(userData));

  highScores();
}

highScoreLabelEle.addEventListener("click", () => {
  highScores();
});

function highScores() {
  document.querySelector(".alldone").style.display = "none";
  document.querySelector(".start-submain").style.display = "none";
  document.querySelector(".quiz-submain").style.display = "none";
  document.querySelector(".gameover").style.display = "none";
  document.querySelector(".highscores").style.display = "block";

  var localStorage_data = JSON.parse(localStorage.getItem("QuizAppGameData"));
  console.log("localStorage_data = ", localStorage_data);
  console.log("localStorage_data length= ", localStorage_data.length);
  console.log("initials = ", localStorage_data[0].initials);
  console.log("scores = ", localStorage_data[0].scores);

  for (let j = 0; j <= localStorage_data.length - 1; j++) {
    var liTag = document.createElement("li");
    liTag.className="highscores-li"
    liTag.textContent =
      localStorage_data[j].initials + " " + localStorage_data[j].scores;
      
    ultag.appendChild(liTag);
    highScoreSection.append(ultag);
  }
}

function endGame(QA_num) {
  console.log("$$$$$$$$$ QA NUm $$$$$$$$ = ", QA_num);

  if (QA_num >= 9) {
    gameOverEle.style.display = "flex";

    document.querySelector(".dashboard").style.display = "none";
    document.querySelector(".quiz-submain").style.display = "none";
    document.querySelector(".start-submain").style.display = "none";
    document.querySelector(".alldone").style.display = "flex";

    document.querySelector(".gameover").style.display = "flex";

    allDoneScoreEle.textContent = score;

    allDoneSubmitEle.addEventListener("click", () => {
      InitialHighScores();
      // highScores();
    });
  }

  goBackBtn.addEventListener("click", () => {
    document.querySelector(".dashboard").style.display = "flex";
    document.querySelector(".start-submain").style.display = "flex";
    document.querySelector(".highscores").style.display = "none";
    window.location.reload();
  });

  clearHighScoreBtn.addEventListener("click", () => {
    // localStorage.setItem("QuizAppGameData", JSON.stringify([]));
    localStorage.clear();
    if (localStorage.getItem("QuizAppGameData") === null) {
      localStorage.setItem("QuizAppGameData", JSON.stringify([]));
    }
    document.querySelector("li").textContent = "";
  });
}
