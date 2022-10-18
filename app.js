// Stating values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign Ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again functionality
game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', () => {
  // Get user's value
  let guess = parseInt(guessInput.value);

  // Validate user's input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Kindly enter a number between ${min} and ${max}`, 'red');
    return;
  }

  // Check for winning number
  if (guess === winningNum) {
    // Win case
    gameOver(true, `${winningNum} is correct. You WIN!`);
  } else {
    // User input is wrong
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over
      gameOver(false, `${winningNum} is the winning number. You LOSE!!!`);
    } else {
      // Style input
      guessInput.style.borderColor = 'red';
      // Clear input field
      guessInput.value = '';
      // Set message for wrong input
      setMessage(`${guess} is incorrect, you have ${guessesLeft} attempt(s) left`, 'red');
    }
  }
});

// Set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Game over function
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Style input
  guessInput.style.borderColor = color;
  // Style message
  message.style.color = color;
  // Winning message
  setMessage(msg);

  // Play again
  guessBtn.value = 'Play again?';
  guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}