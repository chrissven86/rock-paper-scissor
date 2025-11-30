/* Step 1 - build a new function named getComputerChoice. Write the code so that
the getComputerChoice will randomly return one of the following string values:
"Rock", "Paper", Scissors.*/

//Computer input

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const choice = choices[randomIndex];
    console.log(`Computer chose ${choice}`);
    return choice;
}


/* Step 2 - create a new function named getHumanChoice. Write the code so that
getHumanChoice will return one of the valid choices depending on what the user
inputs*/

//User input

function getHumanChoice() {
    let input = prompt("What will you chose - Rock, Paper or Scissors?");
    input = input.toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);
    if ((input === "Rock") || 
        (input === "Paper") || 
        (input === "Scissors")) {
        console.log(`You chose ${input}`);
        return input;
    }
    else {
        console.log(`You picked the wrong thing!`);
    }
}

/* Step 3 - the game will keep track of the players score. Rrite variables 
to keep track of the players score. Variable names humanScore and computerScore */

//Set score variables

let humanScore = 0
let computerScore = 0

/* Step 4 - write a function that takes the human and computer choices as arguments,
play a single round and declare the winner. Increment the winners score by 1. Function
playRound, */

//Initiate the playround

function playRound(humanChoice, computerChoice) {
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
            console.log (`You lose! ${humanChoice} beats ${computerChoice}!`);
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
