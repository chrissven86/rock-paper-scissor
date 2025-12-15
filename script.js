function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (humanScore >= 5 || computerScore >= 5) return;

    let roundMessage = `You chose ${playerSelection}, computer chose ${computerSelection}. `;

    if (playerSelection === computerSelection) {
        roundMessage += "It's a tie!";
        gameRound++; 
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        humanScore++;
        gameRound++;
        roundMessage += `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        gameRound++;
        roundMessage += `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    resultsDiv.textContent = roundMessage;
    scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

    if (gameRound === 5 && humanScore > computerScore) {
        resultsDiv.textContent = "YOU WIN THE GAME!";
    } else if (gameRound === 5 && computerScore > humanScore) {
        resultsDiv.textContent = "COMPUTER WINS THE GAME!";
    }
}

const buttons = document.querySelectorAll("button[data-choice]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.getAttribute("data-choice");
        playRound(choice);
    });
});


/*
function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round ++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice, round);
    }
    
    console.log(`\n === Final Result ===`);
    if (humanScore > computerScore) {
        console.log(`You win! Final score - Human: ${humanScore}, Computer: ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lose! Final score - Human: ${humanScore}, Computer: ${computerScore}`)
    } else {
        console.log(`It's a tie! Final score - Human: ${humanScore}, Computer: ${computerScore}`)
    }

}

Start the game!
PlayGame();*/