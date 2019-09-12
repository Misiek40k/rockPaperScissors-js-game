const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

let getMoveName = (moveName) => {
    if (moveName === ROCK) {
        return 'Rock';
    } else if (moveName === PAPER) {
        return 'Paper';
    } else if (moveName === SCISSORS) {
        return 'Scissors';
    } else {
        printMessage('Uknkown move !')
    }
}

let displayResult = (computerMove, playerMove) => {
    switch (true) {
        case computerMove === ROCK && playerMove === PAPER:
            printMessage(`Computer move is: ${getMoveName(computerMove)}<br>Your move is: ${getMoveName(playerMove)}<br>You Win !!`);
            break;
        case computerMove === ROCK && playerMove === SCISSORS:
            printMessage(`Computer move is: ${getMoveName(computerMove)}<br>Your move is: ${getMoveName(playerMove)}<br>You Lose !!`);
            break;
        case computerMove === PAPER && playerMove === ROCK:
            printMessage(`Computer move is: ${getMoveName(computerMove)}<br>Your move is: ${getMoveName(playerMove)}<br>You Lose !!`);
            break;
        case computerMove === PAPER && playerMove === SCISSORS:
            printMessage(`Computer move is: ${getMoveName(computerMove)}<br>Your move is: ${getMoveName(playerMove)}<br>You Win !!`);
            break;
        case computerMove === SCISSORS && playerMove === PAPER:
            printMessage(`Computer move is: ${getMoveName(computerMove)}<br>Your move is: ${getMoveName(playerMove)}<br>You Lose !!`);
            break;
        case computerMove === SCISSORS && playerMove === ROCK:
            printMessage(`Computer move is: ${getMoveName(computerMove)}<br>Your move is: ${getMoveName(playerMove)}<br>You Win !!`);
            break;
        case computerMove === playerMove:
            printMessage('Both moves are same! Draw !!');
            break;
        case playerMove !== computerMove:
            printMessage('Wrong move ! Try again!');
    }
}


const computerMove = Math.floor(Math.random() * 3 + 1);
const playerMove = parseInt(prompt('Chose your move! 1: rock, 2: paper, 3: scissors.'));

displayResult(computerMove, playerMove);

