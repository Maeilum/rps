function getComputerChoice () {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function gameStart (playerSelection, computerSelection){

    if (playerSelection === "rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats rock!");
      } 
      else if (playerSelection === "rock" && computerSelection === "Scissors") {
        console.log("You Win! Rock beats scissors!");
      } 
      else if
      (playerSelection === "rock" && computerSelection ==="Rock"){
        console.log("It's a tie! Nobody wins.")
      }
    }

const playerSelection = "rock";
const computerSelection = getComputerChoice();

gameStart(playerSelection, computerSelection);