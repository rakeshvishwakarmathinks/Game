/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0;

init();

// using query selector to change css
//document.querySelector('.dice').style.display = 'none';

//for ID's 
//document.getElementById('score-0').textContent = '0';
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';

//document.querySelector('.btn-roll').addEventListener('click', button);            // here 'button' function is a 'call back' function as it is called by another funtion and not by us
// what if we do not want an external function to be called by the event listener
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // 1. Random number
    var dice = Math.floor(Math.random()*6) + 1 ;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was not 1
    if(dice !== 1){
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;        
    } else {
        //Next player
        nextPlayer();

    }


     /*   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;          //ternary operator
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
         */
    }
    
});                             //here the 'function()' is an anonymous function as it does not have any name and also it can be used only for this event i.e. it cannot be used outside of this context   


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if (gamePlaying){
        //Add current score to global score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] ;
    
        //Check if player won the game
        if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!' ;
        document.querySelector('.dice').style.display = 'None';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        // document.querySelector('player-' + activePlayer + '-panel').classList.toggle('winner');
        gamePlaying = false;        
    } else {
        nextPlayer();
    }
    
    };
    
});





function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;          //ternary operator
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // using query selector to change css
    document.querySelector('.dice').style.display = 'none';

    //for ID's 
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1' ;
    document.getElementById('name-1').textContent = 'Player 2' ; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


};

// dice = Math.floor(Math.random()*6) + 1 ;     // Generates a random number between 1 and 6

// document.querySelector('#current-' + activePlayer).textContent = dice;                // setter as we are setting a value          // Query selector lets you select the elemets exactly as we do in css
//document.querySelector('#current-' + activePlayer).innerHTML =  '<em>' + dice + '</em>' ;

//var x = document.querySelector('#score-0').textContent;                     //getter as we are getting a value













