rps_score = JSON.parse(localStorage.getItem('rps_score')) || 0;

const score = document.querySelector('.score');
score.innerText = rps_score;

images = {
  rock : "images/icon-rock.svg",
  paper : "images/icon-paper.svg",
  scissors : "images/icon-scissors.svg"
}

let userMove, computerMove, result;
const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');
const userAndComputerpick = document.querySelector('.user-and-computer-pick');
const winOrLose = document.querySelector('.win-or-lose');
const youPickedButton = document.querySelector('.you-picked-button');
const housePickedButton = document.querySelector('.house-picked-button');
const youPick = document.querySelector('.you-pick');
const housePick = document.querySelector('.house-pick');
const resultContainer = document.querySelector('.result-container');

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
  youPick.src = images[userMove];
  youPickedButton.classList.add(`input-${userMove}-button`);
  step1.classList.add('none');
  step2.classList.remove('none');
  setTimeout(()=>{
    housePickedButton.classList.remove('null-house');
    housePickedButton.classList.add(`input-${computerMove}-button`);
    housePick.classList.remove('none');
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
    resultContainer.classList.remove('none');
    winOrLose.innerHTML = `<p class="youWinLose">YOU ${result}</p>
    <button class='play-again-button' onclick="playAgain()" >Play Again</button>`;
    updateScore(result);  

    document.querySelector('.play-again')
      .addEventListener('click', ()=>{
        step2.classList.add('none');
        step1.classList.remove('none');
      });
  },2000);
}

function updateScore(result) {
  if (result === "WIN") {
    rps_score += 1;
  } else {
    rps_score -= 1;
  }
  if (rps_score < 0) {
    rps_score = 0;
  }
  score.innerText = rps_score;
  localStorage.setItem('rps_score',JSON.stringify(rps_score));
} 

function playAgain() {
  step2.classList.add('none');
  resultContainer.classList.add('none');
  step1.classList.remove('none');
  housePick.classList.add('none');
  housePickedButton.classList.add('null-house');
  housePickedButton.classList.remove(`input-${computerMove}-button`);
  youPickedButton.classList.remove(`input-${userMove}-button`);
}