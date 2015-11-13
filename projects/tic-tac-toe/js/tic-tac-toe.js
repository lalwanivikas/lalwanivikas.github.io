'use strict;'

var playerMoves = [],
	computerMoves = [],
	winnerArray = ['012', '345', '678', '036', '147', '258', '048', '246'];


var resultText = document.getElementById('resultText'),
	board = document.getElementsByClassName('board')[0],
	square = document.getElementsByClassName('square'),
	playingArea = document.querySelectorAll('.square div');


for (var i = 0; i < square.length; i++) {
	square[i].addEventListener('click', function(event){
		var result = game(event);
		console.log(result);
		if(result == "you won" || result == "computer won" || result == "tie!" ) {
			resultText.innerHTML = result; 
			resultText.style.display = "block";
			board.style.display = "none";
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

		console.log(playerMoves);

		// computer moves
		var computerId = nextMove();
		while (playerMoves.indexOf(computerId) !== -1 || computerMoves.indexOf(computerId) !== -1) {
			computerId = nextMove();
		}
	
		var nextSquare = square[computerId];
		var nextPlayingArea = nextSquare.querySelector('.square div');
		nextPlayingArea.setAttribute('class', 'circle');
		computerMoves.push(computerId);

	}
	
	if (playerMoves.length > 2) {
	
		var status = evaluateWinner(playerMoves);
		if (status == "winner") {
			return "you won"; 
		}
	
	} else if (computerMoves.length > 2) {
	
		var status = evaluateWinner(computerMoves);
		if (status == "winner") {
			return "computer won"; 
		}
	
	} else if (playerMoves.length == 5 && computerMoves.length == 4) {
		return "tie!"
	}

	return "game in progress";	

}


var nextMove = function() {
	
	var computerMove;
	
	// random number b/w min and max Math.floor(Math.random()*(max-min+1)+min);
	var computerId = Math.floor( Math.random() * 9);

	computerMove = computerId.toString();

	// console.log(computerId);

	// if (playerMoves.indexOf(computerId) == -1 && computerMoves.indexOf(computerId) == -1) {
	// 	computerMove = computerId;
	// } else {
	// 	nextMove();
	// }
	
	return computerMove;

}


function evaluateWinner(arrayToEvaluate) {

	var subArray = [],
        result = "loser";
	
	arrayToEvaluate.sort();

	for (var i = 0; i < arrayToEvaluate.length - 2; i++) {
		subArray[i] = arrayToEvaluate[i] + arrayToEvaluate[i+1] + arrayToEvaluate[i+2];
	}
    
    console.log(subArray);
  
	for (var i = 0; i < subArray.length; i++) {
		for (var j = 0; j < winnerArray.length; j++) {
			if (subArray[i] == winnerArray[j]) {
				result = "winner";
                console.log(subArray[i] + " : " + winnerArray[j]);
			}
		}
	}
    
    return result;

}