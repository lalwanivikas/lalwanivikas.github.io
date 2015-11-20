var startButton = document.createElement('button');
startButton.innerHTML = "Start";
document.body.appendChild(startButton);


startButton.addEventListener('click', function(){
	init();
});


var jump = document.addEventListener('keydown', function(event){

	keyCode = event.keyCode || window.event.keyCode;

	if (keyCode === 32) {
		if (direction != 'up') {
			direction = 'up';
		}
		console.log('up');
	}

});