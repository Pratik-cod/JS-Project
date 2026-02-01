let choices = document.querySelectorAll(".choice");
let you = document.querySelector(".you")
let computer = document.querySelector(".come")
let result = document.querySelector(".result")

choices.forEach((choice) => {

 //console.log(choice);

choice.addEventListener("click", ()=> {
   //console.log("hello");
   result.classList.remove("win")
   result.classList.remove("draw")
   result.classList.remove("loss")

   you.textContent = "👊"
   computer.textContent = "👊"
   result.textContent = ""
  Startshake()

setTimeout(() => {
    Stopshake()
     let userChoice = choice.getAttribute("id")
 //console.log(userChoice);
 
 let options = ['rock','paper','scissor']
  
 let computerIndex = Math.floor(Math.random() * 3)

  let computerChoice = options[computerIndex]
 // console.log(computerChoice);
 playgame(userChoice,computerChoice)
},5000)
  
})
})
 const playgame = (userChoice,computerChoice) => {
  //User Choice
    if(userChoice === 'rock'){
        you.textContent = "👊"
    }
    else if(userChoice === 'paper'){
        you.textContent = "✋"
    }
    else if(userChoice === 'scissor'){
        you.textContent = "✌️"
    }
    //Computer Choice
    if(computerChoice === 'rock'){
        computer.textContent = "👊"
    }
    else if(computerChoice === 'paper'){
        computer.textContent = "✋"
    }
    else if(computerChoice === 'scissor'){
        computer.textContent = "✌️"
    }
    console.log("user" + userChoice);
    console.log("computer" + computerChoice);
    
      if(userChoice === computerChoice){
        console.log("draw"); 
        result.textContent = "Draw"
       result.classList.add("draw")
      }

      else if(userChoice === 'rock' && computerChoice === 'scissor'||
        userChoice === 'paper' && computerChoice === 'rock'||
        userChoice === 'scissor' && computerChoice === 'paper'){
        result.textContent = "You Win"
        result.classList.add("win")
        }

      else{
        console.log("you loss");
        result.textContent = "You loss" 
        result.classList.add("loss")
      }

    }
    const Startshake = () => {
        you.style = ' animation: shake 3s linear  3 ;'
        computer.style = ' animation: shake 3s linear  3 ;'
        
    }
    const Stopshake = () => {
        you.style = ' animation: none;'
        computer.style = ' animation: none ;'
        
    }