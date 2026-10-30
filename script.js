function addTask(inputSelector,listSelector) {
	let taskText = document.querySelector(inputSelector).value;
	const tasks = document.querySelector(listSelector);
	const newTask = document.createElement("li");
	const textNode = document.createTextNode(taskText);
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox"
	const dBtn = document.createElement("button")
	dBtn.type = "button"
	dBtn.textContent = "Delete";


	newTask.append(checkbox, textNode, dBtn);
	tasks.appendChild(newTask);

	document.querySelector(inputSelector).value = "";
	dBtn.addEventListener("click",function(event) {
		newTask.remove()
	})
	checkbox.addEventListener("change", function(event) {
		console.log("checkbox changed")
		newTask.classList.toggle("completed", checkbox.checked)
})
};


const shortForm = document.querySelector(".shortForm");

shortForm.addEventListener('submit', function(event) {
	console.log('form submitted');
	event.preventDefault();
	if (document.querySelector(".inpShort").value.trim() != "") {
	addTask(".inpShort", ".shortTasks");
}
});
const longForm = document.querySelector(".longForm");

longForm.addEventListener('submit', function(event) {
	console.log('form submitted');
	event.preventDefault();
	if (document.querySelector(".inpLong").value.trim() != "") {
	addTask(".inpLong", ".longTasks");
}
});
