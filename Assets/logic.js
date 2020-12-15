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
  giveQOne()
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
var questionTitle = document.querySelector("#question-title") // h2 to populate with question itself?
let questionOptions = document.querySelector("#choices") // button styling already written

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

function giveButtons(give) {
    for (var i = 0; i < give.length; i++) {
       var btn = document.createElement("button");
       var txt = document.createTextNode(give[i]);
       btn.appendChild(txt);
       btn.id = give[i];
       questionOptions.appendChild(btn);
    }
}

function incorrect() {
    alert("wrong!")
}

function correct() {
    alert("right!")
}

function giveQOne(){
    questionTitle.textContent = "string"
    let questionOne = ["A", "B", "C", "D"] //placeholders, actual qs to be written later
    giveButtons(questionOne) // spawning buttons in
    let q1c1 = document.querySelector (questionOne[0]) // telling to delegate to buttons from array
    let q1c2 = document.querySelector (questionOne[1])
    let q1c3 = document.querySelector (questionOne[2])
    let q1c4 = document.querySelector (questionOne[3])
    q1c1.addEventListener("click", incorrect)
    q1c2.addEventListener("click", incorrect)
    q1c3.addEventListener("click", correct)
    q1c4.addEventListener("click", incorrect)
    }


    //next: create event listener loop for on click ( element.addEventListener("event") )   

//     function assignButtons(){ // looping eventListener? is it less repetition this way even if it's long?
//     for (var i = 0; i < give.length; i++) { 
//         giveButtons[i] = document.getElementById(give[i])
//     if (give[i].innerHTML === "correct answer??"){ // change from innerhtml youre looking for something else, need to remeber
//         CatButtons[i].addEventListener("click", function(){
//             //add point
//             //go to next question
//         }) 
//         //using functions, when implementing arguments, rule of thumb is you add strings unless you're adding a vairable representing a string
//     }else{
//         CatButtons[i].addEventListener("click", function(){
//             //subtract time
//             //go to next question
//       }
//     )}
// }

// function showResults(){}