let randomNumber = Math.floor(Math.random() * 100) + 1;
const maxChances = 7;
let chancesLeft = maxChances;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const chancesLeftSpan = document.getElementById('chancesLeft');
const restartBtn = document.getElementById('restartBtn');

submitBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

restartBtn.addEventListener('click', resetGame);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    chancesLeft--;
    chancesLeftSpan.textContent = chancesLeft;

    if (userGuess === randomNumber) {
        message.textContent = 'Correct! You guessed the number!';
        endGame();
    } else if (chancesLeft === 0) {
        message.textContent = 'Game Over! The number was ' + randomNumber;
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low!';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high!';
    }

    guessInput.value = '';
    guessInput.focus();
}

function endGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.style.display = 'inline';
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    chancesLeft = maxChances;
    chancesLeftSpan.textContent = chancesLeft;
    message.textContent = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
    guessInput.value = '';
    restartBtn.style.display = 'none';
    guessInput.focus();
}
