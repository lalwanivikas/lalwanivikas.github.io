var dinoX = 40;
var dinoY = height - 20;

var obstacleX = 700;
var obstacleY = height;

var obstacleHeight = 50;

var cloudX = 700;

var drawDino = function (x, y) {
	context.fillStyle = '#0F0';
	context.fillRect(x, y, 20, 20);
}

var drawObstacle = function (x, y) {
	context.fillStyle = '#FFF';
	context.fillRect(x, y - obstacleHeight, 30, obstacleHeight);
}

var scoreText = function() {
	var score_text = "Score: " + score;
	context.fillStyle = '#fff';
    context.textAlign = "center";
    context.font = "18px Helvetica";
	context.fillText(score_text, width - 80, 50);
}


var drawCloud  = function(x, y) {
	var imageObj = new Image();

	imageObj.onload = function() {
		context.drawImage(imageObj, x, y);
	};
	
	imageObj.src = 'img/cloud.png';
}


var paint = function () {

    // clearing canvas
	context.clearRect(0, 0, width, height);
	
	if (direction == 'up') {
		dinoY = dinoY - 5;
		if (dinoY <= 200) { // reversing direction once dino reaches certain height
			direction = 'down';
		}
	} else if (direction == 'down') { // stop going down once it levels with surface
		dinoY = dinoY + 3;
		if (dinoY >= height - 20) {
			direction = 'running';
		}
	} else if (direction == 'running') {
		dinoY = height - 20;
	}

	obstacleX = obstacleX - 3;
	drawObstacle(obstacleX, obstacleY);

	if (obstacleX == 10) {
		console.log('new obstacle');
		obstacleHeight = Math.floor(Math.random() * 65 + 30);
		obstacleX = 700;
	}
	
	// checking collision and resetting the game if there is collision
	if ( (dinoX >= obstacleX) && (dinoY + 20 >= 400 - obstacleHeight) 
		|| (dinoX + 20 >= obstacleX) && (dinoY + 20 >= 400 - obstacleHeight) ) {
		
		startButton.removeAttribute('disabled', true);

		score = 0;
        context.clearRect(0, 0, width, height);
		gameloop = clearInterval(gameloop);

		dinoX = 40;
		dinoY = height - 20;

		obstacleX = 700;
		obstacleY = height;

		obstacleHeight = 50;

		return;
	}

	if ( dinoX == obstacleX ) {
		score++;
	}

	drawDino(dinoX, dinoY);
	scoreText();
	

	cloudX =  cloudX - 1;
	if (cloudX == -30) {
		cloudX = 700
	}
	drawCloud(cloudX, 90);
}


var init = function() {
    
    startButton.setAttribute('disabled', true);

    direction = 'running';
	
    drawDino(dinoX, dinoY);
	
    gameloop = setInterval(paint, 10);
    
}