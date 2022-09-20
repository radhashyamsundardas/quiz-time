
// Adding questions and answers for the quiz, Questions got from interviewbit.com
let quizQuestions = [
    {
        question: "Which language is JAVASCRIPT?",
        answer: {
            1: "Object Oriented",
            2: "Object Based",
            3: "Procedural",
            4: "None of Above",
        },
        correctAnswer: " Object Oriented",
    },

    {
        question: "Which of the following keyword is used to define variable in Javascript?",
        answer: {
            1: "var",
            2: "let",
            3: "Both A and B",
            4: "None of above",
        },
        correctAnswer: "Both A and B",
    },

    {
        question: "Which METHOD is used to access HTML elements using javascript?",
        answer: {
            1: "getElementById()",
            2: "getElementByClassname()",
            3: "Both A and B",
            4: "None of above",
        },
        correctAnswer: "Both A and B",
    },

    {
        question: "How can Datatype be declared to be a constant type",
        answer: {
            1: "const",
            2: "var",
            3: "let",
            4: "constant",
        },
        correctAnswer: "const",
    },
];
// finish writing question and answers

// declaring variables through getElementById selector.
var startQuizEl = document.getElementById("start-challenge");
var questionsDiv = document.getElementById("questions");
var solutions = document.getElementById("answers");
var timerEl = document.getElementById("countdown");
var result = document.getElementById("score");
var autograph = document.getElementById("initial");
var submit = document.getElementById("submit");
var highNum = document.getElementById("highnumbers");
// create a variable to hold timer value
var remainingTime = 60;

var questionCount = 0

var games = [];

// finish declaring variables



// eventlistener startquizelement
startQuizEl.addEventListener("click", function () {
    askQuestions(quizQuestions[questionCount]);
    finalCount();
});

// questions eventlistener




// first problem question doesn't change question and it just show's gameover or wrong answer on bottom no matter what you click,
// second problems is it doesn't save scores with initials  


// listens to any click in the questions div
questionsDiv.addEventListener("click", function (event){
    // check what info we have
    console.log(event);
    // look at the event obj to find out what was clicked (target ore scr el) li
    let eventTarget = event.target;
    // sanity check
    // look at that targetEl and see what they selected (innertext) 
    console.dir(eventTarget);
    // extract a property that will tell us what they clicked (innertext or innerhtml or textcontent)
    let userChoice = eventTarget.innerText;
    // get the correct answer
    let correctAnswer = quizQuestions[questionCount].correctAnswer;
    // compare the user choice to the answer (if)
    if (userChoice === correctAnswer){
        // -- do one thing if correct
        console.log(' you are correct')
        solutions.textContent = "correct";        
    } else {
        // -- do another if incorrect
        console.log('wrong')
        solutions.textContent = "incorrect answer";
        remainingTime -= 10;
    }
    
    
    // ** move to the next question **
    // incrementing you count
    questionCount++;
    
    // gameover if statement
    if (questionCount >= quizQuestions.length){
        solutions.textContent = "Game Over";
    }


    // calling ask quetions again
    askQuestions(quizQuestions[questionCount]);
});

    // eventlistener submit


//
//creating function ASKQUESTION inside going to use .createElement, .textContent, and .append to add Q&A to html.

function askQuestions(activeQuestion) {
    // clear the question div
    questionsDiv.innerHTML = "";

    // create new elements for this question
    var questionTitle = document.createElement("p");
    var answerList = document.createElement("ol");
    var answer1 = document.createElement("li");
    var answer2 = document.createElement("li");
    var answer3 = document.createElement("li");
    var answer4 = document.createElement("li");


    // modify the newly created el
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

// start of finalCount function
function finalCount() {
    var timeInterval = setInterval (function() {
        if (remainingTime >= 0 && questionCount !== 10) {
            timerEl.textContent = remainingTime;
            remainingTime--;

        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

submit.addEventListener("click", function (event) {
    event.preventDefault();
    var game = [{
        initials: initials(),
        score: remainingTime,
    }];
    game.push(game);
    play();
    initials();
})

// start of function play
function play() {
    for (var i = 0; i < games.length; i++) {
        var highNum = document.createElement("li");
        highNum.textContent = games[i].initials + " " + games[i].score;
        highNum.append(autograph);
    }
}

// function to store games
function store(){
    localStorage.setItem("NAME",JSON.stringify(games));
}

function initials() {
    // reach into local storage to get games, parse it to js, store it in a var
    var store= JSON.parse(localStorage.getItem("games"));
    // if the value of store is not null
    if (store !== null) {
        // put storevalue into games var
        games = store;
    }
}

initials();

