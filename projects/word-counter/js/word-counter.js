/*
**
** User stories:
** - Shows number of characters, words, sentences, paragraphs - Done
** - Show reading time
** - Show keyword density - how?
** - Show reading level (Optional - how?) - Done
** - Above data should change/appear on every keypress - Done
**
*/

// API Key for testing: PQ4FOFuaR6mshI6qpnQKQvkDZQXjp1o6Zcqjsnug7GvNggTzUE

var input = document.getElementsByTagName('textarea')[0],
		characterCount = document.getElementById('characterCount'),
		wordCount = document.getElementById('wordCount'),
		sentenceCount = document.getElementById('sentenceCount'),
		paragraphCount = document.getElementById('paragraphCount'),
		showReadingLevel = document.getElementsByTagName('button')[0],
		readingLevel = document.getElementById('readingLevel');

input.addEventListener('keyup', function(){
	
	// character count
	var characters = input.value.replace(/\n/gm, "");
	characterCount.innerHTML = characters.length;

	// word count: http://stackoverflow.com/a/6544011
	var words = input.value.match(/(\w+)/g);
	if (words) {
		wordCount.innerHTML = words.length;	
	} else {
		wordCount.innerHTML = 0;	
	}
	
	// sentence count	
	var sentences = input.value.replace(/\s+/, "") 
	sentences = sentences.split(/[.|!|?]/gi);
	var count = 0;
	for (var i = 0; i < sentences.length; i++) {
		if (sentences[i].length > 0) {
			count++;
		}
	}
	sentenceCount.innerHTML = count;		

	// paragraph count from http://stackoverflow.com/a/3336537
	if (words) {
		var paragraphs = input.value.replace(/\n$/gm, '').split(/\n/);
		paragraphCount.innerHTML = paragraphs.length;
	} else {
		paragraphCount.innerHTML = 0;
	}
});


showReadingLevel.addEventListener('click', function(){
	var requestUrl = "https://ipeirotis-readability-metrics.p.mashape.com/getReadabilityMetrics?text=";
	var data = input.value;

	var request = new XMLHttpRequest();
	request.open('POST', encodeURI(requestUrl + data), true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.setRequestHeader("X-Mashape-Authorization", "PQ4FOFuaR6mshI6qpnQKQvkDZQXjp1o6Zcqjsnug7GvNggTzUE");
	request.send();

	request.onload = function() {
		if (this.status >= 200 && this.status < 400) {
	    // Success!
	    readingLevel.innerHTML = JSON.parse(this.response).FLESCH_READING;

	  } else {
	    // We reached our target server, but it returned an error

	  }
	};

	request.onerror = function() {
	  // There was a connection error of some sort
	};
});

