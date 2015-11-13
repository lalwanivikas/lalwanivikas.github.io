var nextButton = document.getElementsByClassName('nextButton')[0],
	headings = document.getElementsByClassName('headings')[0],
	quoteText = document.getElementById('quoteText'),
	author = document.getElementById('author');

var counter = 2;

nextButton.addEventListener('click', function(){
	
	getQuote(function(response) {
		var result = JSON.parse(response);
		// var randomNumber = Math.floor( Math.random() * 21 + 1 );

		if(counter == 21) {
			counter = 1;
		}

		headings.classList.add('pre-animation');

		quoteText.innerHTML = result[counter].quote;
		author.innerHTML = result[counter].author;

		setTimeout(function(){
		    headings.classList.remove('pre-animation')
		},800)

		counter++;
		
	});

});

function getQuote(callback) {
	
	request = new XMLHttpRequest();
	request.open('GET', 'data/quotes.json');
		
	request.onload = function() {
		callback(request.responseText);
	};

	request.onerror = function() {
		alert("something went wrong :(");
	};

	request.send();
}