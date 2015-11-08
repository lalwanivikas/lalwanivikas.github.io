var saveButton = document.getElementById('save');
var clearButton = document.getElementById('clear');

saveButton.addEventListener('click', saveImage);

function saveImage() {
	var data = canvas.toDataURL();
	window.open(data, "_blank")
}

clearButton.addEventListener('click', function(){
	canvas.width = canvas.width;	
})