// STEP #1
// Your game is going to play against the computer, so begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game
// to make the computer’s play.

// 1. Define an array with game options.
// 2. Make a random choice of one of the array elements.

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]                     // Options
    return options[Math.floor((Math.random()*options.length))];     // Picks a random option
}


// STEP # 2
// Write a function that plays a single round of Rock Paper Scissors. The function should take two
// parameters - the playerSelection and computerSelection - and then return a string that declares the winner 
// of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// Capitalize inputs to avoid comparison errors.
// Compare computer vs human choices and declare a result

function playRound(playerSelection, computerSelection) {
    let humanChoiceInCaps = playerSelection.toUpperCase();                                      // Equalizes inputs
    let computerChoiceInCaps =computerSelection.toUpperCase();                                  // Equalizes inputs
    if (humanChoiceInCaps !== computerChoiceInCaps) {                                           // Compares choices
        if (humanChoiceInCaps === "PAPER" && computerChoiceInCaps === "ROCK") {
            return "You Win!"
        } else if (humanChoiceInCaps === "PAPER" && computerChoiceInCaps === "SCISSORS") {
            return "You Lose!"
        } else if (humanChoiceInCaps === "ROCK" && computerChoiceInCaps === "SCISSORS") {
            return "You Win!"
        } else if (humanChoiceInCaps === "ROCK" && computerChoiceInCaps === "PAPER") {
            return "You Lose!"
        } else if (humanChoiceInCaps === "SCISSORS" && computerChoiceInCaps === "PAPER") {
            return "You Win!"
        } else if (humanChoiceInCaps === "SCISSORS" && computerChoiceInCaps === "ROCK") {
            return "You Lose!"
        } 
    } else if (humanChoiceInCaps === computerChoiceInCaps) {
            return "It's a Tie!"
    }
}


// STEP #3
// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that 
// keeps score and reports a winner or loser at the end.
// Remember loops? This is a great opportunity to use one to play those five rounds:
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.


// It has to keep player score. Player score should be initialized in zero. 
// It has to add 1 point to the winner and 1 point to both players when its a tie.

function game() {  
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = String(prompt("Choose your weapon! Rock, Paper or Scissors?"))
        let computerSelection = getComputerChoice();
        let preliminaryResult = playRound(playerSelection, computerSelection)
        if (preliminaryResult === "You Win!") {
            humanScore+=1
            console.log(`Your score is ${humanScore}. Computer score is ${computerScore}. You Win this round!`)
        } else if (preliminaryResult === "You Lose!") {
            computerScore+=1
            console.log(`Your score is ${humanScore}. Computer score is ${computerScore}. You Lose this round!`)
        } else if (preliminaryResult === "It's a Tie!") {
            computerScore+=1
            humanScore+=1
            console.log(`Your score is ${humanScore}. Computer score is ${computerScore}, This round is a tie!`)
        }
    }

// Final Score
    if (humanScore > computerScore) {
        return "YOU WIN!"
    } else if (computerScore > humanScore) {
        return "YOU LOSE!"
    } else {
        return "TIE!"
    }
}

console.log(game())