const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");

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
    return winString;
  } else {
    //All remaining options trigger a lose condition
    return loseString;
  }
}

function getPlayerChoice() {
  const validOptions = ["rock", "paper", "scissors"];

  //Prompt the player to choose one of three options
  const playerInput = prompt(
    "Choose one: Rock, Paper, or Scissors."
  ).toLowerCase();

  //Verify input against valid options and show error if necessary
  if (!validOptions.includes(playerInput)) {
    console.error(`Invalid option: "${playerInput}". Try again.`);
    return;
  } else {
    //Return valid playerInput formatted as: Rock / Paper / Scissors
    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
  }
}
