//initial page//
let startScreen = document.querySelector("#start-screen") // initial screen
let startButton = document.querySelector("#start") // start button, initializes timer and changes screen to questions?
let counterEl = document.querySelector("#time") //timer element

startButton.addEventListener('click', startQuiz)

function startQuiz(){
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

function endQuiz(){
    quizContainer.className = "hide" //changing the classname
    endScreen.className = "show" //changing the classname
}

//high score page//
let initialsContainer = document.querySelector("#initials")

//logic start//

//make a for loop that adds buttons and call it on each array of questions
//each question's going to be a miniature function, object doesnt seem in our scope?? idk or stick with object i just dont get it as much as i do for loops and arrays
    
//Talked with a classmate about using arrays and for loops, for loop to call in question functions. 
//Mentioned I learned how to do for loop eventlisteners to make code more dry. Pasted in some code from my own experimenting as a reminder

    function giveButtons() {
        for (var i = 0; i < catTypes.length; i++) { // creating a for loop that trucks thru the array catTypes
            var btn = document.createElement("button") // and generating a button
            var txt = document.createTextNode(catTypes[i]) // and then telling it to enter values from the array as text
            btn.setAttribute("class","CatButtons")
            btn.appendChild(txt) // appending text node to button as a child
            buttonEl.appendChild(btn) // appending the buttons to the button element
          }
    
          //next: create event listener loop for on click ( element.addEventListener("event") )
    
          var CatButtons = document.getElementsByClassName("CatButtons")
          
          for (var i = 0; i < CatButtons.length; i++) { 
            if (CatButtons[i].innerHTML === "sphynx"){ // .innerHTML is checking the text attribute inside the element
                CatButtons[i].addEventListener("click", function(){
                    alert("Sphynx!")
                }) 
                //using functions, when implementing arguments, rule of thumb is you add strings unless you're adding a vairable representing a string
            }else{
                CatButtons[i].addEventListener("click", function(){
                    console.log("Normal Cat!")   
            }
         )}
        }


// function buildQuiz(){
//      let output = [] //variable for HTML generation
    
//      quizQuestions.forEach((currentQuestion, qNumber) => {//foreach loop for questions object array. 
//          let answers = [] //array containing possible answers
//          for (letter in currentQuestion.answers){ // loop to add in button
//              answers.push( // push is adding these items to the answers array and slapping down a button per item.
//  				"<label>"
//  					+ '<input type="button" name="question'+i+'" value="'+letter+'">'
//  					+ letter + ": "
// 					+ currentQuestion[i].answers[letter]
// 				+ "</label>"
//            );
//         }
//      })
//  }

 function showResults(){}
 