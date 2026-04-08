const X_CLASS = 'X';
const O_CLASS = 'O';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.getElementById('restartButton');
const winnerMessage = document.getElementById('winnerMessage');
const startButton = document.getElementById('startButton');
const startGameContainer = document.getElementById('startGameContainer');
const backgroundMusic = document.getElementById('backgroundMusic');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');
const clickSound = document.getElementById('clickSound');
const drawSound = document.getElementById('drawSound');
const muteButton = document.getElementById('muteButton');

let xTurn = true;
let gameOver = false;
let isMuted = false;

startButton.addEventListener('click', () => {
    startGame();
    startGameContainer.classList.add('hidden');
    board.classList.remove('hidden');
    backgroundMusic.play();
});

restartButton.addEventListener('click', () => {
    startGame();
    winnerMessage.classList.add('hidden');
    restartButton.classList.add('hidden');
    board.classList.remove('hidden');
});

muteButton.addEventListener('click', () => {
    sdk.showBanner();
    if (isMuted) {
        backgroundMusic.play();
        muteButton.innerText = 'Mute Music';
    } else {
        backgroundMusic.pause();
        muteButton.innerText = 'Unmute Music';
    }
    isMuted = !isMuted;
});

function startGame() {
    sdk.showBanner();
    xTurn = true;
    gameOver = false;
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.classList.remove('winAnimation');
        cell.addEventListener('click', handleClick, { once: true });
    });
}

function handleClick(e) {
    const cell = e.target;
    if (!gameOver && xTurn) {
        playSound(clickSound);
        placeMark(cell, X_CLASS);
        if (checkWin(X_CLASS)) {
            endGame(false, "You Won!", 'win');
        } else if (isDraw()) {
            endGame(true);
        } else {
            xTurn = false;
            setTimeout(computerMove, 500);
        }
    }
}

function computerMove() {
    const bestMove = minimax(cells, O_CLASS).index;
    const cell = cells[bestMove];
    placeMark(cell, O_CLASS);
    playSound(clickSound);

    if (checkWin(O_CLASS)) {
        endGame(false, "You Lose!", 'lose');
    } else if (isDraw()) {
        endGame(true);
    } else {
        xTurn = true;
    }
}

function minimax(newBoard, player) {
    let availSpots = [...cells].filter(cell => !cell.classList.contains(X_CLASS) && !cell.classList.contains(O_CLASS));

    if (checkWin(X_CLASS)) {
        return { score: -10 };
    } else if (checkWin(O_CLASS)) {
        return { score: 10 };
    } else if (availSpots.length === 0) {
        return { score: 0 };
    }

    const moves = [];
    for (let i = 0; i < availSpots.length; i++) {
        const move = {};
        move.index = [...cells].indexOf(availSpots[i]);

        availSpots[i].classList.add(player);
        if (player === O_CLASS) {
            const result = minimax(cells, X_CLASS);
            move.score = result.score;
        } else {
            const result = minimax(cells, O_CLASS);
            move.score = result.score;
        }

        availSpots[i].classList.remove(player);
        moves.push(move);
    }

    let bestMove;
    if (player === O_CLASS) {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
    cell.innerText = currentClass === X_CLASS ? 'X' : 'O';
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function endGame(draw, message, result) {
    sdk.showBanner();
    gameOver = true;
    winnerMessage.innerText = draw ? 'Draw!' : message;
    winnerMessage.classList.remove('hidden');
    restartButton.classList.remove('hidden');
    board.classList.add('hidden');

    if (result === 'win') {
        playSound(winSound);
        highlightWinningCells(X_CLASS);
    } else if (result === 'lose') {
        playSound(loseSound);
        highlightWinningCells(O_CLASS);
    }
}
        
function highlightWinningCells(winnerClass) {
    WINNING_COMBINATIONS.forEach(combination => {
        if (combination.every(index => cells[index].classList.contains(winnerClass))) {
            combination.forEach(index => {
                cells[index].classList.add('winAnimation');
            });
        }
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
    });
}

function playSound(sound) {
    sound.play();
}
