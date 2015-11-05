'use strict;'

var $newEntry = document.querySelector('#newEntry'),
	$todoBox = document.querySelector('#todo'),
	$completedBox = document.querySelector('#completed'),
	$pendingItems = document.querySelector('#pendingItems'),
	$completedItems = document.querySelector('#completedItems');


$newEntry.addEventListener('keypress', function(e){
	
	if (e.keyCode === 13 && $newEntry.value !== "") {

		$pendingItems.style.display = "block";

		var item = document.createElement("li");

		var checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.setAttribute('class', 'pending');

		var label = document.createElement('label');
		label.innerHTML = this.value;

		var editButton = document.createElement('button');
		editButton.setAttribute('class', 'edit');

		var deleteButton = document.createElement('button');
		deleteButton.setAttribute('class', 'delete');
		deleteButton.innerHTML = "×";

		item.appendChild(checkBox);
		item.appendChild(label);
		item.appendChild(editButton);
		item.appendChild(deleteButton);
		
		$todoBox.appendChild(item);

		$newEntry.value = "";
	}

});


$todoBox.addEventListener('click', function(event){
	
	if(event.target.classList.contains('pending')) {

		$completedItems.style.display = "block";

		var item = document.createElement("li");

		var checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.checked = true;
		checkBox.setAttribute('class', 'done');

		var label = document.createElement('label');
		label.innerHTML = event.target.nextSibling.innerHTML;

		var deleteButton = document.createElement('button');
		deleteButton.setAttribute('class', 'delete');
		deleteButton.innerHTML = "×";

		item.appendChild(checkBox);
		item.appendChild(label);
		item.appendChild(deleteButton);
		
		$completedBox.appendChild(item);

		var itemClicked = event.target.parentNode;
		$todoBox.removeChild(itemClicked);
	}

	if(event.target.classList.contains('delete')) {
		var itemClicked = event.target.parentNode;
		itemClicked.parentNode.removeChild(itemClicked);
	}

	if(event.target.classList.contains('edit')) {
		
		var saveButton = document.createElement('button');
		saveButton.setAttribute('class', 'save');

		var itemToEdit = event.target.previousSibling;
		
		var editBox = document.createElement('input');
		editBox.type = 'text';
		editBox.value = itemToEdit.innerHTML;
		
		itemToEdit.parentNode.insertBefore(editBox, itemToEdit);
		
		itemToEdit.parentNode.insertBefore(saveButton, itemToEdit);
		itemToEdit.parentNode.removeChild(event.target);

		itemToEdit.parentNode.removeChild(itemToEdit);
	}

	if(event.target.classList.contains('save')) {

		var editButton = document.createElement('button');
		editButton.setAttribute('class', 'edit');

		var itemToSave = event.target.previousSibling;
		
		var modEntry = document.createElement('label');
		modEntry.innerHTML = itemToSave.value;

		itemToSave.parentNode.insertBefore(modEntry, itemToSave);
		
		itemToSave.parentNode.insertBefore(editButton, itemToSave);
		itemToSave.parentNode.removeChild(event.target);

		itemToSave.parentNode.removeChild(itemToSave);
	}

});


$completedBox.addEventListener('click', function(event){
	
	if(event.target.classList.contains('done')) {

		var item = document.createElement("li");

		var checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.setAttribute('class', 'pending');

		var label = document.createElement('label');
		label.innerHTML = event.target.nextSibling.innerHTML;

		var editButton = document.createElement('button');
		editButton.setAttribute('class', 'edit');

		var deleteButton = document.createElement('button');
		deleteButton.setAttribute('class', 'delete');
		deleteButton.innerHTML = "×";

		item.appendChild(checkBox);
		item.appendChild(label);
		item.appendChild(editButton);
		item.appendChild(deleteButton);
		
		$todoBox.appendChild(item);

		var itemClicked = event.target.parentNode;
		$completedBox.removeChild(itemClicked);
	}

	if(event.target.classList.contains('delete')) {
		var itemClicked = event.target.parentNode;
		itemClicked.parentNode.removeChild(itemClicked);
	}
});