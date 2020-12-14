//initial page//
const startScreen = document.querySelector("#start-screen") // initial screen
const startButton = document.querySelector("#start") // start button, initializes timer and changes screen to questions?

startButton.addEventListener('click', callQuestions)

function callQuestions(){
    document.querySelector("#start-screen").style.visibility = "hidden"
    document.querySelector("#questions").style.visibility = "visible" // not displaying onclick? unsure of why.
}

//quiz content//
const quizContainer = document.querySelector("#questions") // dynamically updates with questions?
const questionTitle = document.querySelector("#question-title") // h2 to populate with question itself?
const questionOptions = document.querySelector("#choices") // radio buttons? 
const quizQuestion = [
    {
        question: "string",
        answers: {
            a: "string",
            b: "string",
            c: "string", 
        },
        correctAnswer: "a b or c"
    }
]


//quiz end//
const endScreen = document.querySelector("#end-screen")
const finalScore = document.querySelector("#final-score")

//logic start//
function buildQuiz(){
    const answers = [] //calling them from quizquestion object
}

function showResults(){}