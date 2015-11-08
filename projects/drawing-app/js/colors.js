var swatches = document.getElementsByClassName('swatch');

for(var i = 0; i < swatches.length; i++) {
	swatches[i].addEventListener('click', setSwatch);
}

function setColor(color) {
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if(active) {
		active.className = 'swatch';
	}
}

function setSwatch(e) {
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += ' active';
}