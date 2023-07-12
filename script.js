images = {
  rock : "images/icon-rock.svg",
  paper : "images/icon-paper.svg",
  scissors : "images/icon-scissors.svg"
}

let userMove, computerMove;

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
  let result = "";
  result = findWinner(userMove, computerMove);
  displayResult(result);
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
  housePick.src = images[computerMove];
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

function displayResult(result) {
  let winOrLose = document.querySelector('.win-or-lose');
  winOrLose.innerText = `You ${result}`;  
}