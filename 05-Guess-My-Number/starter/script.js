'use strict';

// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = 'currect Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 18;

// console.log(document.querySelector('.guess').value);

// Event listrner

let secretNumber = Math.trunc(Math.random() * 20) + 1; // to generate both positiv and negative numbers
let score = 20;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreMessage = function (message) {
  document.querySelector('.score').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number recieved';
    displayMessage('no number recieved');
  }
  // if (score < 0 || score === 0) {
  //   document.querySelector('.message').textContent =
  //     'Hmm You tried, kindly restart your game';
  //   document.querySelector('.score').textContent = 'Game terminado......';
  // }
  else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.message').textContent = 'you got it write';
    displayMessage('you got it write');
    document.querySelector('.number').textContent = secretNumber;

    let highSCore = 0;
    while (score > highSCore) {
      highSCore = score;
    }

    document.querySelector('.highscore').textContent = highSCore;
  } //else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'Your guess was too low';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = 'Your guess was too high';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }
  else if (guess !== secretNumber) {
    // document.querySelector('.message').textContent =
    //   guess < secretNumber
    //     ? `Your guess was too low`
    //     : `your guess was too high`;

    displayMessage(
      guess < secretNumber ? `your guess was too low` : `Your guess is too high`
    );
    score--;
    // document.querySelector('.score').textContent = score;
    scoreMessage(score);
  }

  //   while (guess !== secretNumber) {
  //     score--;
  //   }
  //   document.querySelector('.score').textContent = score;

  if (score < 0 || score === 0) {
    // document.querySelector('.message').textContent = 'You lost the game';
    displayMessage('You lost the game');
    // document.querySelector('.score').textContent = 'Game terminado......';
    scoreMessage('game teminado....')
  }

  // let highSCore = 0;
  // while (score > highSCore) {
  //   highSCore = score;
  // }

  // document.querySelector('.highscore').textContent = highSCore;
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.score').textContent = '20';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'You lost the game';
  // document.querySelector('.message').textContent = 'You lost the game';
  displayMessage('You lost the game');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.score').textContent = score;
  scoreMessage(score)
});

// let highSCore = 0;
// while (score > highSCore) {
//   highSCore = score;
// }

// document.querySelector('.highscore').textContent = highSCore;
