var tasks = [];

// Add a new task to the list
function addTask() {
  var task = document.getElementById("new-task").value;
  tasks.push(task);

  // Refresh the list of tasks
  updateTasks();
}

// Update the list of tasks
function updateTasks() {
  var ul = document.getElementById("tasks");
  ul.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.textContent = tasks[i];
    ul.appendChild(li);
  }
}

// Listen for the button click event
document.getElementById("add-task").addEventListener("click", addTask);

// Initialize the list of tasks
updateTasks();