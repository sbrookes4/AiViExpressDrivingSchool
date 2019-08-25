// DEFENSIVE DRIVING
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const feedbackDiv = document.getElementById("feedbackContainer");
// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",       
        correct : "A"
    },

    {
        question : "What does CSS stand for?",
        imgSrc : "ASSETS/IMAGES/TEST.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",      
        correct : "B"
    },

    {
        question : "What does JS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    },

    {
        question : "What does HTML stand for?",
        imgSrc : "ASSETS/IMAGES/TEST.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    },

    {
        question : "What does CSS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },

    {
        question : "What does JS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    },

    {
        question : "What does CSS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },

    {
        question : "What does JS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    },

    {
        question : "What does CSS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },

    {
        question : "What does JS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    },

    {
        question : "What does CSS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },

    {
        question : "What does JS stand for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    }   

];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 90; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "%";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}


function showResetButton(){
    document.getElementById('resetContainer').style.display = "block";
}

function resetPage(){
    location.reload();
    document.getElementById('jumpTo').style.display = "block";
    var elmnt = document.getElementById("jumpTo");
    elmnt.scrollIntoView();
    document.getElementById('jumpTo').style.display = "none";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    feedbackDiv.style.display = "block";
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 90) ? "ASSETS/IMAGES/5.png" :
              (scorePerCent >= 80) ? "ASSETS/IMAGES/4.png" :
              (scorePerCent >= 60) ? "ASSETS/IMAGES/3.png" :
              (scorePerCent >= 50) ? "ASSETS/IMAGES/2.png" :
              "ASSETS/IMAGES/1.png";


    let scoreFeeback = (scorePerCent >= 90) ? "You did well! You are likely going to ace the exam!" :
              (scorePerCent >= 80) ? "You did really good - practice a little more and you'll smash the exam!" :
              (scorePerCent >= 60) ? "You did good. Continue to study the material here on the website." :
              (scorePerCent >= 50) ? "Continue to study the material here on the website and you'll get better." :
              "That's OK! There is a lot to learn about driving. Continue to study the material here on the website and you'll get better.";
    
    scoreDiv.innerHTML = "<img class='scoreContainerImage' src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +" %<br>";
    scoreDiv.innerHTML += "<p>"+ scoreFeeback + "</p>";
    scoreDiv.innerHTML += "<button id='resetButton' onclick='resetPage();'> Reset </button>";


}





















