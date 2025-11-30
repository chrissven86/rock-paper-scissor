//Computer input

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const choice = choices[randomIndex];
    return choice;
}

//User input

function getHumanChoice() {
    let input = prompt("What will you chose - Rock, Paper or Scissors?");
    input = input.toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);
    if ((input === "Rock") || 
        (input === "Paper") || 
        (input === "Scissors")) {
        return input;
    }
    else {
        console.log(`You picked the wrong thing! Pick between Rock, Paper or Scissors`);
    }
}

//Set score variables

let humanScore = 0
let computerScore = 0

//Initiate the playround function for the first round

function playRound(humanChoice, computerChoice, round) {
    console.log(`\n--- Round ${round} ---`);
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log (`It's a tie! You both chose ${humanChoice}`);
        return;
    }

    if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
            humanScore ++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
            computerScore ++;
            console.log (`You lose! ${computerChoice} beats ${humanChoice}!`);
    }

    console.log(`The score is - Human: ${humanScore}, Computer: ${computerScore}`);
}

//Initiate the game-play with a total of 5 rounds

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

//Start the game!
playGame();