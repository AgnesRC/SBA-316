const taskInput = document.getElementById("task-box");
const taskList = document.getElementById("task-list");
const clearButton = document.getElementById("clear-button");
const form = document.querySelector("#todo-list")

function addTask() {
    const newTask = taskInput.value;

    if (newTask == "") {
        return;
    }

    let createdItem = document.createElement("li");
    createdItem.textContent = newTask;
    taskList.appendChild(createdItem);
    taskInput.value = "";
    taskInput.focus();
};

form.addEventListener("click", function(add){
    add.preventDefault();
    addTask();
});

function clearTasks() {
    taskList.innerHTML = "";
};

clearButton.addEventListener("click", clearTasks);