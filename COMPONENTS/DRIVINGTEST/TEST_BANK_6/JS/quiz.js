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

// TEST BANK 6
let questions = [
    {
        question : "1. Who can go first?",
        imgSrc : "ASSETS/IMAGES/P6_Q1.png",
        choiceA : "Vehicle No 2",
        choiceB : "Vehicle No 1",
        choiceC : "Whoever takes the initiative",
        choiceD : "Wait for another car to force the decision",       
        correct : "B"
    },

    {
        question : "2. When entering a tunnel on a sunny day, you should",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Keep your sunglasses on, as taking them off may take your attention away from driving",
        choiceB : "Slow down to let your eyes adjust to the lower light levels",
        choiceC : "Speed up to get through as quickly as possible",
        choiceD : "Just keep driving as you were before",       
        correct : "B"
    },

    {
        question : "3. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P6_Q3.png",
        choiceA : "Motorway ahead",
        choiceB : "Compulsory driving direction: straight ahead",
        choiceC : "No parking on both sides of the road",
        choiceD : "No Speed Limit",       
        correct : "B"
    },

    {
        question : "4. If you must stop suddenly in an emergency, you should",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Slam on the brakes and steer in the direction you want to go",
        choiceB : "Pump the brakes and steer in the direction you want to go",
        choiceC : "Hit the brakes hard, but not hard enough to lock the wheels, and steer in the direction you want to go",
        choiceD : "Hit the brakes hard enough to lock the wheels and hope for the best",    
        correct : "C"
    },

    {
        question : "5. Which of the following fire extinguishers will be ideal for putting out fire caused by petrol electrical faults?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Dry powder extinguisher",
        choiceB : "BCF extinguisher",
        choiceC : "Both choices",
        choiceD : "None of the choices",    
        correct : "A"
    },

    {
        question : "6. When driving behind a slow-moving truck going up a hill you should...",
        imgSrc : "ASSETS/IMAGES/P6_Q5.png",
        choiceA : "Check for approaching cars and pass in the oncoming lane when it is safe",
        choiceB : "Pass on the shoulder of the road",
        choiceC : "Honk so that the driver knows you are there and can pull over for you",
        choiceD : "Be patient and try to let your road rage subside",    
        correct : "A"
    },

    {
        question : "7. You are travelling on a highway, suddenly you notice that you are entering a built up area or town. What speed limit should you use?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "25 kmh",
        choiceB : "30 kmh",
        choiceC : "50 kmh",
        choiceD : "70 kmh",    
        correct : "C"
    },

    {
        question : "8. Who must wait?",
        imgSrc : "ASSETS/IMAGES/P6_Q8.png",
        choiceA : "Vehicle No 2",
        choiceB : "Vehicle No 1",
        choiceC : "Whoever takes the initiative",
        choiceD : "Wait for another car to force the decision",  
        correct : "B"
    },

    {
        question : "9. Which of the road signs below means: no entry for all vehicles?",
        imgSrc : "ASSETS/IMAGES/P6_Q9.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",    
        correct : "A"
    },

    {
        question : "10. You are waiting to emerge left from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The large vehicle can turn suddenly",
        choiceB : "The large vehicle can easily hide an overtaking vehicle",
        choiceC : "The large vehicle is difficult to steer in a straight line",
        choiceD : "The large vehicle can easily hide vehicles from the left",    
        correct : "B"
    },

    {
        question : "11. You can only drive on the sidewalks when it is",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Outside the drive way",
        choiceB : "Parallel to the drive way",
        choiceC : "Part of the drive way",
        choiceD : "None of the above",    
        correct : "C"
    },

    {
        question : "12. What is the minimum legal insurance cover you should have a drive on public roads?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Third party, fire and theft",
        choiceB : "Third party only",
        choiceC : "Fully comprehensive",
        choiceD : "Personal injury cover",    
        correct : "C"
    },

    {
        question : "13. In what situation are you allowed to use the headlight flasher to indicate your intention to overtake another vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Outside built-up areas in the day time",
        choiceB : "Outside built-up areas at night",
        choiceC : "When it is raining heavily",
        choiceD : "Outside built-up areas in the day time and at night",    
        correct : "D"
    },  

    {
        question : "14. Warning road signs are indicated on",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Circular signboards",
        choiceB : "Rectangular signboards",
        choiceC : "Square signboards",
        choiceD : "Triangular signboards",       
        correct : "D"
    },

    {
        question : "15.  How is the date for the next inspection of your motor vehicle shown on the vehicle itself?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "By means of the inspection sticker",
        choiceB : "By the side of the vehicle",
        choiceC : "It isn't",
        choiceD : "It is hidden",    
        correct : "A"
    },

    {
        question : "16. What should you use your horn for?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "To alert others of your presence",
        choiceB : "To greet other road user",
        choiceC : "To allow you right of way",
        choiceD : "To signal your annoyance",    
        correct : "A"
    },

    {
        question : "17. Which of these road signs always require the use of direction indicators?",
        imgSrc : "ASSETS/IMAGES/P6_Q17.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",    
        correct : "B"
    },

    {
        question : "18. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P6_Q18.png",
        choiceA : "Major road",
        choiceB : "Stop, give way for drivers on the intersecting road",
        choiceC : "Priority intersection",
        choiceD : "Give way for drivers on the intersecting road",    
        correct : "B"
    },

    {
        question : "19. You are overtaking an okada rider in heavy rain. What should you do?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Allow extra room",
        choiceB : "Give a thank you wave",
        choiceC : "Move back early",
        choiceD : "Sound your horn",    
        correct : "A"
    },

    {
        question : "20. How will a school crossing patrol signal you to stop?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "By pointing to children on the opposite pavement",
        choiceB : "By displaying a red light",
        choiceC : "By displaying a stop sign",
        choiceD : "By giving you an arm signal",    
        correct : "C"
    },

    {
        question : "21.  A flashing green light means",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "This is a pedestrian-controlled traffic light",
        choiceB : "You can continue through the intersection as long as it,s clear",
        choiceC : "This light simply warns you that you are entering an intersection",
        choiceD : "This is a pedestrian-controlled traffic light & You can continue through the intersection as long as it's clear ",    
        correct : "D"
    },

    {
        question : "22. To help protect the environment you should NOT...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Remove your roof rack when unloading",
        choiceB : "Use your car for very short journeys",
        choiceC : "Walk, cycle, or use public transport",
        choiceD : "Empty the boot of unnecessary weight",    
        correct : "B"
    },

    {
        question : "23. Who is allowed to cross the intersection?",
        imgSrc : "ASSETS/IMAGES/P6_Q23.png",
        choiceA : "None of them",
        choiceB : "All of them",
        choiceC : "Vehicle No 1",
        choiceD : "Vehicle No 1 and No 2",    
        correct : "A"
    },

    {
        question : "24. To avoid an accident when entering a contra flow system (transfer of traffic its usual half of the road to the other half, so that it shares it with traffic flowing in the other direction), you should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Reduce speed at the exit of the road",
        choiceB : "Switch lanes anytime to make progress",
        choiceC : "Choose opposite lane early",
        choiceD : "Follow other motorists closely to avoid long queues",    
        correct : "A"
    },  

    {
        question : "25. Why are mirrors often slightly curved (convex)",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "They totally cover blind spots",
        choiceB : "They make it easier to judge the speed of following traffic",
        choiceC : "They make following traffic look bigger",
        choiceD : "They give a wider field of vision",    
        correct : "D"
    },  

    {
        question : "26. On a highway, what is the interval of putting up a warning triangle or any other warning device when a vehicle breaks down?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Approximately 100m",
        choiceB : "Approximately 120m",
        choiceC : "Approximately 180m",
        choiceD : "Approximately 220m",    
        correct : "A"
    },  

    {
        question : "27. What conditions of a vehicle are liable to cause accidents?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Tyres completely worn down",
        choiceB : "Tyres with too low pressure",
        choiceC : "Well aligned wheels",
        choiceD : "Tyres completely worn down & Tyres with too low pressure ",    
        correct : "D"
    },  

    {
        question : "28. Which of the following will represent an act of aggressive driving?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Tailgating",
        choiceB : "Braking responsibly",
        choiceC : "Observing traffic rules",
        choiceD : "Driving in the right lane on two way road",    
        correct : "A"
    },

    {
        question : "29. A large diamond painted on the road in a particular lane means",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Bus lane only",
        choiceB : "You cannot drive in this lane",
        choiceC : "Reserved for buses and High Occupancy Vehicles (HOV's)",
        choiceD : "Crosswalk",    
        correct : "C"
    },

    {
        question : "30. A police officer is controlling the traffic at an intersection even though the traffic lights are in operation. Whose signals are you to obey?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The traffic lights only",
        choiceB : "The police officers signals",
        choiceC : "Just do what traffic is doing",
        choiceD : "Wait until the officer leaves",    
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





















