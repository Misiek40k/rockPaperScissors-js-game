const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');

let playGame = (playerMove) => {
    let getMoveName = (moveName) => {
        if (moveName === ROCK) {
            return 'Rock';
        } else if (moveName === PAPER) {
            return 'Paper';
        } else if (moveName === SCISSORS) {
            return 'Scissors';
        } else {
            printMessage('Uknkown player move !')
        }
    }

    let displayResult = (computerMove, playerMove) => {
        let player = getMoveName(playerMove);
        let computer = getMoveName(computerMove);
        switch (true) {
            case computerMove === ROCK && playerMove === PAPER:
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Win !!`);
                break;
            case computerMove === ROCK && playerMove === SCISSORS:
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Lose !!`);
                break;
            case computerMove === PAPER && playerMove === ROCK:
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Lose !!`);
                break;
            case computerMove === PAPER && playerMove === SCISSORS:
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Win !!`);
                break;
            case computerMove === SCISSORS && playerMove === PAPER:
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Lose !!`);
                break;
            case computerMove === SCISSORS && playerMove === ROCK:
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Win !!`);
                break;
            case computerMove === playerMove:
                printMessage('Both moves are same! Draw !!');
                break;
            default:
                printMessage('Try again!');
        }
    }

    const computerMove = Math.floor(Math.random() * 3 + 1);

    displayResult(computerMove, playerMove);
}

btnRock.addEventListener('click', () => {
    clearMessages();
    playGame(ROCK);
});

btnPaper.addEventListener('click', () => {
    clearMessages();
    playGame(PAPER);
});

btnScissors.addEventListener('click', () => {
    clearMessages();
    playGame(SCISSORS);
});



