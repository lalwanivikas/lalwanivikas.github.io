/*\
|*|	Main:
|*|	- timer to display on screen ✓
|*| - select between work and rest ✓
|*| - sound alarm when the time is up ✓
|*|	- ability to increase and decrease time interval ✓
|*|	- should work even when browser tab is closed - localstorage ✗ 
|*|
|*| Extra:
|*|	- ability to pause
|*|
\*/

// referencing all the elements
var work = document.getElementById('work'),
	rest = document.getElementById('rest'),
	currentMode = document.getElementById('currentMode'),
	incTime = document.getElementById('incTime'),
	decTime = document.getElementById('decTime'),
	minutes = document.getElementById('minutes'),
	seconds = document.getElementById('seconds'),
	reset = document.getElementById('reset'),
	start = document.getElementById('start'),
	alarm = document.getElementById('alarm');


// to hold setInterval() in startClock() function 
var clock;


// setting work conditions on click on work
work.addEventListener('click', workMode);
function workMode() {

	currentMode.innerHTML = this.innerHTML;

	minutes.innerHTML = "25";
	seconds.innerHTML = "00"; 

}


// setting break(rest) conditions on click on break
rest.addEventListener('click', restMode);
function restMode() {

	currentMode.innerHTML = this.innerHTML;
	
	minutes.innerHTML = "05";
	seconds.innerHTML = "00";

}


// to reset mode, timer, setInterval and event handlers on click on 'reset'
reset.addEventListener('click', function(){
	
	work.addEventListener('click', workMode);
	rest.addEventListener('click', restMode);
	
	incTime.addEventListener('click', increaseTime);
	decTime.addEventListener('click', decreaseTime);
	
	start.addEventListener('click', startClock); 

	currentMode.innerHTML = 'Work';
	alarm.pause();

	minutes.innerHTML = "25";
	seconds.innerHTML = "00";

	clearInterval(clock);

});


// main logic
// - remove all event handlers so that nothing disturbs the timer
// - 
start.addEventListener('click', startClock); 
function startClock(){

	work.removeEventListener('click', workMode);
	rest.removeEventListener('click', restMode);
	
	incTime.removeEventListener('click', increaseTime);
	decTime.removeEventListener('click', decreaseTime);

	start.removeEventListener('click', startClock); 

	window.setTimeout(function(){
		seconds.innerHTML = 60;
		seconds.innerHTML = pad(seconds.innerHTML);

		minutes.innerHTML -= 1;
		minutes.innerHTML = pad(minutes.innerHTML);
	}, 1000);
	
	clock = window.setInterval(function(){
		
		seconds.innerHTML -= 1;
		seconds.innerHTML = pad(seconds.innerHTML);

		if (seconds.innerHTML == 0) {
			if (seconds.innerHTML == 0 && minutes.innerHTML == 0) {
			
				clearInterval(clock);
				alarm.play();

			} else {
				seconds.innerHTML = 60;
				seconds.innerHTML = pad(seconds.innerHTML);

				minutes.innerHTML -= 1;
				minutes.innerHTML = pad(minutes.innerHTML);
			}
		}
	
	}, 1000);

}


// function to add extra '0' before single digit number
var pad = function(n) { 
	return n < 10 ? '0' + n : n; 
};


// incrementing time bby one minute on each click on '+'
incTime.addEventListener('click', increaseTime);
function increaseTime() {
	minutes.innerHTML = parseInt(minutes.innerHTML) + 1;
	minutes.innerHTML = pad(minutes.innerHTML);
	if (minutes.innerHTML == 100) {
		minutes.innerHTML = "00"
	}
}


// decresing time bby one minute on each click on '-'
decTime.addEventListener('click', decreaseTime);
function decreaseTime() {
	minutes.innerHTML = parseInt(minutes.innerHTML) - 1;
	minutes.innerHTML = pad(minutes.innerHTML);
	if (minutes.innerHTML == 00) {
		minutes.innerHTML = "99"
	}
}

