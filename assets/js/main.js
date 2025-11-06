import { EventHandler } from "./control layer/eventHandler.js";
import { Task } from "./model layer/model.js";

const eventHandler = new EventHandler();
const navLinks = document.querySelectorAll('.nav-link');
const itemList = document.querySelectorAll('.item-list');

let stored = eventHandler.handleGetTaskList();
console.log(stored);
let taskList = stored.map(t => new Task(t.name, t.description, t.deadline, t.id));
eventHandler.handleDisplayTask(taskList);

document.addEventListener("DOMContentLoaded", () => {
    navLinks.forEach(link => link.addEventListener("click", (e) => {
        if(e.target.classList.contains("tab-display")){
        eventHandler.handleSwitchTab(navLinks, itemList, e.target)
        }
    }
    ));
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-task-button").addEventListener("click", (e) => {
        e.preventDefault();
        eventHandler.handleAddTask();
        console.log(taskList);
        console.log(eventHandler.handleGetTaskList());
        let newTaskList = eventHandler.handleGetTaskList().map(t => new Task(t.name, t.description, t.deadline, t.id));
        eventHandler.handleDisplayTask(newTaskList);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("task-list").addEventListener("click", (e) => {
        if (e.target.classList.contains("task-complete")) {
            eventHandler.handleMarkCompleteTask(e);
        } else if (e.target.classList.contains("task-cancel")) {
            eventHandler.handleMarkCancelTask(e);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("task-list").addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("ti-close")) {
            let task = e.target.closest(".task");
            eventHandler.handleDeleteTask(task.getAttribute('id'));
            eventHandler.handleRemoveTask(task);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("canceled-list").addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("ti-close")) {
            eventHandler.handleDeleteTask(e.target.getAttribute("id"));
            eventHandler.handleRemoveTaskFromCacnceledList(e.target.closest(".task"));
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("completed-list").addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("ti-close")) {
            eventHandler.handleDeleteTask(e.target.getAttribute("id"));
            eventHandler.handleRemoveTaskFromCompletedList(e.target.closest(".task"));
        }
    });
});