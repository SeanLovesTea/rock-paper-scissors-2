compScore = 0
playerScore = 0

let options = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    
    let randomNumber = Math.floor(Math.random()* options.length);
    return options[randomNumber]
}
function getPlayerChoice(){
    let choice = prompt('Choose Rock, Paper or Scissors', 'Rock, Paper, Scissors').toLowerCase();
    let check = validateChoice(choice);
    console.log(choice)
    if(choice == null){
        getPlayerChoice();
    }
    else if(check == false){
        console.log( 'Please choose Rock Paper or Scissors'); 
        getPlayerChoice();
        return;
   
    }else return choice
}

function validateChoice(choice){
    return options.includes(choice);
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection)
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
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    trackScore();}
    declareWinner();
}
game();