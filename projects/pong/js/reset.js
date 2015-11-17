// Reset the game
var reset = function () {

  isGameStarted = false;

  ball.x = (canvas.width - ball.size) / 2;
  ball.y = (canvas.height - ball.size) / 2;

  // randomly start from left or right
  ball.speedX = Math.random() > 0.5 ? 600 : -600;
  ball.speedY = 0;
}
