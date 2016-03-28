'use strict;'

// referencing Firebase app root domain
var rootRef = new Firebase('https://boiling-fire-130.firebaseio.com');

var nameInput = document.getElementById('nameInput'),
	messageInput = document.getElementById('messageInput'),
	displayDiv = document.getElementById('display'),
	welcomeScreen = document.getElementById('welcomeScreen'),
	output = document.getElementById('output');

nameInput.addEventListener('keypress', function(event){
	if(event.keyCode === 13) {
		welcomeScreen.style.display = 'none';
		output.style.display = 'block';
	}
});

messageInput.addEventListener('keypress', function(event){
	if(event.keyCode === 13) {
		var name = nameInput.value;
		var text = messageInput.value;
		rootRef.push({ name: name, text: text });
	}
});

rootRef.on('child_added', function(snapshot) {
	var message = snapshot.val();
	displayChatMessage(message.name, message.text);
});

function displayChatMessage(name, text) {
	var incomingMessage = document.createElement('p');
	name = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	incomingMessage.innerHTML = '<b>' + name + ": " + '</b>' + text;
	displayDiv.appendChild(incomingMessage);
	messageInput.value = "";
}