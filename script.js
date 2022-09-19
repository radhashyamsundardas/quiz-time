
// Adding questions and answers for the quiz, Questions got from interviewbit.com
let quizQuestions = [
    {
        question: "Which language is JAVASCRIPT?",
        answer: {
            1: "Object Oriented",
            2: "Object Based",
            3: "Procedural",
            4: "None of Above",
        }, correctAnswer: " Object Oriented",
    },

    {
        question: "Which of the following keyword is used to define variable in Javascript?",
        answer: {
            1: "var",
            2: "let",
            3: "Both A and B",
            4: "None of above",
        }, correctAnswer: "Both A and B",
    },

    {
        question: "Which METHOD is used to access HTML elements using javascript?",
        answer: {
            1: "getElementById()",
            2: "getElementByClassname()",
            3: "Both A and B",
            4: "None of above",
        }, correctAnswer: "Both A and B",
    },

    {
        question: "How can Datatype be declared to be a constant type",
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
var questionsDiv = document.getElementById("questions");
var solutions = document.getElementById("answers");
var timerEl = document.getElementById("countdown");
var result = document.getElementById("score");
var autograph = document.getElementById("initial");
var submit = document.getElementById("submit");
var highScores = document.getElementById("high-scores");
// create a variable to hold timer value
var remainingTime = 60;

var questionCount = 0

var games = [];
var activeStepIndex = 1;
// finish declaring variables



// eventlistener startquizelement
startQuizEl.addEventListener("click", function () {
    askQuestions(quizQuestions[questionCount]);
    finalCount();
});

// questions eventlistener

// look at the event obj to find out what was clicked (target ore scr el) li
    // look at that targetEl and see what they selected (innertext) object based
    // compare the user choice to the answer (if)
    // -- do one thing if correct
    // -- do another if incorrect
    // ** move to the next question **
    // incrementing you count
    // calling ask quetions again


// listens to any click in the questions div
questionsDiv.addEventListener("click", function (event){
    if(activeStepIndex === 10){
        solutions.textContent ="Congrats! game over";
        result.textContent = remainingTime;
    } else if (
        event.target.textContent !== quizQuestions[activeStepIndex - 1].correctAnswer
    ){
        solutions.textContent = "try again";
        remainingTime -= 10;
    } else {
        solutions.textContent = "correct";
        activeStepIndex++;
        askQuestions(quizQuestions[activeStepIndex -1]);
    }
    console.log(questionsDiv)

});

    // eventlistener submit
submit.addEventListener("click", function (event) {
    event.preventDefault();
    var game = {
        initials: initials.value.trim(),
        score: timeLeft,
    };
    games.push(game);
    storeGames();
    renderGames();
})

//
//creating function ASKQUESTION inside going to use .createElement, .textContent, and .append to add Q&A to html.

function askQuestions(activeQuestion) {
    console.log(activeQuestion);
    // clear the question div
    questionsDiv.innerHTML = "";

    // create new elements for this question
    var questionTitle = document.createElement("p");
    var answerList = document.createElement("ol");
    var answer1 = document.createElement("li");
    var answer2 = document.createElement("li");
    var answer3 = document.createElement("li");
    var answer4 = document.createElement("li");


    // modif the newly created el
    questionTitle.textContent = activeQuestion.question;
    answer1.textContent = activeQuestion.answer[1];
    answer2.textContent = activeQuestion.answer[2];
    answer3.textContent = activeQuestion.answer[3];
    answer4.textContent = activeQuestion.answer[4];

    // attaching the child el to the parent el
    answerList.append(answer1);
    answerList.append(answer2);
    answerList.append(answer3);
    answerList.append(answer4);
    questionsDiv.append(questionTitle);
    questionsDiv.append(answerList);
}

// end of ASKQUESTION function

// start of countdown function
function finalCount() {
    var timeInterval = setInterval (function() {
        if (timeLeft > 1 && activeStepIndex !== 10) {
            timerEl.textContent = timeLeft;
            timeLeft--;

        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}


// start of function rendergames
function renderGames() {
    for (var i = o; i < games.length; i++) {
        console.log(games[i]);
        var highScore = document.createElement("li");
        highScore.textContent = games[i].initials + " " + games[i].score;
        highScores.append(highScore);
    }
    console.log(games.length);
}
// function to store games
function store() {
    console.log(games);
    localStorage.setItem("games", JSON.stringify("games")
    );
}
function initial() {
    // reach into local storage to get games, parse it to js, store it in a var
    var storeGames = JSON.parse(localStorage.getItem("games"));
    // if the value of store is not null
    if (storeGames !== null) {
        // put storeGames value into games var
        games = storeGames;
    }
}

initial();