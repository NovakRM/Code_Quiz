//initial page//
let startScreen = document.querySelector("#start-screen") // initial screen
let startButton = document.querySelector("#start") // start button, initializes timer and changes screen to questions?
let counterEl = document.querySelector("#time") //timer element

startButton.addEventListener('click', callQuestions)

function callQuestions(){
  startScreen.className = "hide" //changing the classname
  quizContainer.className = "show" //changing the classname
  counterEl.textContent = 60
  setTime()
  console.log("start")
}

let timeLeft // global variable

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
let questionTitle = document.querySelector("#question-title") // h2 to populate with question itself?
let questionOptions = document.querySelector("#choices") // radio buttons? 
let quizQuestion = [
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
let endScreen = document.querySelector("#end-screen")
let finalScore = document.querySelector("#final-score")


//logic start//

//create eventListener for button [x]
// activate timer countdown [x]
// show questions [] working on it
    // q arrays
    // for loop pulling from array to make buttons and show questions
    // event listener for each answer button
    // add pt for correct answer
        //set/get item from local storage
    // wrong answer subtracts time (might need to just leave this out until the end)
    // loop through questions one at a time
    // keep time decrementing 
    //final question brings user to score screen

//quiz end
    // value of locally stored number displayed as score
    // input field for initials
        // store initials and score to local
        // link to high scores page
// high scores page
    // create an element displaying initials and scores


function buildQuiz(){
     let output = [] //variable for HTML generation
    
     quizQuestions.forEach((currentQuestion, qNumber) => {//foreach loop for questions object array. 
         let answers = [] //array containing possible answers
         for (letter in currentQuestion.answers){ // loop to add in button
             answers.push( // push is adding these items to the answers array and slapping down a button per item.
 				"<label>"
 					+ '<input type="button" name="question'+i+'" value="'+letter+'">'
 					+ letter + ": "
					+ currentQuestion[i].answers[letter]
				+ "</label>"
           );
        }
     })
 }

 function showResults(){}
 