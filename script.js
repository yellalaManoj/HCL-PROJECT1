const quizData = [
    {
        question: "When was HCLTeach company estabilsed ?",
        answers: ["12 November 1992", "12 November 1991", "13 November 1990", "13 November 1991"],
        correct: 1
    },
    {
        question: "Who is CEO of HCL ?",
        answers: ["C VijayaKumar", "V Sankaran", "Y Manoj", "K Purandhar"],
        correct: 0
    },
    {
        question: "What does HCL stand for ?",
        answers: ["Hindustan Computers Limited", "High Computing Labs", "Hardware Computing Labs", "Hindu computer Limited"],
        correct: 0
    },
    {
        question: "Which of the following is a subsidiary of HCL Technologies ?",
        answers: ["HCL Healthcare", "HCL Security", " HCL Telecom", "HCL Infosystems"],
        correct: 3
    },
    {
        question: "HCL Technologies primarily focuses on which of the following sectors ?",
        answers: ["Manufacturing", " Information Technology", "Agriculture", "Retail"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerListElement = document.getElementById("answer-list");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerListElement.innerHTML = '';
    currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="radio" name="answer" value="${index}">${answer}</label>`;
        answerListElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;
    const answerIndex = parseInt(selectedAnswer.value);
    if (answerIndex === quizData[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.classList.add('hidden');
    answerListElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.innerText = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add('hidden');
    questionElement.classList.remove('hidden');
    answerListElement.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    loadQuestion();
}

nextButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz,);

loadQuestion();
