// Stating values
let min = 1,
  max = 10,
  winningNum = 7,
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

// Listen for guess
guessBtn.addEventListener('click', () => {
  // Get user's value
  let guess = parseInt(guessInput.value);

  // Validate user's input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Kindly enter a number between ${min} and ${max}`);
  }
});

function setMessage(msg) {
  message.textContent = msg;
}