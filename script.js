// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     function playRound(playerSelection, getComputerChoice()) {
//         if ((playerSelection === 'rock' && getComputerChoice() === 'scissors') 
//         || (playerSelection === 'paper' && getComputerChoice() === 'rock') 
//         || (playerSelection === 'scissors' && getComputerChoice() === 'paper')) {
//             humanScore++;
//             return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${getComputerChoice().charAt(0).toUpperCase() + getComputerChoice().slice(1)}`;
//         }
//         else if (playerSelection === getComputerChoice()) {
//             return `It's a tie! Play again.`;
//         }
//         computerScore++;
//         return `You lose! ${getComputerChoice().charAt(0).toUpperCase() + getComputerChoice().slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
//     }
//     for (let counter = 0; counter < 5; counter++) {
//         const humanSelection = getplayerSelection();
//         const computerSelection = getgetComputerChoice()();
//         console.log(playRound(humanSelection, computerSelection));
//     }

//     if (humanScore > computerScore) {
//         console.log(`User's score: ${humanScore}, Computer's score: ${computerScore}. User wins!`);
//     }
//     else if (humanScore === computerScore) {
//         console.log(`It's a tie!`);
//     }
//     else {
//         console.log(`User's score: ${humanScore}, Computer's score: ${computerScore}. Computer wins!`)
//     }
// }

// playGame();

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

function playRound(playerSelection, resultsDiv) {
    const computerSelection = getComputerChoice();
    let resultMessage = '';
    if ((playerSelection === 'rock' && computerSelection === 'scissors') 
        || (playerSelection === 'paper' && computerSelection === 'rock') 
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            resultMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } 
    else if (playerSelection === computerSelection) {
        resultMessage = `It's a tie! Play again.`;
    } 
    else {
        resultMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
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




