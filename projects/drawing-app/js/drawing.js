var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var dragging = false;
var radius = 5;

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
context.lineWidth = 2 * radius;

function engage(e) {
	dragging = true;
	drawCircle(e);
}

function disengage() {
	dragging = false;
	context.beginPath();
}

function drawCircle(e) {
	if(dragging) {
		context.lineTo(e.offsetX, e.offsetY);
		context.stroke();
		context.beginPath();
		context.arc(e.offsetX, e.offsetY, radius, 0, 2 * Math.PI);
		context.fill();
		context.beginPath();
		context.moveTo(e.offsetX, e.offsetY);
	}
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', drawCircle);
canvas.addEventListener('mouseup', disengage);