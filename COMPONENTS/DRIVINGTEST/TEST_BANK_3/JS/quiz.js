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

// TEST BANK 3 QUESTIONS
let questions = [
    {
        question : "1. During periods of illness your ability to drive may be impaired. You must",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "See your doctor each time before you drive",
        choiceB : "Only take smaller doses of any medicines",
        choiceC : "Be medically fit to drive",
        choiceD : "Take all your medicines with you when you drive",       
        correct : "C"
    },

    {
        question : "2. What is the meaning of this sign?",
        imgSrc : "ASSETS/IMAGES/P3_Q2.png",
        choiceA : "Slippery road",
        choiceB : "Road narrow on the left",
        choiceC : "Wrong way",
        choiceD : "No parking",
        correct : "B"
    },

    {
        question : "3. What is the meaning of this sign?",
        imgSrc : "ASSETS/IMAGES/P3_Q3.png",
        choiceA : "Sharp turn to the left",
        choiceB : "Don't drive in reverse",
        choiceC : "No U-turn allowed",
        choiceD : "No backing up allowed",
        correct : "C"
    },

    {
        question : "4. Which of these is most likely to deter the theft of your vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "An immobiliser",
        choiceB : "Tinted windows",
        choiceC : "Locking wheel nuts",
        choiceD : "A sun screen",
        correct : "A"
    },

    {
        question : "5. What advice should you give to a driver who has had a few alcoholic drinks at a party?",
        imgSrc : "ASSETS/IMAGES/P3_Q5.png",
        choiceA : "Have a strong cup of coffee and then drive home",
        choiceB : "Drive carefully and slowly",
        choiceC : "Go home by public transport",
        choiceD : "Wait a short while and then drive home",
        correct : "C"
    },

    {
        question : "6. If your headlights ever fail, you should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Try turning the light switch on and off rapidly.",
        choiceB : "Trust your parking lights to make you visible to other vehicles.",
        choiceC : "Use your hazard lights.",
        choiceD : "Use your hazard lights & try turning the light switch on and off rapidly",
        correct : "D"
    },

    {
        question : "7. An under inflated tyre can cause your tyre to...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Rotate well",
        choiceB : "Have road-holding",
        choiceC : "Overheat",
        choiceD : "None of these choices",
        correct : "C"
    },

    {
        question : "8. Your vehicle has no fog lights but you are driving it in thick fog in the day time. Why is it wrong for you to use your parking lights instead of dimmed head lights?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "In foggy weather, you MUST make it a point to let road users coming from the opposite direction see you more clearly than those coming from behind",
        choiceB : "You can be seen more easily by oncoming drivers when your dimmed headlights are on",
        choiceC : "Parking lights are brighter than headlights",
        choiceD : "Fog won't last very long so no need to worry",
        correct : "B"
    },

    {
        question : "9. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P3_Q9.png",
        choiceA : "U-turn",
        choiceB : "No left turn",
        choiceC : "No right turn",
        choiceD : "Traffic must stop",
        correct : "B"
    },

    {
        question : "10. If you want to change lanes, what is expected of you?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Indicate that you are changing lanes",
        choiceB : "Observe the traffic behind you before you actually move",
        choiceC : "Just change lanes - others will let you over",
        choiceD : "Stop or slow down and let traffic pass you by then change lanes",
        correct : "B"
    },

    {
        question : "11. You are following two cyclists. They approach a roundabout in the right-hand lane. In which direction should you expect the cyclists to go?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Left",
        choiceB : "Right",
        choiceC : "Straight ahead",
        choiceD : "Any direction",
        correct : "D"
    },

    {
        question : "12. You are driving along a wet road. How can you tell if your vehicle`s tyres are losing their grip on the surface?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The engine will stall",
        choiceB : "The engine noise will increase",
        choiceC : "The steering will feel very heavy",
        choiceD : "The steering will feel very light",       
        correct : "D"
    },

    {
        question : "13. Your overall stopping distance will be much longer when driving...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "In the fog",
        choiceB : "In the rain",
        choiceC : "In strong winds",
        choiceD : "On good raods",      
        correct : "B"
    },

    {
        question : "14. What can be the use of the hazard or flashing warning signals on a motor vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "To indicate an upcoming bus stop",
        choiceB : "To indicate a school bus with children getting in and out",
        choiceC : "To indicate to speed up",
        choiceD : "To indicate to make a left turn",
        correct : "B"
    },

    {
        question : "15. You are travelling at 70 kmh on a good, dry road. What is your typical overall stopping distance?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "25 meters",
        choiceB : "50 meters",
        choiceC : "75 meters",
        choiceD : "99 meters",
        correct : "B"
    },

    {
        question : "16. What do you have to keep in mind when you see elderly persons crossing the road?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "They may suddenly stop on the roadway",
        choiceB : "They are as smart as younger persons",
        choiceC : "They are as fast as younger persons",
        choiceD : "They are as aware as younger persons",
        correct : "A"
    },

    {
        question : "17. In what order must the vehicles proceed?",
        imgSrc : "ASSETS/IMAGES/P3_Q17.png",
        choiceA : "Vehicle No 2 FIRST, Vehicle No 3 NEXT, Vehicle No 1 LAST",
        choiceB : "Vehicle No 3 FIRST, Vehicle No 2 NEXT, Vehicle No 1 LAST",
        choiceC : "Vehicle No 1 FIRST, Vehicle No 3 NEXT, Vehicle No 2 LAST",
        choiceD : "Vehicle No 1 FIRST, Vehicle No 2 NEXT, Vehicle No 3 LAST",
        correct : "A"
    },

    {
        question : "18. You think the driver of the vehicle in front has forgotten to cancel the right indicator. You should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Overtake on the left if there is room",
        choiceB : "Flash your lights to alert the driver",
        choiceC : "Sound your horn before overtaking",
        choiceD : "Stay behind and not overtake",
        correct : "D"     
    },

    {
        question : "19. When parallel parking, you must be within how many centimeters from the curb?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "50 cm",
        choiceB : "30 cm",
        choiceC : "5 cm",
        choiceD : "Tire touching curb",
        correct : "B"
    },

    {
        question : "20.  Four drivers attend a social event, three of them take 3 bottles of beer each, while the last person takes 1 bottle of the same beer. Which of them will the law permit to drive?",
        imgSrc : "ASSETS/IMAGES/P3_Q20.png",
        choiceA : "The three drivers who took 3 bottles of beer each",
        choiceB : "The driver who took 1 bottle of beer",
        choiceC : "Any of them can drive",
        choiceD : "None of them can drive",
        correct : "D"
    },

    {
        question : "21. Your vehicle pulls to one side when braking. You should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Consult your garage as soon as possible",
        choiceB : "Change the tyres around",
        choiceC : "Pump the pedal when braking",
        choiceD : "Use your handbrake at the same time",
        correct : "A"
    },

     {
        question : "22.  If you are stranded in snow in your vehicle, you should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Run the engine to keep the interior of the vehicle warm",
        choiceB : "Leave the car and look for help",
        choiceC : "Run the engine only for about five minutes an hour to avoid carbon monoxide poisoning",
        choiceD : "All of the choices",
        correct : "C"
    },   

    {
        question : "23. You are descending a steep-hill and have to change to a lower gear. What method should you employ to use the braking effect of the engine?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Immediately after shifting gear, disengage the clutch",
        choiceB : "Immediately after shifting gear, switch off the engine",
        choiceC : "Immediately after shifting gear, step firmly on the foot brake",
        choiceD : "Just coast down the hill",
        correct : "A"
    }, 

    {
        question : "24. What should you expect when you see this sign?",
        imgSrc : "ASSETS/IMAGES/P3_Q24.png",
        choiceA : "Braking distance will be shorter than on a level road",
        choiceB : "High gears will result in good braking",
        choiceC : "Braking distance will not be affected",
        choiceD : "Braking distance will be longer than on a level road",
        correct : "D"
    },  

    {
        question : "25. What are you allowed to do when you see a double sign like this?",
        imgSrc : "ASSETS/IMAGES/P3_Q25.png",
        choiceA : "Overtake",
        choiceB : "Overtake, but keep your speed below 30",
        choiceC : "Overtake, if the other car is going 30",
        choiceD : "None of the chocies",
        correct : "D"
    },  

    {
        question : "26. Which of the following should not be kept in your vehicle?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "A first aid kit",
        choiceB : "The vehicle documents",
        choiceC : "The tax disc",
        choiceD : "A road atlas",
        correct : "B"
    },  

    {
        question : "27. How should the vehicles proceed?",
        imgSrc : "ASSETS/IMAGES/P3_Q27.png",
        choiceA : "Vehicle No 2 FIRST, Vehicle No 1 NEXT, Vehicle No 3 LAST",
        choiceB : "Vehicle No 1 FIRST, Vehicle No 3 NEXT, Vehicle No 2 LAST",
        choiceC : "Vehicle No 2 FIRST, Vehicle No 1 NEXT, Vehicle No 3 LAST",
        choiceD : "Vehicle No 3 FIRST, Vehicle No 1 NEXT, Vehicle No 2 LAST",
        correct : "A"
    },  

    {
        question : "28. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P3_Q28.png",
        choiceA : "No right turn",
        choiceB : "No parking on the right",
        choiceC : "No stopping on the right",
        choiceD : "Traffic stops at the right",
        correct : "A"
    },

    {
        question : "29. You have just gone through deep water. To dry off the brakes you should",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Accelerate and keep to a high speed for a short time",
        choiceB : "Avoid using the brakes at all for a few miles",
        choiceC : "Go slowly while gently applying the brakes",
        choiceD : "Stop for at least an hour to allow them time to dry",
        correct : "C"
    },

    {
        question : "30. You want to park here. Is this allowed?",
        imgSrc : "ASSETS/IMAGES/P3_Q30.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC : "No one really cares if they aren't looking, so park",
        choiceD : "Only if the police are nto around",
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





















