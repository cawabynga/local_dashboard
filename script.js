function addShortTask() {
	let taskText = document.querySelector(".inpShort").value;
	const shortTasks = document.querySelector(".shortTasks");
	const newShortTask = document.createElement("li");
	newShortTask.textContent = taskText;
	shortTasks.appendChild(newShortTask);
	document.querySelector(".inpShort").value = "";
};
function addLongTask() {
	let taskText = document.querySelector(".inpLong").value;
	const longTasks = document.querySelector(".longTasks");
	const newLongTask = document.createElement("li");
	newLongTask.textContent = taskText;
	longTasks.appendChild(newLongTask);
	document.querySelector(".inpLong").value = "";
};


const shortForm = document.querySelector(".shortForm");

shortForm.addEventListener('submit', function(event) {
	console.log('form submitted');
	event.preventDefault();
	if (document.querySelector(".inpShort").value.trim() != "") {
	addShortTask();
}
});
const longForm = document.querySelector(".longForm");

longForm.addEventListener('submit', function(event) {
	console.log('form submitted');
	event.preventDefault();
	if (document.querySelector(".inpLong").value.trim() != "") {
	addLongTask();
}
});
