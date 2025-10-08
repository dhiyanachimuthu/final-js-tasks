
const input = document.getElementById("text");
const dueTimeInput = document.getElementById("dueTime");
const allTasksDiv = document.getElementById("allTasks");
const completedTasksDiv = document.getElementById("completedTasks");
const deletedTasksDiv = document.getElementById("deletedTasks");

function showTaskSection() {
  document.getElementById("taskSection").classList.remove("hidden");
  document.getElementById("taskBtn").style.display = "none";
}

function add() {
  const task = input.value.trim();
  const dueTime = dueTimeInput.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }
  if (dueTime === "") {
    alert("Please set a due date and time");
    return;
  }
  if(task.length<12){
    alert("Task must contain atleast 12 characters..");
    return;
  }
  if(/^\d+$/.test(task)){
    alert("Invalid entry");
    return;
  }
const selectedDate = new Date(dueTime);
const now = new Date();

if (selectedDate < now) {
  alert("Due date/time cannot be in the past!");
  return;
}
  createTaskBox(task, dueTime, allTasksDiv);
  input.value = "";
  dueTimeInput.value = "";
  input.focus();
}

function createTaskBox(task, dueTime, parentDiv) {
  const newBox = document.createElement("div");
  newBox.className = "task-box";

  const taskText = document.createElement("span");
  taskText.textContent = task;

  const timeSpan = document.createElement("span");
  const formattedTime = new Date(dueTime).toLocaleString();
  timeSpan.textContent = "Due: " + formattedTime;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";

  newBox.appendChild(taskText);
  newBox.appendChild(timeSpan);
  newBox.appendChild(completeBtn);
  newBox.appendChild(deleteBtn);
  parentDiv.appendChild(newBox);

  completeBtn.addEventListener("click", () => {
    const completedTag = document.createElement("span");
    completedTag.textContent = "Completed";
    completedTag.classList.add("completed-tag");

    completeBtn.remove();
    deleteBtn.remove();

    newBox.appendChild(completedTag);
    completedTasksDiv.appendChild(newBox);
  });

  deleteBtn.addEventListener("click", () => {
    newBox.remove();
    deletedTasksDiv.appendChild(newBox);
    completeBtn.remove();
    deleteBtn.remove();
  });
}

function showSection(sectionId) {
  allTasksDiv.classList.add("hidden");
  completedTasksDiv.classList.add("hidden");
  deletedTasksDiv.classList.add("hidden");

  document.getElementById(sectionId).classList.remove("hidden");
}