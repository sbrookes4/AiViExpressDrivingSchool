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

// TEST BANK 1 QUESTIONS
let questions = [
    {
        question : "1. To reduce the damage your vehicle causes to the environment you should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Avoid harsh acceleration",
        choiceB : "Use narrow side streets",
        choiceC : "Anticipate well ahead",
        choiceD : "Drive aggressively",       
        correct : "C"
    },

    {
        question : "2. Before you check your engine oil, you should ensure that the...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Engine is on",
        choiceB : "Engine is out of order",
        choiceC : "Engine is off and cold",
        choiceD : "Engine is warm but off",      
        correct : "C"
    },

    {
        question : "3. As well as planning your route before starting a journey, you should also plan an alternative route. Why is this?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "In case you have to avoid emergency vehicles",
        choiceB : "To let another driver overtake",
        choiceC : "To take the scenic route",
        choiceD : "Your first route may be blocked",
        correct : "D"
    },

    {
        question : "4. Overloading your vehicle can seriously affect the...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Mirrors",
        choiceB : "Journey time",
        choiceC : "Steering, suspension and gearbox",
        choiceD : "Radio",
        correct : "C"
    },

    {
        question : "5. It is illegal to park...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "On a sidewalk",
        choiceB : "On a bridge or in a tunnel.",
        choiceC : "In a no-parking area",
        choiceD : "All of the choices",
        correct : "D"
    },

    {
        question : "6. A light with a steady green arrow pointing either left or right means...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "You may turn in the direction of the arrow if the intersection is clear",
        choiceB : "You must check for oncoming traffic before turning in the direction of the arrow",
        choiceC : "Stop and proceed in the direction of the arrow with caution",
        choiceD : "Wait for all the traffic to stop for you",
        correct : "A"
    },

    {
        question : "7. True or False:You may overtake on a clear level crossing.",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "True",
        choiceB : "False",
        choiceC : "Both True and False",
        choiceD : "Neither True nor False",
        correct : "B"
    },

    {
        question : "8. A holder of Class B Licence is not allowed to drive a vehicle exceeding a certain weight. What is this weight limit?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "5 metric tons",
        choiceB : "2950 kg",
        choiceC : "4500 kg",
        choiceD : "1200 kg",
        correct : "B"
    },

    {
        question : "9. Who can turn off?",
        imgSrc : "ASSETS/IMAGES/P1_Q9.png",
        choiceA : "Cyclist No 1 and vehicle No 3",
        choiceB : "Cyclist No 1 and vehicle No 2",
        choiceC : "Vehicle No 2 only",
        choiceD : "Vehicle No 3 only",
        correct : "B"
    },

    {
        question : "10. A heavy load on your roof rack will...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Improve the road holding",
        choiceB : "Reduce the stopping distance",
        choiceC : "Make the steering lighter",
        choiceD : "Reduce stability",
        correct : "D"
    },

    {
        question : "11. You are driving behind this insecurely loaded truck. What might happen?",
        imgSrc : "ASSETS/IMAGES/P1_Q11.png",
        choiceA : "Truck may start swaying",
        choiceB : "Load may fall off",
        choiceC : "Load may blind your sight",
        choiceD : "All of the choices",
        correct : "B"
    },

    {
        question : "12. You must never signal other road users...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "To overtake",
        choiceB : "To stop and offer help",
        choiceC : "To warn for danger ahead",
        choiceD : "None of the choices",
        correct : "A"
    },  

    {
        question : "13. With all mirrors properly adjusted, a driver will be able to see all around him including his blind spots. Is this correct?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "In some cases - depends on mirror type and vehicle design",
        choiceB : "At all times",
        choiceC : "Yes",
        choiceD : "No",       
        correct : "D"
    },

    {
        question : "14. The main cause of brake fade is...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The brakes over-heating",
        choiceB : "Air in the brakes",
        choiceC : "Oil or water on the brakes",
        choiceD : "The brakes are out of adjustment",      
        correct : "A"
    },

    {
        question : "15. When you arrive at an accident scene where help is available, you should...",
        imgSrc : "ASSETS/IMAGES/P1_Q15.png",
        choiceA : "Clear possible dangers",
        choiceB : "Keep concentrated on the traffic and pass the scene quickly",
        choiceC : "Go watch the scene",
        choiceD : "Take pictures",
        correct : "B"
    },

    {
        question : "16. What should you bear in mind when you see this sign?",
        imgSrc : "ASSETS/IMAGES/P1_Q16.png",
        choiceA : "Hunting area, fire may be lighted",
        choiceB : "Bush fire, drive carefully",
        choiceC : "Do not throw pieces of lighted cigarettes",
        choiceD : "No smoking",
        correct : "C"
    },

    {
        question : "17. You are carrying two 13 year old children and their parents in your car. Who is responsible for seeing that the children wear seat belts?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "You, the driver",
        choiceB : "The children's parents",
        choiceC : "The front-seat passenger",
        choiceD : "The children",
        correct : "A"
    },

    {
        question : "18. What do you do when you see this sign?",
        imgSrc : "ASSETS/IMAGES/P1_Q18.png",
        choiceA : "Reduce Speed and change to down gear",
        choiceB : "Change to down gear and start braking",
        choiceC : "Coast freely",
        choiceD : "Ride the brakes",
        correct : "A"
    },

    {
        question : "19. If you intend going straight ahead in a roundabout, you should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Keep to the left lane",
        choiceB : "Keep to the right lane",
        choiceC : "Keep to any lane",
        choiceD : "Keep the middle lane",
        correct : "B"
    },

    {
        question : "20. You want to drive in here. Is this allowed?",
        imgSrc : "ASSETS/IMAGES/P1_Q20.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC : "Only if no one is looking",
        choiceD : "Only if no cars or people are around",
        correct : "B"
    },

    {
        question : "21. You want to make a U-turn here. Is this allowed?",
        imgSrc : "ASSETS/IMAGES/P1_Q21.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC : "Only if no one is looking",
        choiceD : "Only if no cars or people are around",
        correct : "B"
    },

    {
        question : "22. Pelican crossings are pedestrian crossing that are controlled by pedestrians?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Not always",
        choiceB : "False",
        choiceC : "True",
        choiceD : "None of the choices",
        correct : "D"
    },

    {
        question : "23. You are signalling to turn right in busy traffic. How would you confirm your intention safely?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Sound the horn",
        choiceB : "Give an arm signal",
        choiceC : "Flash your headlights",
        choiceD : "Position over the centre line",
        correct : "B"
    },

    {
        question : "24. You arrive at this junction, What do you need to do?",
        imgSrc : "ASSETS/IMAGES/P1_Q24.png",
        choiceA : "Stop",
        choiceB : "Watch your left and move",
        choiceC : "Drive onto the highway",
        choiceD : "Give way to a vehicle coming from the left",
        correct : "D"
    },  

    {
        question : "25. Where may you overtake on a one-way street?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Only on the left-hand side",
        choiceB : "Overtaking is not allowed",
        choiceC : "Only on the right-hand side",
        choiceD : "Either on the right or the left",
        correct : "A"
    },  

    {
        question : "26. Which of these groups of drivers is allowed to use the roads?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Visually impaired",
        choiceB : "Driver with hearing problems",
        choiceC : "A driver who is visually impaired in one eye",
        choiceD : "None of the choices",
        correct : "D"
    },  

    {
        question : "27. If the legal permissible alcohol level for driving is 0.08 mg, how many bottles of chilled, sparkling star can you take to stay in range?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "One",
        choiceB : "Half-glass",
        choiceC : "Two glasses",
        choiceD : "None of the choices",
        correct : "D"
    },  

    {
        question : "28. You are changing a tyre alongside the road. What should you do?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Clear possible dangers",
        choiceB : "Put your lights on",
        choiceC : "Display a warning triangle",
        choiceD : "Change it whenever you feel like it",
        correct : "C"
    },

    {
        question : "29. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P1_Q29.png",
        choiceA : "End of advisory speed",
        choiceB : "Advisory speed",
        choiceC : "Maximum speed limit",
        choiceD : "End of maximum speed limit",
        correct : "C"
    },

    {
        question : "30. The purpose of a catalytic converter is to reduce...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Fuel consumption",
        choiceB : "The risk of fire",
        choiceC : "Toxic exhaust gasses",
        choiceD : "Engine wear",
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





















