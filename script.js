
// Adding questions and answers for the quiz, Questions got from interviewbit.com
let quizQuestions = [
    { Question : "Which language is JAVASCRIPT?",
        answer:{
            1: "Object Oriented",
            2: "Object Based",
            3: "Procedural",
            4: "None of Above",
        },  correctAnswer: " Object Oriented",
    },

    { Question : "Which of the following keyword is used to define variable in Javascript?",
        answer:{ 
            1: "var",
            2: "let",
            3: "Both A and B",
            4: "None of above",
        }, correctAnswer: "Both A and B",
    },

    { Question: "Which METHOD is used to access HTML elements using javascript?",
        answer: {
            1: "getElementById()",
            2: "getElementByClassname()",
            3: "Both A and B",
            4: "None of above",
        }, correctAnswer: "Both A and B",
    },

   { Question: "How can Datatype be declared to be a constant type",
        answer: {
            1: "const",
            2: "var",
            3: "let",
            4: "constant",
        }, correctAnswer: "const",
    },
];
// finish writin question and answers

// declaring variables through query selector.
var startQuizEl = document.getElementById("start-challenge");
var questions = document.getElementById("questions");
var solutions = document.getElementById("answers");
var timerEl = document.getElementById("countdown");
var result = document.getElementById("score");
var autograph = document.getElementById("initial");
var submit = document.getElementById("submit");
var highScores = document .getElementById("high-scores");
var remainingTime = 60;
var games = [];
var activeStepIndex = 1;
// finish declaring variables



// eventlistener startquizelement
startQuizEl.addEventListener("click",function(){

  askQuestions(quizQuestions[0]);
  countdown();
});

// questions eventlistener

questions.addEventListener("click", function(event){
    if (activeStepIndex === 10){
        ansers.textContent = " congrats game over";
        score.textContent = timeLeft;

    } else (
        event.Target.textContent !== questions[activeStepIndex - 1].correctAnswer)
        {
            answers.textContent = "try agian.";
            timeLeft -= 10;
        } else{
            answer.textContent = "you are correct";
            console.log(timeleft);
            activeStepIndex++;
            renderQuestions(myQuestions[activeStepIndex - 1]);
        }
});

// eventlistener submit
submit.addEventListener("click", function(event)){
    event.preventDefault();
    var game = {
        initials: initials.value.trim(),
        score: timeLeft,
    };
    games.push(game);
    storeGames();
    renderGames();
}

// 
//creating function ASKQUESTION inside going to use .createElement, .textContent, and .append to add Q&A to html.

function askQuestions (activeQuestions){
    questions.innerHTML = "";

var questions = document.createElement("p");
var answerList = document.createElement("ol");
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");


quizQuestions.textContent= quizQuestions.question;
answer1.textContent = activeQuestions.answer[1];
answer2.textContent = activeQuestions.answer[2];
answer3.textContent = activeQuestions.answer[3];
answer4.textContent = activeQuestions.answer[4];

answerList.append(answer1);
answerList.append(answer2);
answerList.append(answer3);
answerList.append(answer4);
questions.append(questionTitle);
questions.append(answerList);
 }

// end of ASKQUESTION function

// start of countdown function
function countdown(){
    var timeInterval = Set(function(){
        if (timeLeft > 1 && activeStepIndex  !== 10){
            timerEl.textContent = timeLeft;
            timeLeft--;

        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}


// start of function rendergames
function renderGames (){
    for (var i=o; i< games.length; i++){
        console.log(games[i]);
        var highScore =document.createElement("li");
        highScore.textContent= games[i].initials + " " + games[i].score;
        highScores.append(highScore);
    }
    console.log(games.length);
}
// function to store games
function store (){
    console.log(games);
    localStorage.setItem("games",JSON.stringify("games")
    );
}
function initial(){
    var storeGames = JSON.parse(localStorage.getItem("games"));
    if(storeGames!== null){
        games = storeGames;
    }
}
initial();