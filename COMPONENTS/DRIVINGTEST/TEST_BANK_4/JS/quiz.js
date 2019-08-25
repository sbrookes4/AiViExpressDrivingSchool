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

// TEST BANK 4 QUESTIONS
let questions = [
    {
        question : "1. If you have to drive a vehicle you are not used to, which of the following controls will you look out for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The battery size",
        choiceB : "The ground",
        choiceC : "A child",
        choiceD : "None of the choices",       
        correct : "D"
    },

    {
        question : "2. Exhaust pipe mufflers are fitted on vehicles to help...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Give the vehicle good moisture output",
        choiceB : "Prevent oil from entering the exhaust system",
        choiceC : "Prevent excessive noise",
        choiceD : "Prevent carbon dioxide leakage",      
        correct : "C"
    },

    {
        question : "3. What saved the passengers of this crashed vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The bumper",
        choiceB : "The crush zone",
        choiceC : "The airbags",
        choiceD : "Quality tyres",
        correct : "C"
    },

    {
        question : "4. When faced with low visibility conditions while driving, you should",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Slow down and maintain extra space margins",
        choiceB : "Use your defroster to keep your windows clear",
        choiceC : "Search and scan more carefully",
        choiceD : "All of these the choices",
        correct : "D"
    },

    {
        question : "5. What change on a passenger vehicle must always be reported to the official unit dealing with such matters?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Conversion of 2-door to 4-door passenger vehicle",
        choiceB : "Conversion of passenger vehicle into pickup",
        choiceC : "Change of tyres",
        choiceD : "Color change",
        correct : "B"
    },

    {
        question : "6. You are at an intersection and want to turn right into a street where pedestrians have just started to cross. What are you to do?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Signal the pedestrians to halt",
        choiceB : "Give way to the pedestrians",
        choiceC : "Just go, they will move",
        choiceD : "Horn them to move out the way",
        correct : "B"
    },

    {
        question : "7. What vehicles are not allowed to park here?",
        imgSrc : "ASSETS/IMAGES/P4_Q7.png",
        choiceA : "Buses",
        choiceB : "Motorcycles",
        choiceC : "All vehicles",
        choiceD : "Motorcycles and trucks (lories)",
        correct : "D"
    },

    {
        question : "8. Which of the road signs below means: No Stopping?",
        imgSrc : "ASSETS/IMAGES/P4_Q8.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",
        correct : "A"
    },

    {
        question : "9. How far away from a stop sign, traffic control signal or crosswalk are you required to park?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "10 meters",
        choiceB : "6 meters",
        choiceC : "5 meters",
        choiceD : "3 meters",
        correct : "B"
    },

    {
        question : "10. Apart from your windscreen one of the following should also be always clean and securely fixed?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Windscreen",
        choiceB : "Registration plates only",
        choiceC : "Registration documents",
        choiceD : "Registration and warning plates",
        correct : "D"
    },

    {
        question : "11. Which of the road signs below means: give way for drivers on the major road ahead?",
        imgSrc : "ASSETS/IMAGES/P4_Q11.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",
        correct : "A"
    },

    {
        question : "12. A light with a steady red cross above a lane of traffic means",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Proceed with caution",
        choiceB : "Begin moving out of this lane and into a lane with a steady green arrow",
        choiceC : "You cannot drive in this lane",
        choiceD : "Bus lane only",
        correct : "C"
    },  

    {
        question : "13. You are driving on a motorway. The traffic ahead is braking sharply because of an accident. How could you warn following traffic?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Briefly use the hazard warning light",
        choiceB : "Switch on the hazard warning lights continuously",
        choiceC : "Briefly use the rear fog lights",
        choiceD : "Switch on the headlights continuously",       
        correct : "B"
    },

    {
        question : "14.  Do not move off if your action will force another driver to...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Use their mirrors",
        choiceB : "Reverse",
        choiceC : "Brake Sharply",
        choiceD : "Maintain his lane",     
        correct : "C"
    },

    {
        question : "15. You are trying to move off on loose sand. You should use...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The lowest gear you can",
        choiceB : "The highest gear you can",
        choiceC : "A high engine speed",
        choiceD : "The handbrake and footbrake together",
        correct : "B"
    },

    {
        question : "16. Who can go first?",
        imgSrc : "ASSETS/IMAGES/P4_Q16.png",
        choiceA : "Vehicle No 1",
        choiceB : "Vehicle No 3",
        choiceC : "Vehicle No 2",
        choiceD : "Vehicles No 1 & No 3",
        correct : "B"
    },

    {
        question : "17. Who is responsible for making sure that a vehicle is not overloaded?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The owner of the items being carried",
        choiceB : "The person who loaded the vehicle",
        choiceC : "The driver of the vehicle",
        choiceD : "The licensing authority",
        correct : "C"
    },

    {
        question : "18. Correctly adjusted driving mirrors will show...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "All blind spots",
        choiceB : "The tail-end of your vehicle",
        choiceC : "The drivers face properly",
        choiceD : "Objects under the vehicle",
        correct : "B"
    },

    {
        question : "19. If you find that your car is hydroplaning, you should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Slam on the brakes",
        choiceB : "Brake gently",
        choiceC : "Decelerate and drive straight ahead without hitting the brakes",
        choiceD : "Pull over immediately; there may be something wrong with your car",
        correct : "C"
    },

    {
        question : "20. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P4_Q20.png",
        choiceA : "Two-way road, closed to the right",
        choiceB : "One-way road, closed to the right",
        choiceC : "No throughroad on right",
        choiceD : "No throughroad",
        correct : "C"
    },

    {
        question : "21. When following a truck at night, it will be safe to use high beam headlights because trucks have high sides that can prevent the driver of the truck from noticing you...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "True",
        choiceB : "Doesn't matter",
        choiceC : "Sometimes",
        choiceD : "Fasle",
        correct : "D"
    },

    {
        question : "22.  At junction where no priority is shown, you should always...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Flash you head lights",
        choiceB : "Show your brake lights",
        choiceC : "Be prepared to stop",
        choiceD : "Signal others to move on",
        correct : "C"
    },

    {
        question : "23. What sign of a pedestrian do you need to watch?",
        imgSrc : "ASSETS/IMAGES/P4_Q23.png",
        choiceA : "The person has one leg on the zebra",
        choiceB : "The person is waving to stop",
        choiceC : "The cat crossing the street",
        choiceD : "The guy on the phone",
        correct : "A"
    },

    {
        question : "24. When you park your vehicle you should",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Set the brakes",
        choiceB : "Stop the engine",
        choiceC : "Remove the ignition key",
        choiceD : "Do all the above",
        correct : "D"
    },  

    {
        question : "25. You are following a vehicle at a safe distance on a wet road. Another driver overtakes you and pulls into the gap you have left. What should you do?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Flash your headlights as a warning",
        choiceB : "Try to overtake safely as soon as you can",
        choiceC : "Drop back to regain a safe distance",
        choiceD : "Stay close to the other vehicle until it moves on",
        correct : "C"
    },  

    {
        question : "26. It is essential that tyre pressures are checked regularly. When should this be done?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "When tyres are cold",
        choiceB : "After any lengthy journey",
        choiceC : "After travelling at high speed",
        choiceD : "When tyres are hot",
        correct : "A"
    },  

    {
        question : "27. When you arrive at an accident scene, you must not do one of the following...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Clear possible dangers",
        choiceB : "Drive away people around the scene",
        choiceC : "Display warning triangle",
        choiceD : "None of the above",
        correct : "B"
    },  

    {
        question : "28. Which of the following is the right thing to do when you find out that another driver is going against the rules?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Use your horn to warn the driver",
        choiceB : "Shout to correct the driver",
        choiceC : "Give the driver the right of way",
        choiceD : "Do none of the above",
        correct : "C"
    },

    {
        question : "29. What should you expect when you see this sign?",
        imgSrc : "ASSETS/IMAGES/P4_Q29.png",
        choiceA : "Braking distance will be longer than on a level road",
        choiceB : "High gears will result in good braking",
        choiceC : "Low gears will result in good braking",
        choiceD : "Braking distance will be shorter than on a level road",
        correct : "A"
    },

    {
        question : "30. What does this road sign tell you?",
        imgSrc : "ASSETS/IMAGES/P4_Q30.png",
        choiceA : "Uneven road",
        choiceB : "Warning for sleeping police or speed ram",
        choiceC : "Speed ram at the spot of the sign",
        choiceD : "Roadworks ahead",
        correct : "C"
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





















