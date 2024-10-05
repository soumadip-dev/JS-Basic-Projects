document.addEventListener('DOMContentLoaded', function () {
  ////////////// DOM Elements
  const message = document.querySelector('.message');
  const number = document.querySelector('.number');
  const guessInput = document.querySelector('.guess');
  const scoreElement = document.querySelector('.score');
  const highScoreElement = document.querySelector('.highscore');
  const body = document.querySelector('body');
  const btnCheck = document.querySelector('.check');
  const btnAgain = document.querySelector('.again');

  ////////////// Game initialization
  const randomNumberGenerator = function (start, end) {
    return Math.trunc(Math.random() * end) + start;
  };

  let secretNumber = randomNumberGenerator(1, 20);
  let score = 20;
  let highScore = 0;

  ////////////// Display message function
  const displayMessage = function (msg) {
    message.textContent = msg;
  };

  ////////////// Check button functionality
  btnCheck.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    // No input
    if (!guess) {
      displayMessage('🚫 No Number!');
    }
    // Correct guess
    else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      body.style.backgroundColor = '#60b347';
      number.style.width = '30rem';
      number.textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
      }
    }
    // Incorrect guess
    else {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        scoreElement.textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        scoreElement.textContent = 0;
      }
    }
  });

  ////////////// Again button functionality
  btnAgain.addEventListener('click', function () {
    body.style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    score = 20;
    scoreElement.textContent = score;
    secretNumber = randomNumberGenerator(1, 20);
    number.textContent = '?';
    number.style.width = '15rem';
    guessInput.value = '';
  });
});
