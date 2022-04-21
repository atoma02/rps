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
        'Tie! Fight to the death!':
        /*playerSelection PAPER */
        (playerSelection == 'PAPER' && computerSelection == 'PAPER')?
        'Tie! Fight to the death!':
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
        'Tie! Fight to the death!':'Something is terribly wrong!';
    }

const playerSelection = changeToUpperCase('PaPer');
const computerSelection = computerPlay();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
