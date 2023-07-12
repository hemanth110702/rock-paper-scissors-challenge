document.querySelector('.input-paper-button')
  .addEventListener('click', ()=>{
  userChoice('paper');
});

document.querySelector('.input-scissors-button')
  .addEventListener('click', ()=>{
  userChoice('scissors');
});

document.querySelector('.input-rock-button')
  .addEventListener('click', ()=>{
  userChoice('rock');
});

let userMove;
let computerMove;

function userChoice(x) {
  userMove = x;
  computerMove = computerChoice();
  while (userMove == computerMove) {
    computerMove = computerChoice();
  }
  findWinner(userMove, computerMove);
}

function computerChoice() {
  let rand = Math.random();
  if (rand <= 1/3) {
    return "rock";
  } else if (rand <= 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
} 

function findWinner(userMove, computerMove) {
 if (userMove === "paper" && computerMove === "rock") {
    return "WIN";
  } else if (userMove === "rock" && computerMove === "scissors") {
    return "WIN";
  } else if (userMove === "scissors" && computerMove === "paper") {
    return  "WIN";
  } else {
    return "LOSE";  
  }
}