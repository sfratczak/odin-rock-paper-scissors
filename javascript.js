const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

let playerPoints = 0;
let computerPoints = 0;

playerScore.textContent = `Player: ${playerPoints}`;
computerScore.textContent = `Computer: ${computerPoints}`;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    results.textContent = playRound(button.className, getComputerChoice());
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[getRandomInt(0, options.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function playRound(playerSelection, computerSelection) {
  const winString = `You Win! ${playerSelection} beats ${computerSelection}.`;
  const loseString = `You Lose! ${computerSelection} beats ${playerSelection}. Better luck next time!`;
  const tieString = `It's a tie! ${playerSelection} vs ${computerSelection}!`;
  const invalidString = "Round invalid.";

  if (playerSelection === undefined) {
    //playerSelection was invalid. Return invalidString.
    return invalidString;
  } else if (playerSelection === computerSelection) {
    //Tie condition
    return tieString;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    //Win conditions
    playerPoints++;
    playerScore.textContent = `Player: ${playerPoints}`;
    return winString;
  } else {
    //All remaining options trigger a lose condition
    computerPoints++;
    computerScore.textContent = `Computer: ${computerPoints}`;
    return loseString;
  }
}
