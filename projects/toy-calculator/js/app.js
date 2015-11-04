'use strict;'

var $number = document.querySelectorAll('.number'),
	$operator = document.querySelectorAll('.operator'),
	$output = document.querySelector('#output'),
	$clear = document.getElementById('clear'),
	$equals = document.getElementById('equals'),
	resultDisplayed = false; // to avoid wrong number entry after showing result

// clearing div when clear ('C') key pressed
$clear.addEventListener('click', function() {
	$output.innerHTML = "";
})


// updating optput div when number key pressed
for (var i = 0; i < $number.length; i++) {
	$number[i].addEventListener('click', function() {
		
		if(resultDisplayed) {
			$output.innerHTML = "";
			resultDisplayed = false;
		} 
		$output.innerHTML += this.innerHTML;
	})
}


// custom replaceAt() function taken from http://stackoverflow.com/a/1431113
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}


// updating optput div when operator key pressed 
for (var i = 0; i < $operator.length; i++) {
	$operator[i].addEventListener('click', function() {
		
		var opKeyPressed = this.innerHTML;
		var currentEntry = $output.innerHTML;
		if($output.innerHTML !== "") {
			//if the last entry is an operator, just replace it instead of adding it to the string
			if(currentEntry.slice(-1) == '+' || currentEntry.slice(-1) == '-' || currentEntry.slice(-1) == '×' || currentEntry.slice(-1) == '÷') {
				$output.innerHTML = currentEntry.replaceAt(currentEntry.length-1, opKeyPressed);
			} else {
				$output.innerHTML += opKeyPressed;
			}
		}
	})
}

// separating numbers in an array
function seperateNumbers(string) {
	
	var opPosition = [],
		numbers = [];

	for(var i = 0; i < string.length; i++) {
		if (string[i] == "÷") {
			opPosition.push(i);
		} else if (string[i] == "×") {
			opPosition.push(i);
		} else if (string[i] == "+") {
			opPosition.push(i);
		} else if (string[i] == "-") {
			opPosition.push(i);
		}
	}
	
	numbers[0] = string.substring(0, opPosition[0]);
	
	for( var j = 0; j < opPosition.length; j++) {
		numbers.push(string.substring(opPosition[j] + 1, opPosition[j+1]));
	}

	return numbers;
}

// addition function
function add(numArray) {
	var sum = 0;	
	for (var i = 0; i < numArray.length; i ++) {
		sum += parseInt(numArray[i]);
	}
	return sum;
}

// subtracttion function
function subtract(numArray) {
	var sub = numArray[0];	
	for (var i = 1; i < numArray.length; i ++) {
		sub -= parseInt(numArray[i]);
	}
	return sub;
}

// multiplication function
function multiply(numArray) {
	var mult = 1;	
	for (var i = 0; i < numArray.length; i ++) {
		mult *= parseInt(numArray[i]);
	}
	return mult;
}


// division function
function divide(numArray) {
	var div = numArray[0];	
	for (var i = 1; i < numArray.length; i ++) {
		div /= parseInt(numArray[i]);
	}
	return div.toFixed(2);
}

// evaluating the input
$equals.addEventListener('click', function(){

	var numbersArray = seperateNumbers($output.innerHTML);
	
	var temp = $output.innerHTML;
	
	if (temp.indexOf('+') !== -1) {
		$output.innerHTML = add(numbersArray);
	} else if (temp.indexOf('-') !== -1) {
		$output.innerHTML = subtract(numbersArray);
	} else if (temp.indexOf('×') !== -1) {
		$output.innerHTML = multiply(numbersArray);
	} else if (temp.indexOf('÷') !== -1) {
		$output.innerHTML = divide(numbersArray);
	}

	resultDisplayed = true;

});