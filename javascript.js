/*computer randomly chooses either rock, paper, or scissors*/
function computerPlay(){
    const randomNumber = Math.floor(Math.random()*3)
    computerChoice = (randomNumber === 0)? 'ROCK':
        (randomNumber === 1)? 'PAPER':
        (randomNumber === 2)? 'SCISSORS':
        'Something is amiss';
    return computerChoice;
}

/*function to play one round of rock, paper, scissosrs*/
let computerSelection;
let declaration;
function playRound(playerSelection) {
    /* playerSelection ROCK */
    computerSelection = computerPlay();
    declaration = (playerSelection == 'ROCK' && computerSelection =='PAPER')?
        'You lose! Paper beats Rock!':
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS')?
        'You win! Rock beats Scissors!':
        (playerSelection == 'ROCK' && computerSelection == 'ROCK')?
        'Draw!':
        /*playerSelection PAPER */
        (playerSelection == 'PAPER' && computerSelection == 'PAPER')?
        'Draw!':
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')?
        'You win! Paper beats Rock!':
        (playerSelection == 'PAPER' && computerSelection == 'SCISSORS')?
        'You lose! Scissors beat Paper!':
        /*playerSelection SCISSORS*/
        (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')?
        'You lose! Rock beats Scissors!':
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')?
        'You win! Scissors beat Paper!':
        (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS')?
        'Draw!':'Check your spelling..';
}

/**point incrementation*/
let pointSystem = () =>{
    (declaration.startsWith('You win!'))? playerScore = playerScore +1 :
    (declaration.startsWith('You lose!'))? computerScore =  computerScore + 1 :
    'No point';
}
 /*creates reset button to play another game*/
let reset = () => {
    const resetBtn = document.createElement('button');
    scoreBoard.appendChild(resetBtn);
    resetBtn.textContent= 'Reset';
    resetBtn.addEventListener('click', () => {
        document.location.reload();
    })
}

/*disables button once score is reached*/
let endGame = ()=> {
    let buttons = document.querySelectorAll('button'); 
    buttons.forEach((button) => {
        button.disabled = true;
    })
    reset();
}
/*plays a 5 round game of rock, paper, scissors */
playerScore = 0;
computerScore = 0;
const container = document.querySelector('scoreBoard');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gameRound = playRound(button.id);

        /*text to display each of the players choices*/
        const gameText = `You chose ${button.id} and the Computer chose ${computerSelection}`
        document.getElementById('scoreMessage').textContent = gameText;  

        /*text to declare winner of the round*/ 
        document.getElementById('roundText').textContent = declaration;
        
        /*point increment and text to update score*/
        pointSystem();
        document.getElementById('score').textContent = `Player: ${playerScore}
                Computer: ${computerScore}`;
                
        /*Displays message declaring winner of first to 5*/
        document.getElementById('winner').textContent= (playerScore == 5)? 'The Player has won!':
        (computerScore == 5)? 'The Computer has won!':'';

        if (playerScore == 5 || computerScore == 5) {
            endGame();
        }
    });
});












