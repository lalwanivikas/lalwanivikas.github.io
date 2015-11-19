var bodySnake = function(x, y) {
	ctx.fillStyle = '#0F0';
	ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
	ctx.strokeStyle = '#000';
	ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
}

var pizza = function(x, y) {
	ctx.fillStyle = '#fff';
	ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize-1, snakeSize-1);
}

var scoreText = function() {
	var score_text = "Score: " + score;
	ctx.fillStyle = '#fff';
    ctx.textAlign = "center";
    ctx.font = "18px Helvetica";
	ctx.fillText(score_text, w/2, h-5);
}

var drawSnake = function() {
	var length = 4;
	snake = [];
	for (var i = length-1; i>=0; i--) {
		snake.push({x:i, y:0});
	}  
}

var paint = function(){
	
    // clearing canvas
	ctx.clearRect(0, 0, w, h);

	var snakeX = snake[0].x;
	var snakeY = snake[0].y;

    if (direction == 'right') { 
        snakeX++; 
    } else if (direction == 'left') { 
        snakeX--; 
    } else if (direction == 'up') { 
        snakeY--; 
    } else if (direction == 'down') { 
        snakeY++; 
    }

    if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
        //restart game
        btn.removeAttribute('disabled', true);

        score = 0;
        ctx.clearRect(0,0,w,h);
        gameloop = clearInterval(gameloop);
        return;          
    }

    if(snakeX == food.x && snakeY == food.y) {
        var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
        score++;
        createFood(); //Create new food
    } else {
        var tail = snake.pop(); //pops out the last cell
        tail.x = snakeX; 
        tail.y = snakeY;
    }
    
    //The snake can now eat the food.
    snake.unshift(tail); //puts back the tail as the first cell

    for(var i = 0; i < snake.length; i++) {
    	bodySnake(snake[i].x, snake[i].y);
    } 

    pizza(food.x, food.y); 
    scoreText();
}

var createFood = function() {
	food = {
		x: Math.floor((Math.random() * 45) + 1),
		y: Math.floor((Math.random() * 25) + 1)
	}

	for (var i=0; i>snake.length; i++) {
		var snakeX = snake[i].x;
		var snakeY = snake[i].y;

		if (food.x===snakeX && food.y === snakeY) {
			createFood();
		}
	}
}

var checkCollision = function(x, y, array) {
	for(var i = 0; i < array.length; i++) {
		if(array[i].x === x && array[i].y === y)
			return true;
	} 
	return false;
}

var init = function(){
    
    btn.setAttribute('disabled', true);
	
    direction = 'right';
	
    drawSnake();
	createFood();
	
    gameloop = setInterval(paint, 80);
    
}



