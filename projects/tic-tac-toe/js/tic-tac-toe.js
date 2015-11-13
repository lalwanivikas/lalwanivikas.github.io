'use strict;'

var counter = 0,
	playerMoves = [],
	computerMoves = [],
	winnerArray = ['012', '345', '678', '036', '147', '258', '048', '246'];


var board = document.getElementsByClassName('board')[0],
	square = document.getElementsByClassName('square'),
	playingArea = document.querySelectorAll('.square div'),
	resultDiv = document.getElementById('resultDiv'),
	playAgain = document.getElementById('playAgain');

playAgain.addEventListener('click', function(){
	window.location.reload();
});


for (var i = 0; i < square.length; i++) {
	square[i].addEventListener('click', function(event){
		var result = game(event);
		console.log(result);
		if(result == "You won!" || result == "Computer won." || result == "It's a tie!" ) {
			window.setTimeout(function(){
				resultText.innerHTML = result; 
				resultDiv.style.display = "block";
				board.style.display = "none";
			}, 800);
		}
	});
}


function game(event) {

	var playingArea = event.target.querySelector('.square div');
	var playerId = playingArea.getAttribute('id');
	
	if (playerMoves.indexOf(playerId) == -1 && computerMoves.indexOf(playerId) == -1) {
		
		// player moves
		playingArea.setAttribute('class', 'cross');
		playerMoves.push(playerId);
		
		counter++;

		if (playerMoves.length > 2) {
			var status = evaluateWinner(playerMoves);
			if (status == "winner") {
				return "You won!"; 
			}
		}

		if (counter == 5) {
			return "It's a tie!";
		}

		if (counter < 5) {
			// computer moves
			var computerId = nextMove();
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

		if (computerMoves.length > 2) {
			var status = evaluateWinner(computerMoves);
			if (status == "winner") {
				return "Computer won."; 
			}
		}

	}

	return "game in progress";	

}

// calculates computer's move
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
	
	for (var i = 0; i < winnerArray.length; i++) {
        
        var matches = 0;
		
		for (var j = 0; j < winnerArray[i].length; j++) {
          console.log(input.indexOf(winnerArray[i][j]));
			if(input.indexOf(winnerArray[i][j]) > -1) {
				matches++;
			}
		}

        if (matches == 3) {
		  result = "winner";
	    }
	}
  
  	return result;

}