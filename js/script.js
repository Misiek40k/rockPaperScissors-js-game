const ROCK = 1,
    PAPER = 2,
    SCISSORS = 3;

const btnRock = document.getElementById('btnRock'),
    btnPaper = document.getElementById('btnPaper'),
    btnScissors = document.getElementById('btnScissors'),
    results = document.getElementById('results');

let computerResult = 0,
    playerResult = 0;

const playGame = (playerMove) => {
    const getMoveName = (moveName) => {
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

    const displayResult = (computerMove, playerMove) => {
        let player = getMoveName(playerMove),
            computer = getMoveName(computerMove);

        switch (true) {
            case computerMove === ROCK && playerMove === PAPER:
                playerResult += 1;
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Win !!`);
                break;
            case computerMove === ROCK && playerMove === SCISSORS:
                computerResult += 1;
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Lose !!`);
                break;
            case computerMove === PAPER && playerMove === ROCK:
                computerResult += 1;
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Lose !!`);
                break;
            case computerMove === PAPER && playerMove === SCISSORS:
                playerResult += 1;
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Win !!`);
                break;
            case computerMove === SCISSORS && playerMove === PAPER:
                computerResult += 1;
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Lose !!`);
                break;
            case computerMove === SCISSORS && playerMove === ROCK:
                playerResult += 1;
                printMessage(`Computer move is: ${computer}<br>Your move is: ${player}<br>You Win !!`);
                break;
            case computerMove === playerMove:
                printMessage('Both moves are same! Draw !!');
                break;
            default:
                printMessage('Try again!');
        }

        results.innerHTML = `Computer: ${computerResult} - Player: ${playerResult}`;
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



