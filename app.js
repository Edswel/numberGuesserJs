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
    setMessage(`Kindly enter a number between ${min} and ${max}`, 'red');
  }

  // Check for winning number
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;
    // Style input
    guessInput.style.borderColor = 'green';
    // Winning message
    setMessage(`${winningNum} is correct. You WIN!`, 'green');
  } else {
    // User input is wrong
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over
      // Disable input
      guessInput.disabled = true;
      // Style input
      guessInput.style.borderColor = 'red';
      // Winning message
      setMessage(`${winningNum} is the winning number. You LOSE!!!`, 'red');
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

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}