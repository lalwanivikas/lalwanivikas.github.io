function setRadius(newRadius) {
	
	if(newRadius < minRad) {
		newRadius = minRad;
	} else if (newRadius > maxRad) {
		newRadius = maxRad;
	}

	radius = newRadius;
	context.lineWidth = 2 * radius;

	radSpan.innerHTML = radius;
}

var minRad = 1,
	maxRad = 100,
	defaulRad = 5,
	interval = 5,
	radSpan = document.getElementById('radVal'),
	incRad = document.getElementById('incRad'),
	decRad = document.getElementById('decRad');

decRad.addEventListener('click', function(){
	setRadius(radius - interval);
})

incRad.addEventListener('click', function(){
	setRadius(radius + interval);
})

setRadius(defaulRad);