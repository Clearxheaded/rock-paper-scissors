let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return "rock";
    }
    else if (choice <= 0.67) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice (rock, paper, scissors): ");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') 
    || (humanChoice === 'paper' && computerChoice === 'rock') 
    || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    }
    else if (humanChoice === computerChoice) {
        return `It's a tie! Play again.`;
    }
    computerScore++;
    return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
