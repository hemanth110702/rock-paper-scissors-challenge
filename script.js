images = {
  rock : "images/icon-rock.svg",
  paper : "images/icon-paper.svg",
  scissors : "images/icon-scissors.svg"
}

let userMove, computerMove, result;
const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');

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



function userChoice(x) {
  userMove = x;
  computerMove = computerChoice();
  while (userMove == computerMove) {
    computerMove = computerChoice();
  }
  updateMoves(userMove, computerMove);
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

function updateMoves(userMove, computerMove) {
  const userPick = document.querySelector('.user-pick');
  const housePick = document.querySelector('.house-pick');
  userPick.src = images[userMove];
  step1.classList.add('none');
  setTimeout(()=>{
    housePick.src = images[computerMove];
    findWinner(userMove, computerMove);
  },2000);
}

function findWinner(userMove, computerMove) {
 if (userMove === "paper" && computerMove === "rock") {
    displayResult("WIN");
  } else if (userMove === "rock" && computerMove === "scissors") {
    displayResult("WIN");
  } else if (userMove === "scissors" && computerMove === "paper") {
    displayResult("WIN");
  } else {
    displayResult("LOSE");  
  }
}

function displayResult(result) {
  setTimeout(()=>{
    let winOrLose = document.querySelector('.win-or-lose');
    winOrLose.innerText = `You ${result}`;  
  },2000);
}