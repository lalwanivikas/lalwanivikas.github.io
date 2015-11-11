var line,
	pattern = [],
	counter = 0;

var input = document.getElementById('input'),
	output = document.getElementById('output');

input.addEventListener('keyup', function(e){
	
	// clearing all child nodes if the input text box is empty
	if (input.value === "") {
		
		while (output.hasChildNodes()) {
			output.removeChild(output.lastChild);
		}
		
		counter = 0;
	
	}

	// processing one line at a time if 'return/enter' is pressed
	if ( e.keyCode === 13 ) {
		
		line = input.value.split("\n");
		
		identifyPattern(line[counter]);
		counter++;
	
	}

});

function identifyPattern(lineString) {
	
	if (line.length !== 0) {
		
		var inputLine = lineString;
		var inputWords = lineString.split(" ");

		if (inputWords[0][0] === "#"){
			
			if (inputWords[0].length === 1) {
				h1(inputLine);
			} else if (inputWords[0].length === 2) {
				h2(inputLine);
			} else if (inputWords[0].length === 3) {
				h3(inputLine);
			}
			
		} else {
			para(inputLine);	
		}

	}

}


function h1(lineString) {
	
	var wordsArray = lineString.split(" ");
	wordsArray.shift();
	
	var h1 = document.createElement('h1');
	h1.innerHTML = wordsArray.join(" ");
	output.appendChild(h1);

}

function h2(lineString) {
	
	var wordsArray = lineString.split(" ");
	wordsArray.shift();
	
	var h2 = document.createElement('h2');
	h2.innerHTML = wordsArray.join(" ");
	output.appendChild(h2);

}

function h3(lineString) {
	
	var wordsArray = lineString.split(" ");
	wordsArray.shift();
	
	var h3 = document.createElement('h3');
	h3.innerHTML = wordsArray.join(" ");
	output.appendChild(h3);

}

function para(lineString) {
	console.log(lineString);
	var para = document.createElement('p');
	para.innerHTML = lineString;
	output.appendChild(para);
}