'use strict;'

var counter = 0, // counter to keep track of number of player moves
	playerMoves = [], // contains player's moves
	computerMoves = [], // contains player's moves
	winnerArray = ['012', '345', '678', '036', '147', '258', '048', '246']; // all winning combinations


var board = document.getElementsByClassName('board')[0],
	square = document.getElementsByClassName('square'),
	playingArea = document.querySelectorAll('.square div'),
	resultDiv = document.getElementById('resultDiv'),
	playAgain = document.getElementById('playAgain');


// reload window to if 'Play Again' button is pressed
playAgain.addEventListener('click', function(){
	window.location.reload();
});


// game() funcction is called on every click inside the square
for (var i = 0; i < square.length; i++) {
	
	square[i].addEventListener('click', function(event){
		
		var result = game(event);
		
		// display result only if somebody wins of if it's a tie.
		if(result == "You won!" || result == "Computer won." || result == "It's a tie!" ) {
			window.setTimeout(function(){ // setTimeout delay for visual experience
				resultText.innerHTML = result; 
				resultDiv.style.display = "block";
				board.style.display = "none";
			}, 800);
		}
	
	});

}


/*\
|*| 
|*| main logic of the game
|*| 
|*|	I know it's not the best and it's fucked up. 
|*| But it works and this is the best I know now :)
|*|	
|*|	check more comments inside the function.
|*|
\*/


function game(event) {

	var playingArea = event.target.querySelector('.square div');
	var playerId = playingArea.getAttribute('id');
	
	if (playerMoves.indexOf(playerId) == -1 && computerMoves.indexOf(playerId) == -1) {
		
		// player's move
		playingArea.setAttribute('class', 'cross');
		playerMoves.push(playerId);
		
		counter++;

		// evaluate playerMoves array if entries are more than 3
		if (playerMoves.length > 2) {
			var status = evaluateWinner(playerMoves);
			if (status == "winner") {
				return "You won!"; 
			}
		}

		// if player has played 5 moves and there is no result - it's a tie!
		if (counter == 5) {
			return "It's a tie!";
		}

		// computer is allowed to move only if player has less than 5 moves
		if (counter < 5) {
			
			// computer's move via nextMove() function
			var computerId = nextMove();
			
			// keep calling nextMove() unless it generates a unique number
			// that is - if it's not already present in any of the arrays
			while (playerMoves.indexOf(computerId) !== -1 || computerMoves.indexOf(computerId) !== -1) {
				computerId = nextMove();
			}
		
			var nextSquare = square[computerId];
			var nextPlayingArea = nextSquare.querySelector('.square div');
			window.setTimeout(function(){
				nextPlayingArea.setAttribute('class', 'circle');
			}, 300);
			computerMoves.push(computerId);
		
		}

		// evaluate computerMoves array if entries are more than 3
		if (computerMoves.length > 2) {
			var status = evaluateWinner(computerMoves);
			if (status == "winner") {
				return "Computer won."; 
			}
		}

	}

	return "game in progress";	

}


// calculates computer's move - random number b/w 0 and 8
var nextMove = function() {
	
	var computerMove;
	
	// random number b/w min and max Math.floor(Math.random()*(max-min+1)+min);
	var computerId = Math.floor( Math.random() * 9);

	computerMove = computerId.toString();
	
	return computerMove;

}


// takes an input array and checks if it is the winner
function evaluateWinner(input) {

 	var result = "loser";
	
	// goes through every element of winnerArray one by one 
	// and checks if the input array contains all the numbers required to win
	for (var i = 0; i < winnerArray.length; i++) {
        
        var matches = 0;
		
		for (var j = 0; j < winnerArray[i].length; j++) {
          console.log(input.indexOf(winnerArray[i][j]));
			if(input.indexOf(winnerArray[i][j]) > -1) {
				matches++;
			}
		}

		// matches will become 3 iff all 3 characters match
        if (matches == 3) {
		  result = "winner";
	    }
	}
  
  	return result;

}