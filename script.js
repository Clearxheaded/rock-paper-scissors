function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    }
    else if (choice < 0.67) {
        return "paper";
    }
    return "scissors";
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, resultsDiv) {
    const computerSelection = getComputerChoice();
    let resultMessage = '';
    if ((playerSelection === 'rock' && computerSelection === 'scissors') 
        || (playerSelection === 'paper' && computerSelection === 'rock') 
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore++;
            resultMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } 
    else if (playerSelection === computerSelection) {
        resultMessage = `It's a tie! Play again.`;
    } 
    else {
        computerScore++;
        resultMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }

    if (playerScore === 5) {
        resultMessage = "You win! Congratulations!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        resultMessage = "Computer wins! Try again.";
        playerScore = 0;
        computerScore = 0;
    }
    else {
        resultMessage += `
    Score:
    Player: ${playerScore} Computer: ${computerScore}`;
    }
    resultsDiv.textContent = resultMessage;
}


document.addEventListener("DOMContentLoaded", () => {
    const rockButton = document.querySelector("#rock-btn");
    const paperButton = document.querySelector("#paper-btn");
    const scissorsButton = document.querySelector("#scissors-btn");
    const resultsDiv = document.querySelector("#results");

    rockButton.addEventListener("click", () => {
        playRound("rock", resultsDiv);
    });

    paperButton.addEventListener("click", () => {
        playRound("paper", resultsDiv);
    });

    scissorsButton.addEventListener("click", () => {
        playRound("scissors", resultsDiv);
    });
});




