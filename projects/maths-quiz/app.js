/* 
 ** 
 ** User stories:
 ** - Timer starts running as soon as window loads and a random question is shown.
 ** - If user selects correct answer => generate next random question, update score and restart timer.
 ** - If incorrect answer or the time is over => game over screen and score is shown.
 ** - User can restart once the game is over.
 **
 */

var time = 0, // keeps track of time remaining
  score = 0, // keeps the score count
  userChoice, // user's answer - X(0) and ✓(1)
  correctAnswer,
  randomAnswer,
  progress; // stores setTimeout ID

// user can select either X(0) and ✓(1)
var rightWrong = document.querySelectorAll('.right-wrong')[0],
  scoreDiv = document.querySelector('#score');

// adding event listener to right and X(0) and ✓(1) buttons(images)
rightWrong.addEventListener('click', function(e) {

  // user choice is either 1 or 0.	
  userChoice = parseInt(e.target.id);

  // correct option can be 1 or 0 depending on the random answer generated.
  var correctOption = (correctAnswer === randomAnswer) ? 1 : 0;

  // append the score and post a new question if right answer choosen
  if (userChoice === correctOption) {
    score++;
    scoreDiv.innerHTML = score;
    clearInterval(progress);
    startGame();
    return;
  } else {
    // exit the game if wrong answer
    exitGame();
    clearInterval(progress);
    return;
  }
});

// function to move progress bar
function moveProgressBar() {

  var status = document.querySelector('#status');
  time = 0;

  progress = setInterval(green, 20);

  function green() {
    if (time >= 100) {
      clearInterval(progress);
      exitGame();
    } else {
      time += 0.5;
      status.style.width = time + "%";
    }
  }

}

// generates a random question
function generateQuestion() {

  var questionDiv = document.querySelector('#question'),
    answerDiv = document.querySelector('#answer');

  var firstNumber = Math.floor(Math.random() * 15 + 2);
  var secondNumber = Math.floor(Math.random() * 15 + 2);

  // generates a random addition, subtraction or multiplication question
  var operations = [
    function(a, b) {
      questionDiv.innerHTML = a + " + " + b;
      return a + b;
    },
    function(a, b) {
      questionDiv.innerHTML = a + " - " + b;
      return a - b;
    },
    function(a, b) {
      questionDiv.innerHTML = a + " x " + b;
      return a * b;
    }
  ];

  var num = Math.floor(Math.random() * 3);

  correctAnswer = operations[num](firstNumber, secondNumber);

  // collection of random answers
  var randomAnswers = [correctAnswer - num, correctAnswer + num, correctAnswer + num];
  randomAnswer = randomAnswers[num];
  answerDiv.innerHTML = randomAnswer;

}

// exits the game and displays the final score
function exitGame() {

  clearInterval(progress);
  console.log("game over");

  // display a new screen with final score and option to play again
  var finalScreen = document.querySelectorAll('.final-screen')[0],
    finalScore = document.querySelector('#finalScore'),
    playAgain = document.querySelector('#play-again');

  // hiding main and score container			
  document.querySelectorAll('.container')[0].style.display = "none";
  document.querySelectorAll('.score-container')[0].style.display = "none";

  // display the result screen with final score
  finalScreen.style.display = "block";
  finalScore.innerHTML = score;

  // play again button click handler
  playAgain.addEventListener('click', function() {

    clearInterval(progress);
    score = 0;
    scoreDiv.innerHTML = score;
    startGame();

    finalScreen.style.display = "none";
    document.querySelectorAll('.container')[0].style.display = "block";
    document.querySelectorAll('.score-container')[0].style.display = "block";

  });

}

// starts the game. gets called on window.onload.
function startGame() {
  // fill the question div with new random question
  generateQuestion();
  // start the timer
  moveProgressBar();
}

// start the game on window load
window.onload = startGame;