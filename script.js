console.log("Browser Height: " + window.innerHeight + " and Browser Width: " + innerWidth);

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
        window.alert("Task Completed!")
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
                window.alert("Task Completed!")
            });
            
        });
    });
}
addSuggestedTask();

const upcomingList = document.getElementById("upcoming-list")
const fragment = document.createDocumentFragment();
const suggestedItem1 = document.createElement("li");
suggestedItem1.textContent = "Schedule Appointment";
suggestedItem1.setAttribute("class", "upcoming-task")
const suggestedItem2 = document.createElement("li");
suggestedItem2.textContent = "Change Oil";
suggestedItem2.setAttribute("class", "upcoming-task")
fragment.appendChild(suggestedItem1);
fragment.appendChild(suggestedItem2);
upcomingList.appendChild(fragment)

