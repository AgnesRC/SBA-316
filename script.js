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

    createdItem.classList.add("task");
    createdItem.addEventListener("click", function () {
        createdItem.style.backgroundColor = "#353535";
    });
};

form.addEventListener("click", function(add){
    add.preventDefault();
    addTask();
});

function clearTasks() {
    taskList.innerHTML = "";
};

clearButton.addEventListener("click", clearTasks);

const suggestedTaskList = document.getElementById("suggested-tasks")

function addSuggestedTask() {
    let listItems = suggestedTaskList.querySelectorAll("li");
    
    listItems.forEach(item => {
        item.addEventListener("click", function () {
            suggestedTaskList.removeChild(item);
            taskList.appendChild(item);
            item.classList.add("task");
            
            item.addEventListener("click", function () {
                item.style.backgroundColor = "#353535";
            });
            
        });
    });
}
addSuggestedTask();