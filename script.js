function addShortTask() {
	let taskText = document.querySelector(".inpShort").value;
	const shortTasks = document.querySelector(".shortTasks");
	const newShortTask = document.createElement("li");
	const textNode = document.createTextNode(taskText);
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox"
	const dBtn = document.createElement("button")
	dBtn.type = "button"
	dBtn.textContent = "Delete";

	newShortTask.append(checkbox, textNode, dBtn);
	shortTasks.appendChild(newShortTask);

	document.querySelector(".inpShort").value = "";
	dBtn.addEventListener("click",function(event) {
		newShortTask.remove()
	})
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
	const dBtn = document.createElement("button")
	dBtn.type = "button"
	dBtn.textContent = "Delete";


	newLongTask.append(checkbox, textNode, dBtn);
	longTasks.appendChild(newLongTask);

	document.querySelector(".inpLong").value = "";
	dBtn.addEventListener("click",function(event) {
		newLongTask.remove()
	})
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
