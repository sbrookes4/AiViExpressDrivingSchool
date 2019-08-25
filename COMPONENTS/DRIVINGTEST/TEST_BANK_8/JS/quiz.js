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

// TEST BANK 8
let questions = [
    {
        question : "1.The main benefit of having four-wheel drive is to improve",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Fuel consumption",
        choiceB : "Road holding",
        choiceC : "Stopping distances",
        choiceD : "Passenger comfort",       
        correct : "B"
    },

    {
        question : "2. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P8_Q2.png",
        choiceA : "You are allowed to make a U-turn",
        choiceB : "You can reverse",
        choiceC : "You can park",
        choiceD : "Pedestrian crossing",       
        correct : "D"
    },

    {
        question : "3. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P8_Q3.png",
        choiceA : "Parking",
        choiceB : "You are allowed to make a U-turn",
        choiceC : "You can reverse",
        choiceD : "You can park",   
        correct : "A"
    },

    {
        question : "4.  Excessive or uneven tyre wear can be caused by faults in which of the following?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The Gearbox",
        choiceB : "The Accelerator",
        choiceC : "The Exhaust System",
        choiceD : "Wheel Alignment",   
        correct : "D"
    },

    {
        question : "5. Who can go first?",
        imgSrc : "ASSETS/IMAGES/P8_Q5.png",
        choiceA : "Vehicle No 1",
        choiceB : "Vehicle No 2",
        choiceC : "Vehicle No 3",
        choiceD : "it's fair game!",   
        correct : "C"
    },

    {
        question : "6. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P8_Q6.png",
        choiceA : "No parking",
        choiceB : "End of parking zone",
        choiceC : "No through road",
        choiceD : "Warning: dangerous intersection",   
        correct : "C"
    },

    {
        question : "7. To avoid an accident when entering a contra flow system (transfer of traffic its usual half of the road to the other half, so that it shares it with traffic flowing in the other direction), you should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Reduce speed at the exit of the road",
        choiceB : "Switch lanes anytime to make progress",
        choiceC : "Choose opposite lane early",
        choiceD : "Follow other motorists closely to avoid long queues",   
        correct : "A"
    },

    {
        question : "8. At a pedestrian crossing you only have priority when...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "You are at the pedestrian crossing",
        choiceB : "You step on the pedestrian crossing",
        choiceC : "You run across the pedestrian crossing",
        choiceD : "You intend to cross the road",   
        correct : "B"
    },

    {
        question : "9. Which of the following is the right thing to do when you find out that another driver is going against the rules?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Use your horn to warn the driver",
        choiceB : "Shout to correct the driver",
        choiceC : "Give the driver the right of way",
        choiceD : "None of these choices",   
        correct : "C"
    },

    {
        question : "10.  Which of the road signs below means: No entry for goods vehicle?",
        imgSrc : "ASSETS/IMAGES/P8_Q10.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",   
        correct : "A"
    },

    {
        question : "11.  Which of the road signs below means: No through road on right?",
        imgSrc : "ASSETS/IMAGES/P8_Q11.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",   
        correct : "C"
    },

    {
        question : "12. Which of the road signs below means: No entry?",
        imgSrc : "ASSETS/IMAGES/P8_Q12.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",   
        correct : "A"
    },  

    {
        question : "13. Who must be the last to go?",
        imgSrc : "ASSETS/IMAGES/P8_Q13.png",
        choiceA : "Vehicle No 1",
        choiceB : "Vehicle No 2",
        choiceC : "Vehicle No 3",
        choiceD : "it's fair game!",     
        correct : "C"
    },

    {
        question : "14. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P8_Q14.png",
        choiceA : "No entry for the next 100m",
        choiceB : "No entry for all trucks",
        choiceC : "No entry 100m ahead",
        choiceD : "No stopping on roadway",       
        correct : "C"
    },

    {
        question : "15. When transporting human beings on trailers used for agricultural and forestry works, what precautions should be taken?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Do not allow anybody to stand while the vehicle is moving",
        choiceB : "Suitable seats must be provided",
        choiceC : "Drive fast",
        choiceD : "Hit brakes hard",   
        correct : "A"
    },

    {
        question : "16. A two-way left turn lane in the center of the road means",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "You can turn left or right from this lane",
        choiceB : "You can pass other cars in this lane",
        choiceC : "Cars traveling in both directions can turn left from this lane",
        choiceD : "You can park in this lane",   
        correct : "C"
    },

    {
        question : "17. The majority of all accidents are due to",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The tyres of the vehicles",
        choiceB : "Items falling off the vehicles",
        choiceC : "Human error",
        choiceD : "Road Conditions",   
        correct : "C"
    },

    {
        question : "18. When is it a good idea to use hand signals in addition to a turn signal?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "When changing lanes",
        choiceB : "When turning a corner",
        choiceC : "When pulling out from a line of parked vehicles",
        choiceD : "When stopping",   
        correct : "C"
    },

    {
        question : "19. What do you do when you see a vehicle on a DVLA test?",
        imgSrc : "ASSETS/IMAGES/P8_Q19.png",
        choiceA : "Quickly overtake",
        choiceB : "Keep distance",
        choiceC : "Slow down and blow your horn",
        choiceD : "Blow the horn loudly",   
        correct : "B"
    },

    {
        question : "20. You must not use your horn when you are stationary...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Unless a moving vehicle may cause you danger",
        choiceB : "At any time whatsoever",
        choiceC : "Unless it is used only briefly",
        choiceD : "Except for signaling that you have just arrived",   
        correct : "A"
    },

    {
        question : "21. What are you to anticipate if you want to follow a truck that is turning to the right?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "A pedestrian may let the truck pass but cross the street immediately it passes",
        choiceB : "Another truck may overtake you",
        choiceC : "The truck may suddenly pull up",
        choiceD : "The truck may suddenly stop",   
        correct : "A"
    },

    {
        question : "22. Which of the road signs below means: level crossing 60 m ahead?",
        imgSrc : "ASSETS/IMAGES/P8_Q22.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",   
        correct : "C"
    },

    {
        question : "23. Are passengers allowed to ride in a caravan that is being towed?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Yes, if they are over fourteen",
        choiceB : "No, not at any time",
        choiceC : "Only if all the seats in the towing vehicle are full",
        choiceD : "Only if a stabilizer is fitted",   
        correct : "B"
    },

    {
        question : "24. Before you replace your tyre, make sure your handbrake is on and position the gear to either the park or 1st position...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "True in all cases",
        choiceB : "True when the vehicle is parked on a hill",
        choiceC : "False in all cases",
        choiceD : "False when the vehicle is parked on a hill",   
        correct : "D"
    },  

    {
        question : "25. You are at an intersection and want to turn right into a street where pedestrians have just started to cross. What are you to do?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Signal the pedestrians to halt",
        choiceB : "Give way to the pedestrians",
        choiceC : "Just go",
        choiceD : "Horn them relentlessly", 
        correct : "B"
    },  

    {
        question : "26. You are at an intersection and want to turn right into a street where pedestrians have just started to cross. What are you to do?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Signal the pedestrians to halt",
        choiceB : "Give way to the pedestrians",
        choiceC : "Just go",
        choiceD : "Horn them",   
        correct : "B"
    },  

    {
        question : "27. You must never signal other road users",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "To wait",
        choiceB : "To overtake",
        choiceC : "To stop and offer help",
        choiceD : "To warn for danger ahead",   
        correct : "B"
    },  

    {
        question : "28.  What conditions of a vehicle are liable to cause accidents?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Tyres completely worn down",
        choiceB : "Tyres with too low pressure",
        choiceC : "Well aligned wheels",
        choiceD : "Tyres completely worn down & Tyres with too low pressure ",   
        correct : "D"
    },

    {
        question : "29. What can cause heavy steering?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Drivign on ice",
        choiceB : "Badly worn brakes",
        choiceC : "Over-inflated tyres",
        choiceD : "Under-inflated tyres",   
        correct : "D"
    },

    {
        question : "30. What are you required to provide in your vehicle for first aid treatment?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Fire Extinguisher",
        choiceB : "First Aid Box",
        choiceC : "Bottled Water",
        choiceD : "Nothing",   
        correct : "B"
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





















