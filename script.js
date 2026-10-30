function addShortTask() {
	let taskText = document.querySelector(".inpShort").value;
	const shortTasks = document.querySelector(".shortTasks");
	const newShortTask = document.createElement("li");
	const textNode = document.createTextNode(taskText);
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox"

	newShortTask.appendChild(checkbox);
	newShortTask.appendChild(textNode);
	shortTasks.appendChild(newShortTask);

	document.querySelector(".inpShort").value = "";
	checkbox.addEventListener("change", function(event) {
		console.log("checkbox changed")
		newShortTask.classList.toggle("completed")
})
};
function addLongTask() {
	let taskText = document.querySelector(".inpLong").value;
	const longTasks = document.querySelector(".longTasks");
	const newLongTask = document.createElement("li");
	const textNode = document.createTextNode(taskText);
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox"

	newLongTask.appendChild(checkbox);
	newLongTask.appendChild(textNode);
	longTasks.appendChild(newLongTask);
	document.querySelector(".inpLong").value = "";
	checkbox.addEventListener("change", function(event) {
		console.log("checkbox changed")
		newLongTask.classList.toggle("completed")
})
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
