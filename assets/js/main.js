import { EventHandler } from "./control layer/eventHandler.js";
const eventHandler = new EventHandler();
const navLinks = document.querySelectorAll('.nav-link');
const itemList = document.querySelectorAll('.item-list');
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-task-button").addEventListener("click", (e) => {
        e.preventDefault(); 
        eventHandler.handleAddTask();
    });
});

eventHandler.handleSwitchTab(navLinks, itemList);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("task-complete")){
            eventHandler.handleMarkCompleteTask(e);
        } else if(e.target.classList.contains("task-cancel")){
            eventHandler.handleMarkCancelTask(e);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("task-list").addEventListener("click", (e) => {
        e.preventDefault();
        if(e.target.classList.contains("ti-close")){
            eventHandler.handleDeleteTask(e.target.getAttribute("id"));
            eventHandler.handleRemoveTask(e.target.closest(".task"));
        } 
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("canceled-list").addEventListener("click", (e) => {
        e.preventDefault();
        if(e.target.classList.contains("ti-close")){
            eventHandler.handleDeleteTask(e.target.getAttribute("id"));
            eventHandler.handleRemoveTaskFromCacnceledList(e.target.closest(".task"));
        } 
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("completed-list").addEventListener("click", (e) => {
        e.preventDefault();
        if(e.target.classList.contains("ti-close")){
            eventHandler.handleDeleteTask(e.target.getAttribute("id"));
            eventHandler.handleRemoveTaskFromCompletedList(e.target.closest(".task"));
        } 
    });
});
