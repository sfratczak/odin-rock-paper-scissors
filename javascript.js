const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const scores = document.querySelector(".scores");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const matchResult = document.querySelector(".match-result");

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
  const winString = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
  const loseString = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}. Better luck next time!`;
  const tieString = `It's a tie! ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}!`;
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
    updateScoreManager();
    return winString;
  } else {
    //All remaining options trigger a lose condition
    computerPoints++;
    updateScoreManager();
    return loseString;
  }
}

function updateScoreManager() {
  playerScore.textContent = `Player: ${playerPoints}`;
  computerScore.textContent = `Computer: ${computerPoints}`;

  checkForWinner();
}

function checkForWinner() {
  if (playerPoints === 5) {
    matchResult.textContent = "Congratulations! You win!";
    matchResult.classList.toggle("win-text");

    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else if (computerPoints === 5) {
    matchResult.textContent = "Oh no! You lose.";
    matchResult.classList.toggle("lose-text");

    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}
