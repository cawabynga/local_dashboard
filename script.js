function addShortTask() {
	let taskText = document.querySelector(".inpShort").value;
	const shortTasks = document.querySelector(".shortTasks");
	const newShortTask = document.createElement("li");
	newShortTask.textContent = taskText;
	shortTasks.appendChild(newShortTask);
}
const shortForm = document.querySelector(".shortForm");

shortForm.addEventListener('submit', function(event) {
	console.log('form submitted');
	event.preventDefault();
	if (document.querySelector(".inpShort").value.trim() != "") => {
	addShortTask();
}
});
