const options = ['rock', 'paper', 'scissors']
const btn = document.querySelectorAll('.option-buttons');
const playerPoints = document.querySelector('.player-score');
const compPoints = document.querySelector('.comp-score');
const playerChoice = document.querySelector('.player-choice');
const compChoice = document.querySelector('.comp-choice');
const result = document.querySelector('.result');
const playAgain = document.querySelector('.play-again')
const muteBtn = document.querySelector('.mute')
const btnContainer = document.getElementsByClassName('.buttons-container')

let compScore = 0;
let playerScore = 0;

// document.getElementsByClassName('.player-choice').classList.add('.rock');
function audioPlay() {
    let audio = document.getElementById("audio");
    audio.play();
  }

btn.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(playerScore == 5 || compScore == 5){
            return
        }
        audioPlay()
        let playerSelection = btn.id
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection)
    })  
});

function getPlayerChoice(e){
    return this.id
}
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()* options.length);
    choice = options[randomNumber]
    return choice; 
}

function imageChoice(){
    
}

function playRound(playerSelection,computerSelection){
   
    playerChoice.textContent = `${playerSelection}`
    playerChoice.classList.add('.rock')
    compChoice.textContent = `${computerSelection}`
    console.log(playerSelection, computerSelection)

    result.textContent = `Player Choice : ${playerSelection} || ${computerSelection} : Computer Choice  `;

    if(playerSelection === computerSelection){
        result.textContent =  `You both chose ${playerSelection}. It's a draw`;
    
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'){
            result.textContent = `You chose ${playerSelection} and the Computer chose ${computerSelection} You Win!`;
            playerScore++
            }
    else {
        result.textContent =`You chose ${playerSelection} and the Computer chose ${computerSelection} You Lose!`;
        compScore++
        }
        declareWinner();
        trackScore();
}

function trackScore(){
    playerPoints.textContent = `${playerScore}`
    compPoints.textContent =`${compScore}`
}

function declareWinner(){
    if(playerScore >= 5 ){
        
        result.textContent =`The Final Score is Player:${playerScore} vs Computer:${compScore} You WIN!`;
    }else if (compScore >= 5) {
        
        result.textContent =`The Final Score is Player:${playerScore} vs Computer:${compScore} You Lose!`;
    }
}
function resetGame(){
    playerScore = 0;
    compScore = 0;
    playerPoints.textContent= '0';
    compPoints.textContent='0';
    playerChoice.textContent='';
    compChoice.textContent='';
    result.textContent='Choose Rock Paper or Scissors to start the game!';
}
playAgain.addEventListener('click', () => {
    resetGame();
}
);

