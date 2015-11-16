/*\
|*|
|*| - Generate a random word.
|*|	- Update the testWord div dynamically.
|*|	- Add/hang a body part with every wrong guess.
|*| - Display 'won' if correct guess or 'lost' if all body parts over.
|*|
\*/


var mainContainer = document.getElementsByClassName('mainContainer')[0],
	canvas = document.getElementById('canvas'),
	testWord = document.getElementsByClassName('testWord')[0],
	keyboard = document.querySelectorAll('.keyboard div div'),
	gameOver = document.querySelector('.gameOver'),
	youWon = document.querySelector('.youWon');

var words = ["AngularJS", "Backbonejs", "React", "jQuery", "Express", "Nodejs", "Emberjs", "Closure", "AJAX", "JSON", "ECMAScript", "Polymorphism", "Recursion", "WebKit", "Inheritance", "Prototype", "Asynchronous", "Method", "Property", "Object", "Console", "DevTools", "Meteor"],
	context = canvas.getContext('2d'),
	randomNumber,
	misses = 0,
	bodyParts = [drawHead, drawSpine, drawLeftHand, drawRightHand, drawLeftLeg, drawRightLeg];


// canvas dimension: w:300px, h:300px
// function to draw hanging stand using Canvas
function drawStand() {
	
	context.beginPath();
	
	context.moveTo(60, 300);
	context.lineTo(60, 2);
	context.lineTo(170, 2);
	context.lineTo(170, 25);
	
	context.lineWidth = 4;
	context.strokeStyle = '#607D8B';
	context.stroke();

}
drawStand();


// function to draw head using Canvas
function drawHead() {
	
	context.beginPath();
	context.arc( 170, 60, 35, 0, 2 * Math.PI );
	
	context.moveTo(155, 50);
	context.arc( 155, 50, 2, 0, 2 * Math.PI );
	
	context.moveTo(185, 50);
	context.arc( 185, 50, 2, 0, 2 * Math.PI );
	
	context.moveTo(160, 75);
	context.lineTo(180, 75);

	context.lineWidth = 3;
	context.strokeStyle = '#C51109';
	context.stroke();	

}


// function to draw spine using Canvas
function drawSpine() {
	
	context.beginPath();
	
	context.moveTo(170, 95);
	context.lineTo(170, 200);
	
	context.lineWidth = 3;
	context.strokeStyle = '#C51109';
	context.stroke();
}


// function to draw left hand using Canvas
function drawLeftHand() {
	
	context.beginPath();
	
	context.moveTo(170, 135);
	context.lineTo(120, 105);
	
	context.lineWidth = 3;
	context.strokeStyle = '#C51109';
	context.stroke();

}


// function to draw right hand using Canvas
function drawRightHand() {

	context.beginPath();
	
	context.moveTo(170, 135);
	context.lineTo(220, 105);
	
	context.lineWidth = 3;
	context.strokeStyle = '#C51109';
	context.stroke();

}


// function to draw left leg using Canvas
function drawLeftLeg() {

	context.beginPath();
	
	context.moveTo(170, 200);
	context.lineTo(220, 230);
	
	context.lineWidth = 3;
	context.strokeStyle = '#C51109';
	context.stroke();

}


// function to draw right leg using Canvas
function drawRightLeg() {

	context.beginPath();
	
	context.moveTo(170, 200);
	context.lineTo(120, 230);
	
	context.lineWidth = 3;
	context.strokeStyle = '#C51109';
	context.stroke();

}


// generating a random number - for picking random word from word array
randomNumber = Math.floor(Math.random() * 23);
var word = words[randomNumber].split('');


// appending divs to testWord div - for displaying the test word/guesses
// all will be blank to start with. To be filled if right character key is pressed
for (var i = 0; i < word.length; i++) {
	
	var testChar = document.createElement('div');
	testChar.innerHTML = " ";
	testWord.appendChild(testChar);

};

// adding event listener on click on any character
// - game function is the handler
for (var i = 0; i < keyboard.length; i++) {
	keyboard[i].addEventListener('click', game);
}		


// heart of the application
function game(e){
	
	// checking if the character pressed matches with the respective character in word (not words) array
	// - if match then fill the character in '.testWord div'
	// - changing key backgroung to green
	for (var i = 0; i < word.length; i++) {
		
		if (e.target.innerHTML === word[i].toLowerCase()) {
			var guessedChar = document.querySelectorAll('.testWord div');
			guessedChar[i].innerHTML = word[i];
			e.target.style.backgroundColor = "#4CAF50";
			e.target.style.color = "#FFF";
		}

	}
	
	// if the character is not present:
	// - then marking the key red
	// - and removing event listener
	// - appending a body part from bodyParts array
	if (word.indexOf(e.target.innerHTML.toLowerCase()) === -1 
		&& word.indexOf(e.target.innerHTML.toUpperCase()) === -1) {
		
		e.target.style.backgroundColor = "#E62117";
		e.target.style.color = "#FFF";
		
		e.target.removeEventListener('click', game);

		bodyParts[misses]();
		misses++;
	
	}

	// checking if the test and guesses words have matched by creating a temperory array currentStatus 
	var currentStatus = [];
	for (var j = 0; j < word.length; j++) {		
		currentStatus[j] = document.querySelectorAll('.testWord div')[j].innerHTML;
	}
	
	// if match - game won
	// display winning window and remove event listeners
	if (currentStatus.toString() == word.toString()) {
		
		mainContainer.style.opacity = 0.3;
		youWon.style.display = "block";

		for (var i = 0; i < keyboard.length; i++) {
			keyboard[i].removeEventListener('click', game);
		}
	}

	// misses = 6 means all the body parts are over/hanged and game is over
	// display gameover window and remove event listeners
	// also display the characters that were not guessed in differernt color(red) 
	if (misses === 6) {
		
		for (var i = 0; i < word.length; i++) {
			var missedChar = document.querySelectorAll('.testWord div');
			if (missedChar[i].innerHTML == " ") {
				missedChar[i].innerHTML = word[i];
				missedChar[i].setAttribute("style", "color: #FF5722;");
			};
		}

		mainContainer.style.opacity = 0.3;
		gameOver.style.display = "block";

		for (var i = 0; i < keyboard.length; i++) {
			keyboard[i].removeEventListener('click', game);
		}

	} 

}


// on winning or losing an option is provided to reload the window
gameOver.addEventListener('click', reload);
youWon.addEventListener('click', reload);
function reload(){
	window.location.reload();
}