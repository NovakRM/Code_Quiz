//initial page//

//global variables//
let startScreen = document.querySelector("#start-screen") // initial screen
let startButton = document.querySelector("#start") // start button, initializes timer and changes screen to questions?
let counterEl = document.querySelector("#time") //timer element

//Score
var score = 0;

startButton.addEventListener('click', startQuiz) //event listener for click, calls startquiz

function startQuiz(){ 
  startScreen.className = "hide" //changing the classname
  quizContainer.className = "show" //changing the classname
  counterEl.textContent = 60
  setTime()
  nextQuestion(questionArray[0]) // change questions calling function? 
}

let timeLeft // global variable for countdown

function setTime(){
    timeLeft = setInterval(function(){
        counterEl.textContent--;

        if (parseInt(counterEl.textContent) === 0){
            clearInterval(timeLeft) // can call clear interval from other areas of quiz logic
            endQuiz()
        }
    }, 1000)
}

//quiz content//
let quizContainer = document.querySelector("#questions") // dynamically updates with questions?
let questionTitleEl = document.querySelector("#question-title") // h2 to populate with question itself?
let questionOptions = document.querySelector("#choices") // button styling already written

//logic start//

//make a for loop that adds buttons and call it on each array of questions

function giveButtons(give) {
    for (var i = 0; i < give.length; i++) {
       var btn = document.createElement("button")
       var txt = document.createTextNode(give[i])
       btn.appendChild(txt)
       btn.id = [i] //assigning buttons to div
       btn.classList.add("answerButton")  //string naming object class
       questionOptions.appendChild(btn)
    }
}

//let currentQuestion //global variable for current question being stored


let questionArray = [
    {
        questionTitle: "Question 1",
        answerOptions: [ "a","b","c","d"],
        correctAnswer: 3 //index of correct answer, D
    },
    {
        questionTitle: "Question 2",
        answerOptions: [ "a","b","c","d"],
        correctAnswer: 1 //index of correct answer, B
    },
    {
        questionTitle: "Question 3",
        answerOptions: [ "a","b","c","d"],
        correctAnswer: 1 //index of correct answer, B
    },
    {
        questionTitle: "Question 4",
        answerOptions: [ "a","b","c","d"],
        correctAnswer: 2 //index of correct answer, C
    }
]

let questionIndexPos = 0 // telling the browser where we start in the index above, it's kind of like how you have to call a function. You're telling the thing what to do

document.addEventListener("click", function(event){
    let classArr = Array.from(event.target.classList) // creates array from argument
    let currentQuestion = questionArray[questionIndexPos]
    if (classArr.includes("answerButton")){
        if(currentQuestion.answerOptions.indexOf(event.target.textContent)===currentQuestion.correctAnswer){  //find the index of the textcontent of whatever we clicked on in answer options
            correct()
        }else{
            incorrect()
        }   
        questionIndexPos ++ // increment index and move forward one
            nextQuestion(questionArray[questionIndexPos])// calls next question, pulls from array
    }
})


function nextQuestion(thisQuestion){ 
    if(thisQuestion !== undefined){ // if this has a value (basically we're telling the browser only to run this logic if it's still got the array to pull from)
        questionTitleEl.textContent = thisQuestion.questionTitle
        questionOptions.textContent = ""
        giveButtons(thisQuestion.answerOptions) //spawning buttons
    } else {
        clearInterval(timeLeft)
        endQuiz()
    }  
}

function incorrect() {
    alert("wrong!") // get something less ugly than an alert firing
    //subtract time
}

function correct() {
    alert("right!")
    //add point
}

//quiz end//
let endScreen = document.querySelector("#end-screen")
let finalScore = document.querySelector("#final-score")

function showScore() {
    finalScore.textContent = localStorage.getItem("score")
}

function endQuiz(){
    quizContainer.className = "hide" //changing the classname
    endScreen.className = "show" //changing the classname
    showScore()
}
