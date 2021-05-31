'use strict';

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number';
        displayMessage('⛔ No Number');

        //When the player wins
    } else if (number === guess) {
        document.querySelector('.message').textContent = '👏 Correct Number!';
        document.querySelector('.number').textContent = number;

        //Changing CSS using JS
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //High Score logic
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //When the guess is wrong
    } else if (guess !== number) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > number ? 'Too High!' : 'Too Low!';
            displayMessage(guess > number ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💔 You Lost!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.guess').value = '';

    //Resetting the score
    score = 20;
    document.querySelector('.score').textContent = score;

    //Resetting the number
    number = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';

    //Resetting the message
    document.querySelector('.message').textContent = 'Start guessing...';

    //Resetting CSS
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})