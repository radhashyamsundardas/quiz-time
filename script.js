
// Adding questions and answers for the quiz, Questions got from interviewbit.com
let quizQuestions = [
    { Question : "Which language is JAVASCRIPT?",
        Answer:{
            a: "Object Oriented",
            b: "Object Based",
            c: "Procedural",
            d: "None of Above",
        },  Answer: " Object Oriented",
    },

    { Question : "Which of the following keyword is used to define variable in Javascript?",
        Answer:{ 
            a: "var",
            b: "let",
            c: "Both A and B",
            d: "None of above",
        }, Answer: "Both A and B",
    },

    { Question: "Which METHOD is used to access HTML elements using javascript?",
        Answer: {
            a: "getElementById()",
            b: "getElementByClassname()",
            c: "Both A and B",
            d: "None of above",
        }, Answer: "Both A and B",
    },

   { Question: "How can Datatype be declared to be a constant type",
        Answer: {
            a: "const",
            b: "var",
            c: "let",
            d: "constant",
        }, Answer: "const",
    },
];
// finish writin question and answers

// declaring variables through query selector.
var startQueEl = document.querySelectorAll("start-coding-quiz");
var questions = document.querySelectorAll("questions");
var solutions = document.querySelectorAll("answers");
var tiktok = document.querySelectorAll("countdown");
var result = document.querySelectorAll("score");
var autograph = document.querySelectorAll("initial");
var submit = document.querySelectorAll("submit");
var highScores = document .querySelectorAll("high-scores");
var remainingTime = 60;
var games = [];
var activeStepIndex = 1;
// finish declaring variables

// started making functions below

//creating function ASKQUESTION inside going to use .createElement, .textContent, and .append to add Q&A to html.

function askQuestions (activeQuestions){
    questions.innerHTML = "";

var questionTitle = document.createElement("p");
var answerli = document.createElement("ul");
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");

questionTitle.textContent= activeQuestion.Question;
answer1.textContent = activeQuestion.answers([1]);
answer2.textContent = activeQuestion.answers([2]);
answer3.textContent = activeQuestion.answers([3]);
answer4.textContent = activeQuestion.answers([4]);

answerList.append(answer1);
answerList.append(answer2);
answerList.append(answer3);
answerList.append(answer4);
questions.append(questionTitle);
questions.append(answerList);
}
// end of ASKQUESTION function

// creating another function COUNTDOWN.
function countdown(){
    var interval =setInterval(function () {if (timeLeft > 1 && activeStepIndex !== 10){
        tiktok.textContent = timeLeft;
        timeLeft--;
    } else {
        clearInterval(timeInterval);
    }
},1000);
}
// end of function countdown and all other functions too

// going to add event listeners to the function
startQueEl = document.querySelectorAll.addEventListener("click",function(){
    countdown();
    renderQuestions(quizQuestions[0]);
});