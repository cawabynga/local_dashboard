const shortForm = document.querySelector(".shortForm");
let tasks = []
shortForm.addEventListener('submit', function(event) {
	console.log('form submitted');
	event.preventDefault();
	if (document.querySelector(".inpShort").value.trim() != "") {
		let taskText = document.querySelector(".inpShort").value
		newTask(taskText, "short");
		document.querySelector(".inpShort").value = ""
}
});
const longForm = document.querySelector(".longForm");

longForm.addEventListener('submit', function(event) {
	console.log('form submitted');
	event.preventDefault();
	if (document.querySelector(".inpLong").value.trim() != "") {
		let taskText = document.querySelector(".inpLong").value
		newTask(taskText, "long")
		document.querySelector(".inpLong").value = ""
}
});

function generateUniqueId(tasks) {
    let id;

    do {
        id = crypto.randomUUID();
    } while (tasks.some(task => task.id === id));

    return id;
}
function newTask(text, category){
	let id = generateUniqueId(tasks)
	let status = false
	const task = {id, text, status, category}
	tasks.push(task)
	console.table(tasks);
}

function renderTasks(tasks) {
	const shortList = document.querySelector(".shortTasks");
	const longList = document.querySelector(".longTasks"):
	shortList.replaceChildren();
	longList.replaceChildren();
	for (const task of tasks) {
    		console.log(task.text);
		const newTask = document.createElement("li");
		const textNode = document.createTextNode(task.text);
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox"
		const dBtn = document.createElement("button")
		dBtn.type = "button"
		dBtn.textContent = "Delete";


		newTask.append(checkbox, textNode, dBtn);
		if (task.category === "short") {
	   		shortList.append(newTask)
			} else {
	    		longList.append(newTask)
		}
		dBtn.addEventListener("click",function(event) {
			newTask.remove()
		}
		checkbox.addEventListener("change", function(event) {
			console.log("checkbox changed")
			newTask.classList.toggle("completed", checkbox.checked)
		}
	}
}
