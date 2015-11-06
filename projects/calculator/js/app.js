'use strict;'

var $output = document.getElementById('output'),
    $buttons = document.querySelector('.buttons'),
    $equate = document.getElementById('equate'),
    resultDisplayed = false;

// handling click events on buttons
$buttons.addEventListener('click', function(event){

    if (event.target.innerHTML === 'C') {      
    
        $output.innerHTML = "";
    
    } else if (event.target.classList.contains('number')) {
    
        if (resultDisplayed) {
            $output.innerHTML = "";
            resultDisplayed = false;
        }
        
        $output.innerHTML += event.target.innerHTML;

    } else if (event.target.classList.contains('operator')) {

        var operator = event.target.innerHTML;
        var lastEntry = output.innerHTML[output.innerHTML.length - 1];

        if ($output.innerHTML.length !== 0
            && (lastEntry !== "+") 
            && (lastEntry !== "-")
            && (lastEntry !== "×")
            && (lastEntry !== "÷")) {
            $output.innerHTML += event.target.innerHTML;
        }
        
        if ($output.innerHTML.length !== 0) {       
            if (lastEntry !== "+" || lastEntry !== "-" || lastEntry !== "×" || lastEntry !== "÷") {
                $output.innerHTML = $output.innerHTML.replaceAt(output.innerHTML.length - 1, operator);
            } 
        }

        if (resultDisplayed) {
            resultDisplayed = false;
        }
    }

});


// handling click event on equate button
$equate.addEventListener('click', function(){
    
    var lastCharacter = $output.innerHTML[$output.innerHTML.length - 1];

    if (lastCharacter !== "+" && lastCharacter !== "-" && lastCharacter !== "×" && lastCharacter !== "÷") {
      result = evaluate($output.innerHTML);
      
      $output.innerHTML = result;
      
      if(result % 1 !== 0) {
          if(result.toString().split('.')[1].length > 5) {
              $output.innerHTML = result.toFixed(5);
          }
      } else {
          $output.innerHTML = result;
      }
      
      resultDisplayed = true;
    }

});


// custom replaceAt function taken from: http://stackoverflow.com/a/1431113
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}


// function to evaluate the entered string
function evaluate(string) {
    
    // if the string starts with "-", add a '0' in front to avoid NaN
    if (string[0] === "-") {
      string = "0" + string;
    }

	var opPosition = [],	// keeps positions of all the operators
		ops = [],			// keeps all the operators in the string
		numbers=[], 		// keeps all the numbers in the string
		answer; 			// stores result after each operation


	// parsing string to update ops and opPosition arrays
	for(var i = 0; i < string.length; i++) {
		if (string[i] == "÷") {
			ops.push(string[i]);
            opPosition.push(i);
		} else if (string[i] == "×") {
			ops.push(string[i]);
            opPosition.push(i);
		} else if (string[i] == "+") {
			ops.push(string[i]);
            opPosition.push(i);
		} else if (string[i] == "-") {
			ops.push(string[i]);
            opPosition.push(i);
		}
	}
	

	// creating numbers array using value in opPosition array
	numbers[0] = string.substring(0, opPosition[0]);
	
	for( var j = 0; j < opPosition.length; j++) {
		numbers.push(string.substring(opPosition[j] + 1, opPosition[j+1]));
	}
    
    console.log(ops);
	console.log(numbers);
  	

  	// performing division first and updating ops and mumbers arrays
    var a = ops.indexOf("÷");
    
    while (a !== -1) {
      
      answer = (numbers[a] / numbers[a+1]);
      
      ops.splice(a, 1);
      
      numbers[a] = answer;
      numbers.splice(a+1, 1);
      
      console.log(ops);
      console.log(numbers);
      
      a = ops.indexOf("÷");
    
    }
    

    // performing multiplication and updating ops and mumbers arrays
    var b = ops.indexOf("×");
    
    while (b !== -1) {
      
      answer = (numbers[b] * numbers[b+1]);
      
      ops.splice(b, 1);
      
      numbers[b] = answer;
      numbers.splice(b+1, 1);
      
      console.log(ops);
      console.log(numbers);
      
      b = ops.indexOf("×");
    
    }
    
    /*
	***
	***
	* Very important to do subtraction before addition.
	* Otherwise cases like "1 - 6 + 2" will fuck you hard.
	***
	***
    */

    // performing subtraction and updating ops and mumbers arrays
    var c = ops.indexOf("-");
    
    while (c !== -1) {
      
      answer = parseFloat(numbers[c]) - parseFloat(numbers[c+1]);
      
      ops.splice(c, 1);
      
      numbers[c] = answer;
      numbers.splice(c+1, 1);
      
      console.log(ops);
      console.log(numbers);
      
      c = ops.indexOf("-");
    
    }
  	

  	// performing addition and updating ops and mumbers arrays
    var d = ops.indexOf("+");
    
    while (d !== -1) {
      
      answer = parseFloat(numbers[d]) + parseFloat(numbers[d+1]);
      
      ops.splice(d, 1);
      
      numbers[d] = answer;
      numbers.splice(d+1, 1);
      
      console.log(ops);
      console.log(numbers);
      
      d = ops.indexOf("+");
    
    }
  	
  	// returning the final answer which is now the only value left in numbers array
    return numbers[0];
    
}
// for testing
// var query = evaluate("23÷45÷67×34-529×2745672+4353476*43675÷7465-528374659");
// console.log(query);