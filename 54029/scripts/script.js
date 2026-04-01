const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Initializing game variables
let presentWord, rightChars, wrongTryCount;
const maxTriesCount = 6;

const resetGame = () => {
    // Ressetting game variables and UI elements
    rightChars = [];
    wrongTryCount = 0;
    hangmanImage.src = "images/error-0.png";
    guessesText.innerText = `${wrongTryCount} / ${maxTriesCount}`;
    wordDisplay.innerHTML = presentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}


const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter is exist on the presentWord
    if(presentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...presentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                rightChars.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If clicked letter doesn't exist then update the wrongTryCount and hangman image
        wrongTryCount++;
        hangmanImage.src = `images/error-${wrongTryCount}.png`;
    }
    button.disabled = true; // Disabling the clicked button so user can't click again
    guessesText.innerText = `${wrongTryCount} / ${maxTriesCount}`;

    // Calling gameOver function if any of these condition meets
    if(wrongTryCount === maxTriesCount) return gameOver(false);
    if(rightChars.length === presentWord.length) return gameOver(true);
}



const gameOver = (isVictorius) => {
    // After game complete.. showing modal with relevant details
    const modalText = isVictorius ? `You found the word:` : 'The right word was:';
    gameModal.querySelector("img").src = `images/${isVictorius ? 'victory' : 'lost'}.png`;
    gameModal.querySelector("h4").innerText = isVictorius ? 'Congratulations!' : 'Game is over for you!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${presentWord}</b>`;
    gameModal.classList.add("show");

    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
	sdk.showBanner();
    }

}

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}


const getOneRandomWord = () => {
    // Selecting a random word and hint from the wordList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    presentWord = word; // Making presentWord as random word
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

getOneRandomWord();
playAgainBtn.addEventListener("click", getOneRandomWord);