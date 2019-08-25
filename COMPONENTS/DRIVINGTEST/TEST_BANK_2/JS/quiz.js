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

// TEST BANK 2 QUESTIONS
let questions = [
    {
        question : "1.The purpose of a catalytic converter is to reduce...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Engine wear",
        choiceB : "Toxic gasses",
        choiceC : "Risk of fire",
        choiceD : "Fuel consumption",       
        correct : "B"
    },

    {
        question : "2. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P2_Q2.png",
        choiceA : "Right turn prohibited",
        choiceB : "Roundabout",
        choiceC : "Right turn prohibited",
        choiceD : "U-turn prohibited",      
        correct : "B"
    },

    {
        question : "3. You are behind a trotro that pulls up at a bus stop. What should you do?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Pull up as well past the trotro sounding your horn",
        choiceB : "Watch carefully for pedestrians",
        choiceC : "Be ready to give away to the trotro and the driver",
        choiceD : "Stay behind the trotro",
        correct : "C"
    },

    {
        question : "4. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Freeway",
        choiceB : "Airport",
        choiceC : "Level Crossing",
        choiceD : "Motorway or freeway",
        correct : "D"
    },

    {
        question : "5. Do you have priority to cross the upcoming junction when you see this sign?",
        imgSrc : "ASSETS/IMAGES/P2_Q5.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC : "No, but no one is looking",
        choiceD : "No, but no cars are around",
        correct : "A"
    },

    {
        question : "6. To help the environment, you can avoid wasting fuel by...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Making sure your tyres are under-inflated",
        choiceB : "Over-revving in the lower gears",
        choiceC : "Driving at lower speeds where possible",
        choiceD : "Keeping an empty roof rack properly fitted",
        correct : "C"
    },

    {
        question : "7. Which of the following gear positions can be referred to as the over-drive gear?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "First gear",
        choiceB : "Reverse",
        choiceC : "5th (or 6th) gear",
        choiceD : "Second gear",
        correct : "C"
    },

    {
        question : "8. Some two-way roads are divided into three lanes. Why are these particularly dangerous?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Traffic can travel faster in poor weather conditions",
        choiceB : "Traffic can overtake on the left",
        choiceC : "Traffic in both directions can use the middle lane to overtake",
        choiceD : "Traffic uses the middle lane for emergencies only",
        correct : "C"
    },

    {
        question : "9. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P2_Q9.png",
        choiceA : "Motorway ahead",
        choiceB : "Compulsory driving direction: straight ahead",
        choiceC : "No parking on both sides of the road",
        choiceD : "No parking",
        correct : "B"
    },

    {
        question : "10. What change on a passenger vehicle must always be reported to the official unit dealing with such matters?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Change of color",
        choiceB : "Installation of a new engine",
        choiceC : "Installation of an engine with greater horse power",
        choiceD : "Change of rims or tyres",
        correct : "C"
    },

    {
        question : "11. You are on a long, downhill slope. What should you do to help control the speed of your vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Select neutral",
        choiceB : "Grip the handbrake firmly",
        choiceC : "Apply the parking brake gently",
        choiceD : "Select a lower gear",
        correct : "D"
    },  

    {
        question : "12. Rapid acceleration and heavy braking can lead to...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Reduced pollution",
        choiceB : "Reduced exhaust emissions",
        choiceC : "Increased fuel consumption",
        choiceD : "Increased road safety",       
        correct : "C"
    },

    {
        question : "13. What factors may be responsible for underestimating or misjudging your own speed on a wide stretch of road outside built-up areas?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Narrowness of the road",
        choiceB : "The bad condition of the road",
        choiceC : "Absence of trees and buildings on both sides",
        choiceD : "Animals",      
        correct : "C"
    },

    {
        question : "14. To get an accurate result when you check your engine oil, you should always ensure that the vehicle is parked...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "On level ground",
        choiceB : "In the sun",
        choiceC : "In a mechanic's shop",
        choiceD : "On a slope",
        correct : "A"
    },

    {
        question : "15. Which of the following will you consider as the primary function of a vehicles suspension system?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "It keeps the cars wheels in firm contact with the road",
        choiceB : "It keeps the cars electrical system in good shape",
        choiceC : "It helps keep the brake pads in good shape",
        choiceD : "All of the choices",
        correct : "A"
    },

    {
        question : "16. You are about to drive home. You feel very tired and have a severe headache. You should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wait until you are fit and well before driving",
        choiceB : "Drive home, but take a tablet for headaches",
        choiceC : "Drive home if you can stay awake for the journey",
        choiceD : "Wait for a short time, drink coffee and then drive home slowly",
        correct : "A"
    },

    {
        question : "17. You are on a wet motorway with surface spray. You should use?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Hazard flashers",
        choiceB : "Dipped headlights",
        choiceC : "Sidelights",
        choiceD : "Rear fog lights",
        correct : "B"
    },

    {
        question : "18. How far away from a fire hydrant are you required to park?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "10 meters",
        choiceB : "6 meters",
        choiceC : "5 meters",
        choiceD : "3 meters",
        correct : "C"
    },

    {
        question : "19. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "No entry for buses",
        choiceB : "Bus stop",
        choiceC : "Train Station",
        choiceD : "Overhead bridge",
        correct : "B"
    },

    {
        question : "20. Excessive or uneven tyre wear can be caused by faults in which of the following...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The gearbox",
        choiceB : "The accelerator",
        choiceC : "The exhaust system",
        choiceD : "Wheel alignment",
        correct : "D"
    },

    {
        question : "21. Where should you position your hands on the steering wheel?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Left hand at 11 oclock and right hand at 1 oclock.",
        choiceB : "Left hand at 9 oclock and right hand at 3 oclock.",
        choiceC : "Left hand at 10 oclock and right hand at 2 oclock.",
        choiceD : "9 and 3 & 10 and 2 are both correct",
        correct : "D"
    },

    {
        question : "22. What is a possible danger that can occur during overtaking?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Underestimation of your vehicles acceleration qualities",
        choiceB : "Overestimation of the distance between you and an oncoming vehicle",
        choiceC : "Your radio is on",
        choiceD : "Your lights are on",
        correct : "B"
    },

    {
        question : "23. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P2_Q23.png",
        choiceA : "End of overtaking prohibition",
        choiceB : "No parking",
        choiceC : "No overtaking by all vehicles",
        choiceD : "No overtaking by red vehicles",
        correct : "C"
    },  

    {
        question : "24. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P2_Q24.png",
        choiceA : "End of dual carriage ahead",
        choiceB : "Edge of the road is dangerous",
        choiceC : "Start of dual carriage ahead",
        choiceD : "Lights required ahead",
        correct : "A"
    },  

    {
        question : "25. You are waiting to come out of a side road. Why should you watch carefully for motorcycles?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Motorcycles are usually faster than carsg",
        choiceB : "Police patrols often use motorcycles",
        choiceC : "Motorcycles are small and hard to see",
        choiceD : "Motorcycles have right-of-way",
        correct : "C"
    },  

    {
        question : "26. Which of the following is at risk of not being seen as you reverse?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The driver",
        choiceB : "The ground",
        choiceC : "A child",
        choiceD : "None of the coices",
        correct : "C"
    },  

    {
        question : "27. You arrive at a serious motorcycle accident scene. The motorcyclist is unconscious and bleeding. Your main priority should be to...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Sweep up any loose debris",
        choiceB : "Make a list of witnesses and attend to the victim",
        choiceC : "Take number of the vehicle involved",
        choiceD : "Check the causality's airways",
        correct : "B"
    },

    {
        question : "28. What types of licence holders are not allowed to drive a scooter with a capacity of 100 cc?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Class A Licence",
        choiceB : "Class B Licence",
        choiceC : "Both Class A & Class B Licence",
        choiceD : "Class D Licence",
        correct : "C"
    },

    {
        question : "29. You are late for a very important state programme in which you must participate. On your way, you encounter a heavy traffic situation. What should you do?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Follow an authorized convoy that is passing by",
        choiceB : "Follow drivers on the shoulder of the road",
        choiceC : "Be tolerant and wait for traffic to flow",
        choiceD : "Horn and force drive your way through the traffic",
        correct : "C"
    },

    {
        question : "30. Your mobile phone rings while you are on the motorway. Before answering your should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Reduce your speed",
        choiceB : "Move into the left hand lane",
        choiceC : "Park on the hard shoulder",
        choiceD : "Stop in a safe place",
        correct : "D"
    }

];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 40; // 10s
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

//start.addEventListener("click",startQuiz); (original position)

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

start.addEventListener("click",startQuiz);



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


function hideQuiz(){
    document.getElementById('quiz').style.display = "none";  
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
    hideQuiz();

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





















