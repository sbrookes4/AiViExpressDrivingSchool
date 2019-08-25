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

// TEST BANK 5 QUESTIONS
let questions = [
    {
        question : "1. What can be the use of the hazard or flashing warning signals on a motor vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "To indicate you are turning",
        choiceB : "To indiacte you are driving straight",
        choiceC : "Used as the first indicator of a broken down vehicle at a point where it cannot be recognized early enough",
        choiceD : "To indicate upcoming danger on the road",       
        correct : "C"
    },

    {
        question : "2. On which of these roads will double-parking be allowed?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "One-way road",
        choiceB : "A major road",
        choiceC : "Roads in residential areas",
        choiceD : "None of these choices",      
        correct : "D"
    },

    {
        question : "3. What will reduce the risk of neck injury resulting from a collision?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "An air-sprung seat",
        choiceB : "Anti-lock brakes",
        choiceC : "A properly adjusted head restraint",
        choiceD : "A collapsible steering wheel",       
        correct : "C"
    },

    {
        question : "4. You want to overtake this loaded truck. When can you do this?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "When you have a clear sight on a straight part of the road",
        choiceB : "When you have a clear sight in a bend to the left, so you can see cars coming from the opposite direction",
        choiceC : "When you have a clear sight in a bend to the right, so you can see cars coming from the opposite direction",
        choiceD : "When the truck driver signals you",   
        correct : "A"
    },

    {
        question : "5. What should you do when leaving your vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Put valuable documents under seats",
        choiceB : "Cover valuables with a blanket",
        choiceC : "Remove all valuables",
        choiceD : "Leave the interior light on",   
        correct : "C"
    },

    {
        question : "6. If you are arrested for having a blood alcohol concentration, your concentration should be above...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "100%",
        choiceB : "1.00%",
        choiceC : "0.08%",
        choiceD : "80%",
        correct : "C"
    },

    {
        question : "7. What would you look out for when you see this road works ahead sign displayed along a road?",
        imgSrc : "ASSETS/IMAGES/P5_Q7.png",
        choiceA : "Traffic lights",
        choiceB : "Following traffic",
        choiceC : "Constructional vehicles cross",
        choiceD : "Covered trenches",   
        correct : "C"
    },

    {
        question : "8. In what situation are you allowed to use the headlight flasher to indicate your intention to overtake another vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Outside built-up areas in the day time",
        choiceB : "Outside built-up areas at night",
        choiceC : "When it is raining heavily",
        choiceD : "Outside built-up areas in the day time and at night",   
        correct : "D"
    },

    {
        question : "9. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "You are allowed to turn left",
        choiceB : "You are allowed to make a U-turn",
        choiceC : "You can reverse",
        choiceD : "You can park",   
        correct : "B"
    },

    {
        question : "10. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "No entry for carts",
        choiceB : "No entry for all vehicles",
        choiceC : "No entry for all trucks",
        choiceD : "No entry for heavy trucks",   
        correct : "D"
    },

    {
        question : "11. What damage is covered by your Third Party Liability Insurance when you are involved in a road traffic accident?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Only damages to the other vehicle",
        choiceB : "Any damage to the other vehicle as well as injuries to the driver and passengers of the other vehicle",
        choiceC : "Only damages to your vehicle",
        choiceD : "Any damage to your vehicle as well as injuries to the driver and passengers of your vehicle",   
        correct : "B"
    },

    {
        question : "12. If you must drive through a deep puddle, you should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Drive through it as slowly as possible & Apply the brakes after you get through the puddle to dry them out ",
        choiceB : "Drive through it as quickly as possible",
        choiceC : "Drive through it as slowly as possible",
        choiceD : "Apply the brakes after you get through the puddle to dry them out",   
        correct : "A"
    },  

    {
        question : "13. You think the driver of the vehicle in front has forgotten to cancel the right indicator. You should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Stay behind and not overtake",
        choiceB : "Flash your lights to alert the driver",
        choiceC : "Sound your horn before overtaking",
        choiceD : "Overtake on the left if there is room",         
        correct : "A"
    },

    {
        question : "14. Correctly adjusted driving mirrors will show...",
        imgSrc : "ASSETS/IMAGES/P5_Q14.png",
        choiceA : "All blind spots",
        choiceB : "The tail-end of your vehicle",
        choiceC : "The drivers face properly",
        choiceD : "Possible objects under the vehicle",        
        correct : "B"
    },

    {
        question : "15. IS MISSING",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "IS MISSING",
        choiceB : "IS MISSING",
        choiceC : "IS MISSING",
        choiceD : "IS MISSING",   
        correct : "C"
    },

    {
        question : "16. What do you have to do when you see this sign while driving at a top speed?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Slow down, you are approaching traffic lights",
        choiceB : "Drive on, you are approaching traffic lights",
        choiceC : "Vehicles parked on the shoulder of the road",
        choiceD : "High water crossing",   
        correct : "C"
    },

    {
        question : "17. You are travelling along a road that has just been gravelled with loose gravels. Which of the following must you pay particular attention to?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Vehicles overtaking you",
        choiceB : "Vehicles parked on the shoulder of the road",
        choiceC : "Dazzle indicators",
        choiceD : "Red and white railing along the road",   
        correct : "B"
    },

    {
        question : "18. You want to overtake this fruit pickup. How can you do this?",
        imgSrc : "ASSETS/IMAGES/P5_Q18.png",
        choiceA : "You pass the pickup on the right side when possible",
        choiceB : "You wait until the pickup moves to the right",
        choiceC : "You horn and flash your lights to indicate you want to pass",
        choiceD : "You pass on the shoulder of the road where possible",   
        choiceD : "Just wait till it drives off",   
        correct : "B"
    },

    {
        question : "19. When you are waiting to manoeuvre to the left and a vehicle from the opposite direction flashes its lights, it means...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "You can go on",
        choiceB : "You should go straight ahead",
        choiceC : "A warning of his presence",
        choiceD : "None of these choices",   
        correct : "C"
    },

    {
        question : "20. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Double curve (bend), first to the right and then to the left",
        choiceB : "Slippery road surface",
        choiceC : "Double curve (bend), first to the left and to the right",
        choiceD : "None of these choices",   
        correct : "A"
    },

    {
        question : "21.  Which of the road signs below means: warning, series of bends, first to right?",
        imgSrc : "ASSETS/IMAGES/P5_Q21.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",   
        correct : "B"
    },

    {
        question : "22. A sign depicting a green circle with a straight arrow pointing upwards inside it means...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Straight road ahead",
        choiceB : "One lane ahead",
        choiceC : "No turns - through only",
        choiceD : "Both Straight road ahead & No turns - through only",   
        correct : "C"
    },

    {
        question : "23. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P5_Q23.png",
        choiceA : "No parking",
        choiceB : "No entry for horse-riders",
        choiceC : "Compulsory for horse-riders, prohibited for other road users",
        choiceD : "Compulsory for all road users",   
        correct : "C"
    },

    {
        question : "24. What do the broken lines mean on this road?",
        imgSrc : "ASSETS/IMAGES/P5_Q24.png",
        choiceA : "Slow down",
        choiceB : "Drive to the left",
        choiceC : "You cannot overtake",
        choiceD : "You may overtake",   
        correct : "D"
    },  

    {
        question : "25. Which of the following fire extinguishers will be ideal for putting out fire caused by petrol electrical faults?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Dry powder extinguisher",
        choiceB : "BCF extinguisher",
        choiceC : "Any of those choices",
        choiceD : "None of those choices",   
        correct : "A"
    },  

    {
        question : "26. You think the driver of the vehicle in front has forgotten to cancel the right indicator. You should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Stay behind and not overtake",
        choiceB : "Flash your lights to alert the driver",
        choiceC : "Sound your horn before overtaking",
        choiceD : "Overtake on the left if there is room",   
        correct : "A"
    },  

    {
        question : "27. You have a new unlicenced vehicle that has Trial Number Plates (red licence plates). Where are you allowed to go with it?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "You cannot go anywhere",
        choiceB : "On trips abroad",
        choiceC : "On trips to test whether the vehicle is working well",
        choiceD : "On trips to demonstrate the vehicles topspeed",    
        correct : "C"
    },  

    {
        question : "28. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P5_Q28.png",
        choiceA : "Warning, left bend",
        choiceB : "Warning, series of bends, first to right",
        choiceC : "Warning, uneven road, slopes to right",
        choiceD : "Warning, right bend",   
        correct : "D"
    },

    {
        question : "29. What are you to anticipate if you want to follow a truck that is turning to the right?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "A pedestrian may let the truck pass but cross the street immediately it passes",
        choiceB : "Another truck may overtake you",
        choiceC : "The truck may suddenly pull up",
        choiceD : "The truck may suddenly stop",   
        correct : "A"
    },

    {
        question : "30. There are flashing amber lights under a school warning sign. What action should you take?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Reduce speed until you are clear of the area",
        choiceB : "Keep up your speed and sound your horn",
        choiceC : "Increase your speed to clear the area quickly",
        choiceD : "Wait at the lights until they change to green",   
        correct : "A"
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





















