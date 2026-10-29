function addShortTask() {
	let taskText = document.getElementById("textShort").textContent;
	const shortTasks = document.getElementById("shortTasks")
	const newShortTask = createElement("li")
	newShortTask.appendChild(document.createTextNode(taskText))
}
const btnShort = document.getElementById("btnShort");

btnShort.addEventListener('click', () => {
	console.log('button clicked')
	addShortTask()
})
