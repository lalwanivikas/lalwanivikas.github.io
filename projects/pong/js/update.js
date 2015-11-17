// Update game objects
var update = function (modifier) {

  if (32 in keysDown) { // Start the game with the spacebar
    isGameStarted = true;
  }

  if (87 in keysDown) { // P1 holding up (key: w)
    p1.y -= p1.speed * modifier;

    if (p1.y <= 0) {
      p1.y = 0;
    }
  }

  if (83 in keysDown) { // P1 holding down (key: s)
    p1.y += p1.speed * modifier;

    var limit = canvas.height - p1.height;
    if (p1.y >= limit) {
      p1.y = limit;
    }
  }

  if (38 in keysDown) { // P2 holding up
    p2.y -= p2.speed * modifier;

    if (p2.y <= 0) {
      p2.y = 0;
    }
  }

  if (40 in keysDown) { // P2 holding down
    p2.y += p2.speed * modifier;

    var limit = canvas.height - p2.height;
    if (p2.y >= limit) {
      p2.y = limit;
    }
  }

  // Ball is out of the left boundary
  if (
    ball.x <= 0
  ) {
    // player 2 wins
    p2.score++;
    reset();
  }

  // Ball is out of the right boundary
  if (
    ball.x >= canvas.width - ball.size
  ) {
    // player 1 wins
    p1.score++;
    reset();
  }

  // Ball is colliding with P1
  if (
    ball.x <= (p1.x + p1.width)
    && p1.x <= (ball.x + ball.size)
    && ball.y <= (p1.y + p1.height)
    && p1.y <= (ball.y + ball.size)
  ) {
    ball.speedX = Math.abs(ball.speedX);

    // Give the ball a bit of randomness by increasing/decreasing its speed on the Y axis only
    ball.speedY = randomize();
  }

  // Ball is colliding with P2
  if (
    ball.x <= (p2.x + p2.width)
    && p2.x <= (ball.x + ball.size)
    && ball.y <= (p2.y + p2.height)
    && p2.y <= (ball.y + ball.size)
  ) {
    ball.speedX = Math.abs(ball.speedX) * -1; // inverted

    // Give the ball a bit of randomness by increasing/decreasing its speed on the Y axis only
    ball.speedY = randomize();
  }

  // Ball is colliding with the top
  if (ball.y <= 0) {
    ball.speedY = Math.abs(ball.speedY);
  }

  // Ball is colliding with the bottom
  if (ball.y + ball.size >= canvas.height) {
    ball.speedY = Math.abs(ball.speedY) * -1; // inverted
  }

  if (isGameStarted) {
    // Ball movement
    ball.x += ball.speedX * modifier;
    ball.y += ball.speedY * modifier;
  }
};

function randomize() {
  // Random float between 300 and 599.9
  var _rand = Math.floor(Math.random()*(300.9)+300);;
  // positive or negative?
  return Math.random() > 0.5 ? _rand : _rand * -1;
}
