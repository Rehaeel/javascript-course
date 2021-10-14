'use strict';

// Declarations
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Helper functions/declarations
const newGame = function () {
  !diceEl.classList.contains('hidden') ? diceEl.classList.add('hidden') : '';
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};

const nextPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollADice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else nextPlayer();
};

const holdPoints = function () {
  scores[activePlayer] += currentScore;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  nextPlayer();
};

// Rolling dice functionality
document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') rollADice();
});

btnRoll.addEventListener('click', rollADice);

// Hold functionality
document.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') holdPoints();
});
btnHold.addEventListener('click', holdPoints);

// NewGame
document.addEventListener('keydown', function (e) {
  if (e.code === 'Delete') newGame();
});
btnNew.addEventListener('click', function () {
  diceEl.focus();
  newGame();
});
