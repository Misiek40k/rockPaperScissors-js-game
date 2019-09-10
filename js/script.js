let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log(`random number is: ${randomNumber}`);

let computerMove = 'unknown move';

if (randomNumber == 1) {
    computerMove = 'rock';
} else if (randomNumber == 2) {
    computerMove = 'paper';
} else {
    computerMove = 'scissors';
}

printMessage('Computer move is: ' + computerMove);
