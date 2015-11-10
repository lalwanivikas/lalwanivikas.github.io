'use strict;'

var barResult = document.getElementById('barResult'),
	query = document.getElementsByName('query'),
	barResult = document.getElementById('barResult'),
	nextResult = document.getElementById('nextResult'),
	mapDiv = document.getElementById('mapDiv');

var map,
	counter = 0,
	infowindow,
	service,
	marker,
	bar_results;

// first call to getResults - as a callback to getCurrentPosition
navigator.geolocation.getCurrentPosition(getResults, geoError);

// handling geolocation errors
var geoError = function(error) {
	barResult.innerHTML = 'ERROR(' + error.code + '): ' + error.message;
	// error.code can be:
	//   0: unknown error
	//   1: permission denied
	//   2: position unavailable (error response from location provider)
	//   3: timed out
};

function getResults(position) {

	currentLocation = {lat: position.coords.latitude, lng: position.coords.longitude};

	map = new google.maps.Map(document.getElementById('map'), {
		center: currentLocation,
		zoom: 15
	});

	var request = {
			location: currentLocation,
			radius: '500',
			types: ['bar', 'night-club'],
			openNow: true,
			radius: 700
	};
	
	infowindow = new google.maps.InfoWindow();
	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, callback);

}

function callback(results, status) {	
	bar_results = results;
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		showABar();
	} else {
		barResult.innerHTML = "Sorry. No results found";
		mapDiv.style.display = "none";
		nextResult.style.display = "none";
	}
}


function showABar() {
	if(bar_results.length === 0) {
		barResult.innerHTML = "Sorry. No results found.";
		mapDiv.style.display = "none";
		nextResult.style.display = "none";
	} else {
		var bar = bar_results[counter];
		var barLoc = bar.geometry.location;
		marker = new google.maps.Marker({
			map: map,
			position: barLoc
		});

		google.maps.event.addListener(marker, 'click', function () {
			var content = bar.name + '<br>' + bar.vicinity
			infowindow.setContent(content);
			infowindow.open(map, this);
		});

		barResult.innerHTML = (bar.name + ' is open for drinks!');

		counter++;
	}
}

nextResult.addEventListener('click', function(){
	if (counter < bar_results.length - 1) {
		marker.setMap(null); // clearning previous marker
		showABar();
	} else {
		barResult.innerHTML = 'No more search results';
	}
}); 