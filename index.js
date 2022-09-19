function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

const playerChoice = prompt('Pick A Weapon!').toLowerCase();
const computerChoice = getComputerChoice();
const score = 0;

 function gameStart(playerChoice, computerChoice){
  if (playerChoice === computerChoice){
    alert(`It's a tie!`);
  }
  else if (playerChoice === 'rock' && computerChoice === 'paper'){
    alert('You lose! Too bad :/')
  }
  else if (playerChoice === 'scissors' && computerChoice === 'rock'){
    alert('You lose! Too bad :/')
  }
  else if (playerChoice === 'paper' && computerChoice === 'scissors'){
    alert('You lose! Too bad :/')
  }
  else { 
    alert('You win! Nice job :)')
  }
 }
 
gameStart(playerChoice, computerChoice)
 