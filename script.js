const buttons = document.querySelectorAll("#button");
const restartButton = document.querySelector("#restart-button");
const resultSign = document.querySelector("#results");

let playerScore = 0;
let computerScore = 0;
let result = "Make your choice!";
resultSign.textContent = result;

function disableButtons(value) {
	buttons.forEach(button => {
        if (value == true) {
			button.disabled = true;
		} else if (value == false) {
			button.disabled = false;
		}
    })
}

function getComputerChoice() {
	const options = ["ROCK", "PAPER", "SCISSORS"];
	return options[Math.floor((Math.random()*options.length))];
}

function playRound(playerSelection) {
	let computerSelection =getComputerChoice();
	if (playerSelection === computerSelection) {
		result =
			`This round is a tie! Both players chosed ${playerSelection}. 
			 You: ${playerScore}. Computer ${computerScore}`;
	} else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
			   (playerSelection === "PAPER" && computerSelection === "ROCK") || 
			   (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
		playerScore+=1;
		result = 
			`You Win this round! ${playerSelection} beats ${computerSelection}. 
			 You: ${playerScore}. Computer ${computerScore}`;
		if (playerScore === 5){
			disableButtons(true);
			result = 
				`You Win this round and the match! ${playerSelection} beats ${computerSelection}. 
				 Final Score: You: ${playerScore}. Computer ${computerScore}`;
		}
	} else {
		computerScore+=1;
		result =
			`You Lose this round! ${computerSelection} beats ${playerSelection}. 
			 You: ${playerScore}. Computer ${computerScore}`;
		if (computerScore === 5){
			disableButtons(true);
			result = 
				`GAME OVER. You Lose this round and the match! ${computerSelection} beats ${playerSelection}. 
				 Final Score: You: ${playerScore}. Computer ${computerScore}`;
		}
	}
	resultSign.textContent = result;
}

function restart() {
	playerScore = 0;
	computerScore = 0;
	result = "Make your choice!";
	resultSign.textContent = result;
	disableButtons(false);
}

buttons.forEach(button => {
	button.addEventListener("click", function(){
		playRound(button.value)
	})
});

restartButton.addEventListener("click", () => {
	restart();
  });