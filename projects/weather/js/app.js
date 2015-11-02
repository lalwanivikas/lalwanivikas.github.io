'use strict;'

// Forecast.io API Key: 958d24a968856b141563afdc92dff475

var $mainIcon = document.getElementById('mainIcon'),
	$query = document.getElementById('query'),
	$location = document.getElementById('location'),
	$time = document.getElementById('time'),
	$summary = document.getElementById('summary'),
	$temperature = document.getElementById('temperature'),
	$precipitation = document.getElementById('precipitation'),
	$humidity = document.getElementById('humidity'),
	$wind = document.getElementById('wind'),
	$nextDay = document.getElementById('nextDay'),
	$nextWeek = document.getElementById('nextWeek');

// to show and hide response div
var $response = document.getElementById('response');

// for Google geocoding
var geocoder = new google.maps.Geocoder();

// geocoding the value entered by a user using Google Maps API
query.addEventListener('keypress', function(e){
	if(e.keyCode === 13) {
		var address = $query.value;
		geocoder.geocode({'address': address}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				
				var address_components = results[0].address_components;
				var location;

				for (var i = 0; i < address_components.length; i++) {
					
					var addr = address_components[i];
					var getCity, getCountry;

					if (addr.types[0] == 'country') {
				  		getCountry = addr.long_name;
					} else if (addr.types[0] == 'locality') {
						getCity = addr.long_name;
					}
				
					if(getCity && getCountry) {
						location = getCity + ", " + getCountry;
					} else {
						location = results[0].formatted_address;
					} 
				}

				var latLong = results[0].geometry.location;
				callForecast(location, latLong);
			} else {
		  		alert('Your query failed :( - Reason: ' + status);
			}
		});
	$query.value = "";
	}
});


function callForecast(location, latLong) {
	$mainIcon.style.display = "none";
	$location.innerHTML = location;
	var latLong = latLong.toString().replace(/["'()]/g,"");

	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = 'https://api.forecast.io/forecast/958d24a968856b141563afdc92dff475/'
				 + latLong
				 + '?callback=fetchData'
				 + '&units=si&exclude=minutely,flags';

	document.getElementsByTagName('head')[0].appendChild(script);
}

function fetchData(data) {	
	// displaying the response div
	$response.style.display = "block";

	// manipulating date/time
	var systemDate = new Date();
	var date = new Date((data.currently.time 
						+ systemDate.getTimezoneOffset() * 60
						+ data.offset * 60 * 60) * 1000);
	
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var day = days[date.getDay()];

	var gmtOffset;

	if(data.offset > 0) {
		gmtOffset = "+" + data.offset;
	} else {
		gmtOffset = data.offset;
	}

	var formattedTime = day + " " + hours + ":" + minutes.substr(-2) + " (GMT " + gmtOffset + ")";


	// getting and setting icons
	var iconType = data.currently.icon;
	var skycons = new Skycons({"color": "#455A64"});
	skycons.add(document.getElementById("icon"), iconType);
	skycons.play();

	// setting current weather values
	$time.innerHTML = formattedTime;
	$summary.innerHTML = data.currently.summary;
	$temperature.innerHTML = data.currently.temperature.toFixed(1) + "&deg;";
	$precipitation.innerHTML = "Precipitation: " + (data.currently.precipProbability * 100).toFixed(0) + "%";
	$humidity.innerHTML = "Humidity: " + (data.currently.humidity * 100).toFixed(0) + "%";
	$wind.innerHTML = "Wind: " + data.currently.windSpeed + "m/sec";

	// setting forecast values for next hour and next day
	$nextDay.innerHTML = "Next day: " + data.hourly.summary;
	skycons.add(document.getElementById("icon1"), data.hourly.icon);
	
	$nextWeek.innerHTML = "Next week: " + data.daily.summary;
	skycons.add(document.getElementById("icon2"), data.daily.icon);
}




