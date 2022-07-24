compScore = 0
playerScore = 0
const options = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()* options.length);
    return options[randomNumber]
}
function getPlayerChoice(){
    let choice = prompt('Choose Rock, Paper or Scissors', 'Rock, Paper, Scissors').toLowerCase();
    let check = validateChoice(choice);
    console.log(choice)
    if (check){
        return choice;
        }
        console.log('Incorrect Input, Please Choose Rock, Paper, or Scissors')
        getPlayerChoice();
    }

function validateChoice(choice){
    return options.includes(choice);
}

function playRound(playerSelection, computerSelection){
    console.log('Player Choice : ',playerSelection,'| Computer Choice : ', computerSelection)
    if(playerSelection === computerSelection){
        console.log( `You both chose ${playerSelection}. It's a draw`);
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' || 
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`You chose ${playerSelection} and the Computer chose ${computerSelection} You Win!`)
        playerScore ++;}
    else {
        console.log(`You chose ${playerSelection} and the Computer chose ${computerSelection} You Lose!`)
    compScore ++;}

}

function trackScore(){
    console.log(`The Score is,
    Player : ${playerScore} 
    Computer: ${compScore}`);
}

function declareWinner(){
    if(playerScore > compScore){
        console.log(`The Final Score is Player:${playerScore} vs Computer:${compScore} You WIN!`)
    }else if (playerScore < compScore) {
        console.log(`The Final Score is Player:${playerScore} vs Computer:${compScore} You Lose!`)
    }else console.log(`The Final Score is Player:${playerScore} vs Computer:${compScore} It's a Draw Game`)
}
function game(){
    for(let i = 0; i < 5; i++){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    trackScore();}
    declareWinner();
}
game();