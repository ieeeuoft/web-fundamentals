function addTask() {
	let taskInput = document.getElementById("taskInput");
	let taskList = document.getElementById("taskList");
	if (taskInput.value !== "") {
	  let task = document.createElement("li");
	  task.innerText = taskInput.value;
	  taskList.appendChild(task);
	  taskInput.value = "";
	  }
  }
  