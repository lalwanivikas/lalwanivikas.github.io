var menubar = require('menubar'),
	http = require("http"),
	fs = require('fs'),
	shell = require('shell');

var windowHeight;

var mb = menubar({
	height: 110,
	width: 400,
	preloadWindow: true
})

mb.on('ready', function ready () {
	
	console.log('app is ready');

	var options = {
	  "method": "GET",
	  "hostname": "www.espncricinfo.com",
	  "port": null,
	  "path": "/netstorage/summary.json"
	};

	var req = http.request(options, function (res) {
		
		var chunks = [];

		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res.on("end", function () {
	    
		var body = Buffer.concat(chunks);
		var response = JSON.parse(body);
		
		var head = '<html><head><title>Live Scores</title><link rel="stylesheet" type="text/css" href="style.css"></head><body><h3>Current Live Scores</h3><div class="container">';
		var body = "";

		var liveMatches = response.modules.aus[0].matches;

		for ( var i = 0; i < liveMatches.length; i++ ) {
			for ( var matchId in response.matches) {
				if( matchId == liveMatches[i] ) {
					body += '<div class="row"><a href="http://www.espncricinfo.com' + response.matches[matchId].url + '">';
					body += '<span class="team-name">' + response.matches[matchId].team1_name + '</span>';
					body += '<span class="team-score">' + response.matches[matchId].team1_score + '</span>';
					body += '<span> v </span>'
					body += '<span class="team-name">' + response.matches[matchId].team2_name + '</span>';
					body += '<span class="team-score">' + response.matches[matchId].team2_score + ' </span>';
					if('result' in response.matches[matchId]) {
						body += '<br><span>' + response.matches[matchId].result + '.</span>';
					}
					body += '</a></div>';
				}
			}
		}
		
		var footer = '</div></body></html>';

		var html = head + body + footer;

		fs.writeFile("index.html", html, function(err) {
			
			if(err) {
				return console.log(err);
			}

		    console.log("The file was saved!");
		}); 

	  });

	});

	req.end();

})