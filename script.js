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
let tasks = []
shortForm.addEventListener('submit', function(event) {
	console.log('form submitted');
	event.preventDefault();
	if (document.querySelector(".inpShort").value.trim() != "") {
		let taskText = document.querySelector(".inpShort").valu
		newTask(taskText, "short");
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
	console.table(tasks)
}
