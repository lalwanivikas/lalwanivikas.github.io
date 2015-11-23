var container = document.getElementsByClassName('container');
var time = document.getElementById('time');
var counter = document.getElementById('counter');
var clickCount = document.getElementById('clickCount');
var startMessage = document.getElementById('startMessage');
var result = document.getElementById('result');


var height = 10;
var count = 0;


var fillTank = setInterval( function(){
	
	if (height == 300) {
		
		clearInterval(fillTank);
		
		result.style.display = "block";
		for (var i = 0; i < container.length; i++) {
			container[i].style.display = "none";
		}

		var totalClicks = count * 2 / 60;
		totalClicks = totalClicks.toFixed(2);

		result.innerHTML = "Your click speed is " + totalClicks + " clicks/second.";

	}

	time.style.height = height + "px";

	var topMargin = 300 - height;
	time.style.marginTop = topMargin + "px";

	height = height + 10;

}, 1000 );

counter.addEventListener('click', function(){
	startMessage.style.display = "none";
	clickCount.style.display = "block";
	count++;	
	clickCount.innerHTML = count;
});