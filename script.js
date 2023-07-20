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
const userAndHouse = document.querySelector('.user-house');
const userChoice = document.querySelector('.user-choice');
const houseChoice = document.querySelector('.house-choice');
const userPickedBtn = document.querySelector('.user-picked-btn');
const housePickedBtn = document.querySelector('.house-picked-btn');
const userBtnImg = document.querySelector('.user-btn-img');
const houseBtnImg = document.querySelector('.house-btn-img');
const resultContainer = document.querySelector('.result-container');
const winnerYou = document.querySelector('.winner-you');
const winnerHouse = document.querySelector('.winner-house');
const showRules = document.querySelector('.show-rules');


document.querySelector('.input-paper-button')
  .addEventListener('click', ()=>{
  userInput('paper');
});

document.querySelector('.input-scissors-button')
  .addEventListener('click', ()=>{
  userInput('scissors');
});

document.querySelector('.input-rock-button')
  .addEventListener('click', ()=>{
  userInput('rock');
});

function userInput(x) {
  userMove = x;
  computerMove = computerInput();
  while (userMove == computerMove) {
    computerMove = computerInput();
  }
  updateMoves(userMove, computerMove);
}

function computerInput() {
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
  userBtnImg.src = images[userMove];
  userPickedBtn.classList.add(`input-${userMove}-button`);
  userChoice.classList.add(`${userMove}`);
  step1.classList.add('none');
  step2.classList.remove('none');
  setTimeout(()=>{
    housePickedBtn.classList.remove('null-house');
    housePickedBtn.classList.add('btn-style');
    housePickedBtn.classList.add(`input-${computerMove}-button`);
    houseChoice.classList.add(`${computerMove}`);
    houseBtnImg.classList.remove('none');
    houseBtnImg.src = images[computerMove];
    findWinner(userMove, computerMove);
  }, 500);
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
    <button class='play-again-button' onclick="playAgain()" >PLAY AGAIN</button>`;
    updateScore(result);  

    if (result === "WIN") {
      winnerYou.classList.remove('none');
    } else {
      winnerHouse.classList.remove('none'); 
    }
  }, 700);
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
  houseBtnImg.classList.add('none');
  housePickedBtn.classList.remove('btn-style');
  housePickedBtn.classList.add('null-house');
  housePickedBtn.classList.remove('house-picked-button');
  housePickedBtn.classList.remove(`input-${computerMove}-button`);
  userPickedBtn.classList.remove(`input-${userMove}-button`);
  houseChoice.classList.remove(`${computerMove}`);
  userChoice.classList.remove(`${userMove}`);
  winnerYou.classList.add('none');
  winnerHouse.classList.add('none');
}

function displayRules() {
  showRules.classList.remove('none');
  showRules.innerHTML = `
  <div class="bg-white">
  <div class="rules-container">
  <div class="rules-header">RULES </div>
  <img class="rules-img" src="images/image-rules.svg" alt="">
  <span class="close-icon"><img class = "icon-close" src="images/icons8-wrong.svg" alt = "close-icon"></span>
  </div></div>`;

  const closeIcon = document.querySelector('.close-icon');

  closeIcon.addEventListener('click', ()=> {
    showRules.classList.add('none');
  })
}
