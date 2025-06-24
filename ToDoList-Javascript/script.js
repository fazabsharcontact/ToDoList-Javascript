const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  let tasks;
  try {
    const data = JSON.parse(localStorage.getItem("tasks"));
    tasks = Array.isArray(data) ? data : [];
  } catch {
    tasks = [];
  }

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");

    li.onclick = () => toggleComplete(index);
    li.ondblclick = () => deleteTask(index);

    taskList.appendChild(li);
  });
}

function addTask() {
  let tasks;
  try {
    const data = JSON.parse(localStorage.getItem("tasks"));
    tasks = Array.isArray(data) ? data : [];
  } catch {
    tasks = [];
  }

  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({ text, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
}
function toggleComplete(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify("task"));
    loadTasks();
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1); 
  localStorage.setItem("tasks", JSON.stringify("tasks")); 
  loadTasks(); 
}