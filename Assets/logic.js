//initial page//
const startScreen = document.querySelector("#start-screen") // initial screen
const startButton = document.querySelector("#start") // start button, initializes timer and changes screen to questions?

startButton.addEventListener('click', callQuestions)

function callQuestions(){
  startScreen.className = "hide" //changing the classname
  quizContainer.className = "show" //changing the classname
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
     const output = [] //variable for HTML generation
    
     quizQuestions.forEach((currentQuestion, qNumber) => {//foreach loop for questions object array. 
         const answers = [] //array containing possible answers
         for (letter in currentQuestion.answers){ // loop to add in button
             answers.push( // push is adding these items to the answers array and slapping down a button per item.
 				"<label>"
 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
 					+ letter + ": "
					+ currentQuestion[i].answers[letter]
				+ "</label>"
           );
        }
     })
 }

 function showResults(){}