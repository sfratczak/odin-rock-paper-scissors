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
    read the selection and assign it to a variable
    make the selection's format match computerSelection format

    getComputerChoice and assign it to a variable
    
    compare playerselection with computerselection and choose a winner

    display a lose/win message to the player
    */
}
