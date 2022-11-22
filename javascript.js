function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[getRandomInt(0, options.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function playRound(playerSelection, computerSelection) {
  /*
    ask the player to make a selection
    read the selection and verify if it's valid
    if valid, assign it to a variable
    make the selection's format match computerSelection format

    getComputerChoice and assign it to a variable
    
    compare playerselection with computerselection and choose a winner

    display a lose/win message to the player
    */

  const winString = `You Win! ${playerSelection} beats ${computerSelection}.`;
  const loseString = `You Lose! ${computerSelection} beats ${playerSelection}. Better luck next time!`;
  const tieString = `It's a tie! ${playerSelection} vs ${computerSelection}!`;

  if (playerSelection === computerSelection) {
    return tieString;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return winString;
  } else {
    return loseString;
  }
}

function getPlayerChoice() {
  const validOptions = ["rock", "paper", "scissors"];

  const playerInput = prompt(
    "Choose one: Rock, Paper, or Scissors."
  ).toLowerCase();

  //TODO: Bug
  // if user provides an invalid input in first function call and then
  // provides a valid one in the second function call (recursion), the function
  // still returns the invalid one.
  if (!validOptions.includes(playerInput)) {
    console.warn(`Invalid option: "${playerInput}". Try again.`);
    getPlayerChoice();
  }

  //Return playerInput formatted as: Rock / Paper / Scissors
  return playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
}
