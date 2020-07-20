var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;



//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;




document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1.random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. update the round score if the rolled number was not a 1
    if(dice !== 1){
        roundScore += dice;
        documnet.querySelector('current-' + activePlayer).textContent = roundScore;

    }else{
        nextPlayer();

    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
   //add current score to global score
    scores[activePlayer] += roundScore;
    //update the ui
    document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game
    scores[activePlayer] >= 20 ? document.querySelector('#name='+ activePlayer).textContent = 'Winner' : nextPlayer();
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}