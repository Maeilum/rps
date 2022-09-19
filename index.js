function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

let Victor;
let score = 0;

function gameStart(playerChoice, computerChoice){
  if (playerChoice === computerChoice){
    alert(`No one wins!`);
    Victor = null;
  }
  else if (
    playerChoice !== 'rock' ||
    playerChoice !== 'paper' ||
    playerChoice !== 'scissors') {
      alert('Did you type the name of your weapon correctly?')
      Victor = null
    }
  else if (
    playerChoice === 'rock' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'scissors' ||
    playerChoice === 'scissors' && computerChoice === 'rock') {
      Victor = false;
      alert('You lose!')
  } else {
      Victor = true;
      alert('You Win!')
  } 
}
function game(){
  for (let i=0; i<5; i++) {
    let playerChoice = prompt('Pick A Weapon!').toLowerCase();
    let computerChoice = getComputerChoice();
    gameStart(playerChoice, computerChoice)

    if (Victor === true){
      ++score
      console.log(score)
    } else if (Victor === false){
      --score
      console.log(score)
    }

    console.log(playerChoice)
    console.log(computerChoice)
  }

 }
 


 game()