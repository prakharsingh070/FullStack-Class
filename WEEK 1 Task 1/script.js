const quizData=
[
    {
        question:"In how many days does javascript was invented",
        options:["10","15","20","25"],
        correct:1,
        explanation: "Javascript was invented in 10 days of time",
    },
    {
        question:"In how many days does python was invented",
        options:["10","15","20","25"],
        correct:3,
        explanation: "python was invented in 20 days of time",
    },
    {
        question:"In how many days does java was invented",
        options:["10","15","20","25"],
        correct:2,
        explanation: "Java was invented in 15 days of time",
    },
    {
        question:"In how many days does C++ was invented",
        options:["10","15","20","25"],
        correct:4,
        explanation: "C++ was invented in 25 days of time",
    }
]
const quizScreen=document.getElementById("quiz-screen");
const endScreen=document.getElementById("end-screen");
const reviewScreen=document.getElementById("review-screen");

const questionText = document.getElementById("question-text");
const questionContainer = document.getElementById("options-conatiner");
const progressLine = document.getElementById("progress-line");
const scoreLine = document.getElementById("score-line");
const timeCounter = document.getElementById("time-counter");
const explanationBox = document.getElementById("explanation-box");

