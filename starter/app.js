/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Global Variables

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

// Anonomys function (function with no name and only used once.)
// Event listener for the button to roll the dice, with a function embeded for
// a random dice roll.
document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
		// 1. Random Number for roll of the dice
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
	
		// 2. Display the Result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
	
		// 3. Update the round score only IF the rolled number is NOT a 1
		if (dice1 !== 1 && dice2 !== 1) {
			// Add to round score
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			// Next players turn
			nextPlayer();
		}
	}
});
// 
document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// Add the current score to the active players global score
		scores[activePlayer] += roundScore;
	
		// Update the interface 
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		
		// Allow user input to change winning score for game
		var input = document.querySelector('.final-score').value;
		var winningScore;
		// Undefined values are coerced to FALSE
		// Otherwise coerced to TRUE
		if(input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}
		
		// Check if player won the game
		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
	} else {
	// Next Player
	nextPlayer();
	}
}
});

// Global toggle active player function
function nextPlayer() {
	// Next player
		// If active player = 0, then(?) = 1 else(:) active player = 0.
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		
		// When active player changes reset current round score to 0.
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		
		// Toggle active player
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		// Remove player from active element and add player to active element.
		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');
		
		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	
	// Use query to select CSS elements and change properties.
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	// Set values to 0 for each player score and current round score.
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

// Function to allow user to input a new name to be displayed instead of...
// Player 1 and Player 2.

function changeText() {
  var userInput = document.getElementById("userInput").value;
  document.getElementById("name-0").innerHTML = userInput;
}

function changeText2() {
  var userInput2 = document.getElementById("userInput2").value;
  document.getElementById("name-1").innerHTML = userInput2;
}



/*
// Call back function 
function btn() {
	
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn); */

// Use document.querySelector to select elements from html and JS change properties
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// Use query to get and store content
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

