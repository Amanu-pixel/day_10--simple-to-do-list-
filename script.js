function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
 
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button onclick="markComplete(this)">✅</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function markComplete(button) {
  const task = button.parentElement.parentElement;
  task.classList.toggle("completed");
}

function deleteTask(button) {
  const task = button.parentElement.parentElement;
  task.remove();
}
