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
const winOrLose = document.querySelector('.win-or-lose');
const youPick = document.querySelector('.you-pick');
const housePick = document.querySelector('.house-pick');

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
  document.querySelector('.you-picked-button')
    .classList.add(`input-${userMove}-button`);
  step1.classList.add('none');
  step2.classList.remove('none');
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
    winOrLose.innerHTML = `You ${result}
    <button class='play-again'>Play Again</button>`;
    updateScore(result);  
    document.querySelector('.play-again')
      .addEventListener('click', ()=>{
        step2.classList.add('none');
        step1.classList.remove('none');
        resetStep2();
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

function resetStep2() {
  winOrLose.innerText = "";
  housePick.src = "";
}