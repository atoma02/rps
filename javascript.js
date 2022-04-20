/*computer randomly chooses either rock, paper, or scissors*/
function computerPlay(){
const randomNumber = Math.floor(Math.random()*3)
let computerChoice = (randomNumber === 0)? 'Rock':
    (randomNumber === 1)? 'Paper':
    (randomNumber === 2)? 'Scissors':
    'Something is amiss';
return computerChoice;
}
console.log(computerPlay())
