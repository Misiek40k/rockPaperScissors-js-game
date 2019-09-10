let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Chose your move! 1: rock, 2: paper, 3: scissors.');
let playerMove;
let gameResult;
let computerMove;


if (randomNumber == 1) {
    computerMove = 'rock';
} else if (randomNumber == 2) {
    computerMove = 'paper';
} else {
    computerMove = 'scissors';
}

if (playerInput == '1') {
    playerMove = 'rock';
} else if (playerInput == '2') {
    playerMove = 'paper';
} else if (playerInput == '3') {
    playerMove = 'scissors';
} else {
    playerMove = 'unknown move';
}

printMessage('Your move is: ' + playerMove);
printMessage('Computer move is: ' + computerMove);

if (computerMove == 'rock' && playerMove == 'paper') {
    printMessage('You Win !!');
} else if (computerMove == 'rock' && playerMove == 'scissors') {
    printMessage('You Lose !!');
} else if (computerMove == 'rock' && playerMove == 'rock') {
    printMessage('Draw !!');
} else if (computerMove == 'paper' && playerMove == 'rock') {
    printMessage('You Lose !!');
} else if (computerMove == 'paper' && playerMove == 'scissors') {
    printMessage('You Win !!');
} else if (computerMove == 'paper' && playerMove == 'paper') {
    printMessage('Draw !!');
} else if (computerMove == 'scissors' && playerMove == 'paper') {
    printMessage('You Lose !!');
} else if (computerMove == 'scissors' && playerMove == 'rock') {
    printMessage('You Win !!');
} else if (computerMove == 'scissors' && playerMove == 'scissors') {
    printMessage('Draw !!');
} else {
    printMessage('Wrong move ! Try again!');
}



