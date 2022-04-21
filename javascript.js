/*computer randomly chooses either rock, paper, or scissors*/
function computerPlay(){
const randomNumber = Math.floor(Math.random()*3)
let computerChoice = (randomNumber === 0)? 'ROCK':
    (randomNumber === 1)? 'PAPER':
    (randomNumber === 2)? 'SCISSORS':
    'Something is amiss';
return computerChoice;
}

/*function to uppercase text */
function changeToUpperCase(founder){
    return founder.toUpperCase();
}

/*function to play one round of rock, paper, scissosrs*/
function playRound(playerSelection, computerSelection) {
    /* playerSelection ROCK */
    return declaration = (playerSelection == 'ROCK' && computerSelection =='PAPER')?
        'You lose! Paper beats rock!':
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS')?
        'You win! Rock beats scissors!':
        (playerSelection == 'ROCK' && computerSelection == 'ROCK')?
        'Draw!':
        /*playerSelection PAPER */
        (playerSelection == 'PAPER' && computerSelection == 'PAPER')?
        'Draw!':
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')?
        'You win! Paper beats rock!':
        (playerSelection == 'PAPER' && computerSelection == 'SCISSORS')?
        'You lose! Scissors beat paper!':
        /*playerSelection SCISSORS*/
        (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')?
        'You lose! Rock beats scissors!':
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')?
        'You win! Scissors beat paper!':
        (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS')?
        'Draw!':'Check your spelling..';
}
/*function to play 5 round game */
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i<5; i++){
        const playerSelection = changeToUpperCase(window.prompt('Rock, Paper, or Scissors?'));
        const computerSelection = computerPlay();
        console.log('You chose',playerSelection, 'and the computer chose',computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        /**Point incrementation*/
        (declaration.startsWith('You win!'))? playerScore = playerScore +1 :
        (declaration.startsWith('You lose!'))? computerScore =  computerScore + 1 :
        'No point';
        console.log( 'Player:', playerScore, 'Computer:', computerScore);  
    };
    /**Winner message */
    let winnerMeassage = (playerScore > computerScore)?'The Player won!':
    (playerScore < computerScore)?'The Computer won!': "It's a Draw..";

    let finalScore = (`The final score is..\nPlayer: ${playerScore} Computer: ${computerScore}\n ${winnerMeassage}`);
    return finalScore;
}

console.log(game());










