var input = document.getElementById('input');
var output = document.getElementById('output');
var countButton = document.getElementById('countButton');

countButton.addEventListener('click', function(){
	
	var words = input.value.split(' ');
	output.innerHTML = words.length;
	// for (var i = 0; i < words.length; i++) {
	// 	var row = document.createElement('div');
	// 	var wordSpan = document.createElement('span');
	// 	var countSpan = document.createElement('span');
	// 	wordSpan.innerHTML = words[i];
	// 	countSpan.innerHTML = 1;
	// 	// row.appendChild(wordSpan);
	// 	// row.appendChild(countSpan);
	// 	var wordRow = words[i] + ": " + 1;
	// 	row.innerHTML = wordRow;
	// 	output.appendChild(row);
	// }

});