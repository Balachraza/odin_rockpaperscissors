let playerScore = 0;
let compScore = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');


function getComputerChoice(){
 // Generate a random number between 0 and 2
 let randomNumber = Math.floor(Math.random() * 3);
  
 // Map the random number to a choice and return it
 switch (randomNumber) {
   case 0:
     return "rock";
   case 1:
     return "paper";
   case 2:
     return "scissors";
 }
    
}
function updateScore(playerScore, computerScore){
  playerScoreSpan.innerText = `Player Score: ${playerScore}`;
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
}

rockButton.addEventListener('click', ()=>{
  let computerSelection = getComputerChoice();
  let playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updateScore(playerScore, compScore);
  checkforWinner(playerScore,compScore);
});
paperButton.addEventListener('click', ()=>{
  let computerSelection = getComputerChoice();
  let playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updateScore(playerScore, compScore);
  checkforWinner(playerScore,compScore);
});
scissorsButton.addEventListener('click', ()=>{
  let computerSelection = getComputerChoice();
  let playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updateScore(playerScore, compScore);
  checkforWinner(playerScore,compScore);
});

function checkforWinner(playerScore,computerScore){
  const h2 = document.createElement('h2');
  if(playerScore === 5){
    
    h2.classList.add('player-won');
    h2.innerText = `You won ${playerScore} to ${computerScore} great job beating the computer`;
    
  }
  
  if (computerScore === 5){
    
    h2.classList.add('computer-won');
    h2.innerText = `You lost ${playerScore} to ${computerScore} The Computer beat you :( `;
    
  }
  outcomeDiv.append(h2)
}

function playRound(playerSelection, computerSelection) {
  const p = document.createElement('p');
    // Convert both selections to lowercase
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    
    p.innerText = "Its a Tie";
    
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "paper" && computerSelection === "rock" ||
             playerSelection === "scissors" && computerSelection === "paper") {
    
    p.innerText = "Player Won";
    playerScore++;
    
  } else {
    
    p.innerText = "Computer Won";
    compScore++;
    
    
  }
  outcomeDiv.appendChild(p)
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
    
//       let playerSelection = prompt("Rock, paper, or scissors?");
//       let computerSelection = getComputerChoice();
//       let result = playRound(playerSelection, computerSelection);
      
//       console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
      
//       if (result === "player") {
//         playerScore++;
//         console.log("You win this round!");
//       } else if (result === "computer") {
//         computerScore++;
//         console.log("You lose this round!");
//       } else {
//         console.log("It's a tie!");
//       }
    
    
//     console.log(`\nFinal Score: Player ${playerScore} - ${computerScore} Computer`);
  
//     if (playerScore > computerScore) {
//       console.log("You win the game!");
//     } else if (playerScore < computerScore) {
//       console.log("You lose the game!");
//     } else {
//       console.log("The game is a tie!");
//     }
//   }

 
