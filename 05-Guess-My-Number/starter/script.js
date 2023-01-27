'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (0 >= guess || guess > 20) {
        document.querySelector('.message').textContent = 'Invalid number!';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if (score > Number(document.querySelector('.highscore').textContent)) {
            document.querySelector('.highscore').textContent = score;
        }
    }
    else {
        if (score <= 1) {
            document.querySelector('.message').textContent = 'You lost!';
            score = 0;
            document.querySelector('.score').textContent = score;
        }
        else {
            guess > secretNumber ? document.querySelector('.message').textContent = 'Too high!' : document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.ceil(Math.random() * 20);
    score = 20;

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});