// create the canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 400;
document.body.appendChild(canvas);


/*****************/

// game objects
var snake = {
	speed: 256, // movement in pixels per second
	x: canvas.width / 2,
	y: canvas.height / 2,
};

var target = {
	x: 0,
	y: 0
};

var targetCaught = 0;


/*****************/

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown = {};
	keysDown[e.keyCode] = true;
}, false);

// addEventListener("keyup", function (e) {
// 	delete keysDown[e.keyCode];
// }, false);


/*****************/

var reset = function() {

	// Throw the target somewhere on the screen randomly
	target.x = 32 + (Math.random() * (canvas.width - 64));
	target.y = 32 + (Math.random() * (canvas.height - 64));

	// randomly start from left or right
	snake.speedX = Math.random() > 0.5 ? 150 : -150;
	snake.speedY = 0;
};


/*****************/
// mathod to clear canvas
CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};


/*****************/

// Update game objects
var update = function (modifier) {

	if (32 in keysDown) { // Start the game with the spacebar
		isGameStarted = true;
	}

	if (38 in keysDown) { // Player holding up
		snake.speedX = 0;
		snake.y -= snake.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		snake.speedX = 0;
		snake.y += snake.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		snake.speedY = 0;
		snake.x -= snake.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		snake.speedY = 0;
		snake.x += snake.speed * modifier;
	}

	// Are they touching?
	if (
		snake.x <= (target.x + 32)
		&& target.x <= (snake.x + 32)
		&& snake.y <= (target.y + 32)
		&& target.y <= (snake.y + 32)
	) {
		targetCaught++;
		reset();
	}

	if (isGameStarted) {
		// Ball movement
		snake.x += snake.speedX * modifier;
		snake.y += snake.speedY * modifier;
	}
};


/*****************/

// Draw everything
var render = function () {

	// clear the canvas
	ctx.clear();

	// snake
	ctx.fillStyle = "#0F0";
	ctx.fillRect(snake.x, snake.y, 50, 10);
	
	// target
	ctx.fillStyle = "#DDD";
	ctx.fillRect(target.x, target.y, 10, 10);

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "15px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Level: " + targetCaught, 32, 32);

	// Text options
	ctx.font = "36px Helvetica";

	// Initial text
	if (!isGameStarted) {
		ctx.fillText("Press spacebar to start", 160, canvas.height / 2 + 50);
	}
};


/*****************/

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
var isGameStarted = false;
reset();
main();


