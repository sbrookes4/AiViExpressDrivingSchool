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

// TEST BANK 7
let questions = [
    {
        question : "1. If you want to change lanes, what is expected of you?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Wait untill all traffic passes then move over",
        choiceB : "Just do it!",
        choiceC : "Observe the traffic behind you before you actually move",
        choiceD : "Indicate that you are changing lanes",       
        correct : "C"
    },

    {
        question : "2. Objects hanging on your interior mirror may",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Restrict your view",
        choiceB : "Improve your driving",
        choiceC : "Enhance the beauty of your vehicle",
        choiceD : "Help your concentration",      
        correct : "A"
    },

    {
        question : "3. Which of the road signs below means: right curve?",
        imgSrc : "ASSETS/IMAGES/P7_Q3.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",   
        correct : "A"
    },

    {
        question : "4. You want to reverse on motorway. Is this allowed?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC : "Yes if no one is looking",
        choiceD : "Yes if no one is around",   
        correct : "B"
    },

    {
        question : "5. You are on a motorway; traffic ahead is breaking sharply because of an accident. How would you warn following traffic?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Briefly use the rear fog lights",
        choiceB : "Switch on the hazard lights continuously",
        choiceC : "Briefly use the hazard lights",
        choiceD : "Switch on the headlamps continuously",   
        correct : "B"
    },

    {
        question : "6. When approaching a stop sign where there is no stop line, sidewalk or crosswalk you should",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Stop 3 metres back from the intersection and inch up slowly",
        choiceB : "Slow down and proceed with caution",
        choiceC : "Stop just before you enter the intersection",
        choiceD : "Stop only if pedestrians are waiting to cross",   
        correct : "B"
    },

    {
        question : "7. Apart from the owner of a vehicle, who else is to make sure that the vehicle he is driving is equipped with a fire-fighting equipment?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The insurance company",
        choiceB : "The driver",
        choiceC : "The police",
        choiceD : "Your parents",   
        correct : "B"
    },

    {
        question : "8. What is required of the driver of vehicle No 2?",
        imgSrc : "ASSETS/IMAGES/P7_Q8.png",
        choiceA : "He has to observe the right of way of vehicle No 1 and wait for it",
        choiceB : "He has the right of way before vehicle No 1",
        choiceC : "He can do whatever he wants",
        choiceD : "Vehicle 3 should wave him through the turn",   
        correct : "A"
    },

    {
        question : "9. You are going on a very long journey. How can you keep yourself from getting tired?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Get some energy drinks for on the road",
        choiceB : "Drink some alcoholic beverages",
        choiceC : "Take frequent breaks in the course of the journey",
        choiceD : "Just fly",   
        correct : "C"
    },

    {
        question : "10. If you are faced with turbulence, you should",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Get off the road immediately",
        choiceB : "Watch out for vehicles that could be forced into your path, such as motorcycles and campers",
        choiceC : "Speed up so that you have more control of the car",
        choiceD : "Honk while passing large trucks to let them know you are there",   
        correct : "B"
    },

    {
        question : "11. If someone is to guide you reverse, where should the person stand?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Directly behind the vehicle",
        choiceB : "In front of the vehicle",
        choiceC : "At side of the vehicle",
        choiceD : "None of the above",   
        correct : "C"
    },

    {
        question : "12. Who must be the last to go?",
        imgSrc : "ASSETS/IMAGES/P7_Q12.png",
        choiceA : "Vehicle No 1",
        choiceB : "Vehicle No 2",
        choiceC : "Vehicle No 3",
        choiceD : "Whoever takes the initiative",   
        correct : "C"
    },  

    {
        question : "13. You are following a car driven by an elderly driver. You should expect the driver to drive badly...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Flash your lights and overtake",
        choiceB : "Be aware that the drivers reactions may not be as fast as yuors",
        choiceC : "Stay very close behind but be careful",
        choiceD : "Give wide berth",         
        correct : "B"
    },

    {
        question : "14. Who must wait?",
        imgSrc : "ASSETS/IMAGES/P7_Q14.png",
        choiceA : "Vehicle No 1",
        choiceB : "Vehicle No 2",
        choiceC : "Vehicle No 3",
        choiceD : "Whoever takes the initiative",         
        correct : "A"
    },

    {
        question : "15. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P7_Q15.png",
        choiceA : "Give way for oncoming traffic",
        choiceB : "Traffic allowed in both directions",
        choiceC : "One-way road",
        choiceD : "Two-way road",   
        correct : "A"
    },

    {
        question : "16. After overtaking a truck you can only return to the drive lane only when you are sure you can see...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The entire front of the truck in the side mirror",
        choiceB : "The entire front of the truck in the rear view mirror",
        choiceC : "The entire side of the truck in the side mirror",
        choiceD : "The entire side of the truck in the rear view mirror",   
        correct : "B"
    },

    {
        question : "17. During periods of illness your ability to drive may be impaired. You must...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "See your doctor each time before you drive",
        choiceB : "Only take smaller doses of any medicines",
        choiceC : "Be medically fit to drive",
        choiceD : "Take all your medicines with you when you drive",   
        correct : "C"
    },

    {
        question : "18. What is first aid?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Help by police",
        choiceB : "Help by ambulance personnel",
        choiceC : "Help by road workers",
        choiceD : "The first and temporary help",   
        correct : "D"
    },

    {
        question : "19. You wish to overtake an overloaded, slow moving vehicle on a busy road. You should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Fellow it closely and keep moving out to see the road ahead",
        choiceB : "Flash your headlights for the oncoming traffic to give way",
        choiceC : "Stay behind until the driver waves you past",
        choiceD : "Keep well back until you can see that it is clear ahead",   
        correct : "D"
    },

    {
        question : "20. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P7_Q20.png",
        choiceA : "Level crossing 90 m ahead",
        choiceB : "Pedestrian crossing ahead",
        choiceC : "Level crossing 30 m ahead",
        choiceD : "Police checkpoint ahead",   
        correct : "A"
    },

    {
        question : "21. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P7_Q21.png",
        choiceA : "Upcoming weather forecast station",
        choiceB : "Side Wind",
        choiceC : "Animal Crossing",
        choiceD : "Pedestrain Crossing",   
        correct : "B"
    },

    {
        question : "22. You have made changes on your vehicle and want to report them to the appropriate authority. What are you to submit?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Driving licence",
        choiceB : "Vehicle registration document",
        choiceC : "Vehicle registration document and document of ownership",
        choiceD : "Proof of Purchase",   
        correct : "C"
    },

    {
        question : "23. Which of the following will give you an ideal stopping distance?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "The 2 second gap",
        choiceB : "The 3 second gap",
        choiceC : "The 3 minutes gap",
        choiceD : "The 2 minutes gap",   
        correct : "A"
    },

    {
        question : "24. You must not use your horn when you are stationary...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Unless a moving vehicle may cause you danger",
        choiceB : "At any time whatsoever",
        choiceC : "Unless it is used only briefly",
        choiceD : "Except for signaling that you have just arrived",   
        correct : "A"
    },  

    {
        question : "25.  What is required of the driver of vehicle No 2?",
        imgSrc : "ASSETS/IMAGES/P7_Q25.png",
        choiceA : "He has to observe the right of way of vehicle No 1 and wait for it",
        choiceB : "He has the right of way before vehicle No 1",
        choiceC : "Vehicle No 1 has to wave him through",
        choiceD : "He has to wave Vehicle No 1 through",   
        correct : "A"
    },  

    {
        question : "26. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P7_Q26.png",
        choiceA : "Warning, right bend",
        choiceB : "Warning, series of bends, first to right",
        choiceC : "Warning, uneven road, slopes to left",
        choiceD : "No left turn",   
        correct : "D"
    },  

    {
        question : "27. Your mobile phone rings while you are on the motorway. Before answering your should...",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Reduce your speed",
        choiceB : "Move into the left hand lane",
        choiceC : "Park on the hard shoulder",
        choiceD : "Stop in a safe place",   
        correct : "D"
    },  

    {
        question : "28. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P7_Q28.png",
        choiceA : "Reduce your speed",
        choiceB : "Move into the left hand lane",
        choiceC : "Park on the hard shoulder",
        choiceD : "No entry for motorcycles",   
        correct : "D"
    },

    {
        question : "29. What is the meaning of this road sign?",
        imgSrc : "ASSETS/IMAGES/P7_Q29.png",
        choiceA : "Reduce your speed",
        choiceB : "Move into the left hand lane",
        choiceC : "No entry for buses",
        choiceD : "Stop in a safe place",   
        correct : "C"
    },

    {
        question : "30. You noticed that your car starts but your headlight becomes dim at low engine speed. Which of the following should you check?",
        imgSrc : "ASSETS/IMAGES/AIVI_SHEILD.png",
        choiceA : "Radiator",
        choiceB : "Water Pump",
        choiceC : "Fuse",
        choiceD : "Alternator",   
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





















