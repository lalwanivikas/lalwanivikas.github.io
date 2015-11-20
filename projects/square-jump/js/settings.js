// create canvas
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var width = 700;
var height = 400;
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);

var score = 0;
var direction;
var dino;
var obstacle;
var gameloop;