'use strict;'

var startButton = document.getElementById('startButton'),
	startWindow = document.getElementsByClassName('startWindow')[0],
	testWindow = document.getElementsByClassName('testWindow')[0],
	resultWindow = document.getElementById('resultWindow'),
	testPara = document.getElementById('testPara'),
	responsePara = document.getElementById('responsePara'),
	testAgainButton = document.getElementById('testAgain'),
	timer = document.getElementById('timer'),
	score = document.getElementById('score'),
	timeRemaning = 60;


// setting things once 'start is pressed'
startButton.addEventListener('click', function(){
	
	startWindow.style.display = 'none';
	testWindow.style.display = 'block';
	
	responsePara.addEventListener('keydown', displayTime);
	
	getPara(function(response) {
		var result = JSON.parse(response);
		var passages = [result.passage1, result.passage2, result.passage3, result.passage4, result.passage5];
		testPara.innerHTML = passages[Math.floor(Math.random()*10/2)];
	});
});


// function to fetch para from /data/test-para.json
function getPara(callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = function(){ // when the request is loaded
       callback(httpRequest.responseText);// we're calling our method
    };
    httpRequest.open('GET', "data/test-para.json");
    httpRequest.send();
}


// displaying time counter using setInterval()
var displayTime = function () {
	
	setInterval(function(){
		
		timeRemaning--;
		timer.innerHTML = timeRemaning;

		if(timeRemaning == 0) {
			clearInterval();
			resultWindow.style.display = "block";
			score.innerHTML = calculateScore();
			testWindow.style.display = "none";
		}

	}, 1000);
	
	responsePara.removeEventListener('keydown', displayTime);
}


// calculating score - counting # of words
var calculateScore = function() {
	var wordCount = responsePara.value.split(" ").length;
	return wordCount;
}


// option to retake test - just reloading the window
testAgainButton.addEventListener('click', function(){
	window.location.reload();
});