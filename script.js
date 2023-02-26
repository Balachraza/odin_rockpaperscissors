
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




function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "paper" && computerSelection === "rock" ||
             playerSelection === "scissors" && computerSelection === "paper") {
    return "player";
  } else {
    return "computer";
  }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Rock, paper, or scissors?");
      let computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
      
      console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
      
      if (result === "player") {
        playerScore++;
        console.log("You win this round!");
      } else if (result === "computer") {
        computerScore++;
        console.log("You lose this round!");
      } else {
        console.log("It's a tie!");
      }
    }
    
    console.log(`\nFinal Score: Player ${playerScore} - ${computerScore} Computer`);
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
  
  game();