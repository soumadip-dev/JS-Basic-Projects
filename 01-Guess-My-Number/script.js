'use strict';
// Function to generate a random number
function randomNumberGenerator(start, end) {
  return Math.trunc(Math.random() * end) + start;
}

// Initialize game variables
let secretNumber = randomNumberGenerator(1, 20);
let score = 20;
let highScore = 0;

// Function to display a message on the page
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Add event listener to the 'check' button
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // Check for no input
  if (!guess) {
    displayMessage('🚫 No Number!');
  }
  // Check if the user wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Check if the user's guess is incorrect
  else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Add event listener to the 'again' button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = randomNumberGenerator(1, 20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
