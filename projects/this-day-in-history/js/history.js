var currentDay = document.getElementById('currentDay'),
	content = document.getElementById('content');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var date = new Date();

var today = {
	date: date.getDate(),
	day: date.getDay(),
	month: date.getMonth(),
	year: date.getFullYear()
};

currentDay.innerHTML = days[today.day]
						+ ", " + today.date
						+ " " + months[today.month]
						+ " " + today.year;


// forming URL for JSONP request to Wikipedia API
var pageToGet = months[today.month] + "_" + today.date;
var url = "https://en.wikipedia.org/w/api.php?action=parse&page=" + pageToGet + "&format=json&section=1&callback=displayResults";


// function to handle JSON response
function displayResults(data) {
	var text = data.parse.text['*'];
	text = text.replace(/<\/?a[^>]*>/g, "");
	text = text.split('<ul>');
	text = text[1];
	content.innerHTML = text;
}


// JSONP using pure JavaScript
var script = document.createElement('script');
script.src = url;
document.getElementsByTagName('head')[0].appendChild(script);