let moves = 0;
let timer = 120;
let level = 1;
let gameActive = false;
let timerInterval;
let isPaused = false; // New pause flag
const gridSize = 4;
const tileCount = gridSize * gridSize;

const puzzleGrid = document.getElementById("puzzle-grid");
const movesDisplay = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const levelDisplay = document.getElementById("level");
const gameOverElement = document.getElementById("game-over");
const gameOverMessage = document.getElementById("game-over-message");
const startButton = document.getElementById("start");
const retryButton = document.getElementById("retry");
const backgroundMusic = document.getElementById("background-music");
const clickSound = document.getElementById("click-sound");
const gameOverSound = document.getElementById("game-over-sound");
const muteToggle = document.getElementById("mute-toggle");
const pauseResumeButton = document.getElementById("pause-resume"); // Pause/Resume Button

function startGame() {
    sdk.showBanner();
    moves = 0;
    timer = 120;
    gameActive = true;
    isPaused = false; // Reset pause status
    gameOverElement.classList.add("hidden");
    startButton.classList.add("hidden");
    retryButton.classList.add("hidden");
    movesDisplay.textContent = "Moves: 0";
    timerDisplay.textContent = "Time: 120s";
    levelDisplay.textContent = `Level: ${level}`;
    backgroundMusic.play();
    pauseResumeButton.textContent = "Pause"; // Reset button to Pause
    timerInterval = setInterval(updateTimer, 1000);
    createTiles();
}

function updateTimer() {
    if (!isPaused && timer > 0) {
        timer--;
        timerDisplay.textContent = `Time: ${timer}s`;
    } else if (timer === 0) {
        endGame(false);
    }
}

function endGame(isWin) {
    clearInterval(timerInterval);
    gameActive = false;
    if (isWin) {
        gameOverMessage.textContent = "You Win!";
    } else {
        gameOverMessage.textContent = "You Lose!";
        gameOverSound.play();
    }
    gameOverElement.classList.remove("hidden");
    retryButton.classList.remove("hidden");
    sdk.showBanner();
}

function createTiles() {
    puzzleGrid.innerHTML = "";
    const numbers = [...Array(tileCount - 1).keys()].map(n => n + 1);
    numbers.push(null); // Add empty space at the end
    shuffleArray(numbers);
    
    numbers.forEach((num, index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        if (num !== null) {
            tile.textContent = num;
            tile.addEventListener("click", () => handleMove(tile));
        } else {
            tile.classList.add("empty");
        }
        puzzleGrid.appendChild(tile);
    });
}

function handleMove(tile) {
    if (!gameActive || isPaused) return; // Stop moves when paused or inactive
    const emptyTile = document.querySelector(".tile.empty");
    const emptyIndex = Array.from(puzzleGrid.children).indexOf(emptyTile);
    const tileIndex = Array.from(puzzleGrid.children).indexOf(tile);

    const validMove = [emptyIndex - 1, emptyIndex + 1, emptyIndex - gridSize, emptyIndex + gridSize].includes(tileIndex);

    if (validMove) {
        puzzleGrid.insertBefore(tile, emptyTile);
        puzzleGrid.insertBefore(emptyTile, puzzleGrid.children[tileIndex]);
        moves++;
        movesDisplay.textContent = `Moves: ${moves}`;
        clickSound.play();
        if (checkWinCondition()) {
            endGame(true);
        }
    }
}

function checkWinCondition() {
    const tiles = document.querySelectorAll('.tile');
    for (let i = 0; i < tiles.length - 1; i++) {
        const tileValue = parseInt(tiles[i].textContent);
        if (tileValue !== i + 1) {
            return false;
        }
    }
    return tiles[tiles.length - 1].classList.contains('empty');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Pause and Resume functionality
pauseResumeButton.addEventListener("click", () => {
    if (gameActive) {
        if (isPaused) {
            isPaused = false;
            pauseResumeButton.textContent = "Pause";
            backgroundMusic.play();
        } else {
            isPaused = true;
            pauseResumeButton.textContent = "Resume";
            backgroundMusic.pause();
            sdk.showBanner();
        }
    }
});

startButton.addEventListener("click", startGame);
retryButton.addEventListener("click", startGame);

muteToggle.addEventListener("click", () => {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteToggle.textContent = "🔈";
    } else {
        backgroundMusic.muted = true;
        muteToggle.textContent = "🔇";
        sdk.showBanner();
    }
});
