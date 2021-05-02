const min = 1;
const max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        guessInput.value = ''
        e.target.className -= 'play-again';
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function(){
    let guess = parseFloat(guessInput.value);

    if(guess % 1 != 0){
        setMessage('Please Enter an Integer Between ' + min + ' and ' + max, 'orange');
    }

    else{
        guess = parseInt(guess);
    
        if(guess < min || guess > max || isNaN(guess)){
            setMessage('Please Enter a Number Between ' + min + ' and ' + max, 'orange');
        }
        
        if(guess == winningNum){
            setMessage('Congratulations you have guessed the correct number!', 'blue');
            guessInput.disabled = true;
            guessBtn.value = 'Play Again';
            guessBtn.className += 'play-again';
        }
    
        else{
            guessesLeft -= 1;
            if(guessesLeft === 0){
                guessInput.disabled = true;
    
                setMessage('Unfortunately all chances have exhuasted! The correct number was ' + winningNum + ". Better luck next time.", 'red');
            
                guessBtn.value = 'Play Again';
                guessBtn.className += 'play-again';
            }
    
            else{
                guessInput.value  = '';
                setMessage('The number you had guessed is not the correct number. Please try again. You have ' + guessesLeft + ' more chances left.');
            }
        }
    }

});

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}