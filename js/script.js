const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const computerMove = Math.floor(Math.random() * 3 + 1);
const playerMove = parseInt(prompt('Chose your move! 1: rock, 2: paper, 3: scissors.'));

switch (true) {
    case computerMove === ROCK && playerMove === PAPER:
        printMessage(`Computer move is: Rock<br>Your move is: Paper<br>You Win !!`);
        break;
    case computerMove === ROCK && playerMove === SCISSORS:
        printMessage(`Computer move is: Rock<br>Your move is: Scissors<br>You Lose !!`);
        break;
    case computerMove === PAPER && playerMove === ROCK:
        printMessage(`Computer move is: Paper<br>Your move is: Rock<br>You Lose !!`);
        break;
    case computerMove === PAPER && playerMove === SCISSORS:
        printMessage(`Computer move is: Paper<br>Your move is: Scissors<br>You Win !!`);
        break;
    case computerMove === SCISSORS && playerMove === PAPER:
        printMessage(`Computer move is: Scissors<br>Your move is: Paper<br>You Lose !!`);
        break;
    case computerMove === SCISSORS && playerMove === ROCK:
        printMessage(`Computer move is: Scissors<br>Your move is: Rock<br>You Win !!`);
        break;
    case computerMove === playerMove:
        printMessage('Both moves are same! Draw !!');
        break;
    case playerMove !== computerMove:
        printMessage('Wrong move ! Try again!');
}