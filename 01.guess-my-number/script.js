'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

const displayMessage = function (str) {
  document.querySelector('.message').textContent = str;
};

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
});

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
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game looser');
      document.querySelector('.score').textContent = 0;
    }

    //too low number
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
