//initial page//

//global variables//
let startScreen = document.querySelector("#start-screen") // initial screen
let startButton = document.querySelector("#start") // start button, initializes timer and changes screen to questions?
let counterEl = document.querySelector("#time") //timer element

//Score
var score = 1

startButton.addEventListener('click', startQuiz) //event listener for click, calls startquiz

function startQuiz(){ 
  localStorage.setItem("score", 0); 
  startScreen.className = "hide" //changing the classname
  quizContainer.className = "show" //changing the classname
  counterEl.textContent = 60
  setTime()// sets score to 0 and stores future incrementation locally
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
        questionTitle: "Commonly used data types DO NOT include:",
        answerOptions: ["stings", "alerts", "booleans", "numbers"],
        correctAnswer: 1 //index of correct answer, alerts
    },
    {
        questionTitle: "The condition in an if / else statement is enclosed within _____.",
        answerOptions: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: 2 ///index of correct answer, parentheses
    },
    {
        questionTitle: "String values must be enclosed within _____ when being assigned to variables.",
        answerOptions: ["quotes", "commas", "curly brackets", "parentheses"],
        correctAnswer: 0 //index of correct answer, quotes
    },
    {
        questionTitle: "A useful tool in development and debugging that works by printing content to the console is:",
        answerOptions: ["JavaScript", "terminal/bash", "for loops", "console log"],
        correctAnswer: 3 //index of correct answer, console.log
    },
    {
        questionTitle:  "Arrays in JavaScript can be used to store _____.",
        answerOptions: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: 3 //index of correct answer, all
    },
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
    parseInt(localStorage.getItem("score")) //grabbing score from local storage
    endScreen.textContent = score++ // adding 1 to it
    localStorage.setItem("score", score) // putting the new score in storage
}

//quiz end//
let endScreen = document.querySelector("#end-screen")
let finalScore = document.querySelector("#final-score")

function endQuiz(){
    scoreStore()
    endScreen.className = "start" //changing the classname
    quizContainer.className = "hide" //changing the classname
}

function scoreStore() {
    finalScore.textContent = localStorage.getItem("score")
}

