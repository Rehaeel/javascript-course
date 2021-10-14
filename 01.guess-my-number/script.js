'use strict';
//declarations
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
displayScore(score);

//assistant functions
const displayMessage = function (message) {
  document.querySelection('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//event listeners
/////////AGAIN
document.querySelector('.again').addEventListener('click', function () {
  displayScore(20);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
});

/////////CHECK
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  //no input
  if (!guess) {
    displayMessage('No Number!');

    //winning the game
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }

    //too high number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game looser');
      displayScore(0);
    }
  }
});
