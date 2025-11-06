import { TaskBusiness } from "../business layer/business.js"
import { TaskDisplay } from "./display.js"
import { Utilities } from "../netural layer/utilities.js"

export class EventHandler {
    constructor() {
        this.utilities = new Utilities();
        this.taskBusiness = new TaskBusiness();
        this.taskDisplay = new TaskDisplay();
    }

    handleAddTask() {
        const userInput = this.utilities.getTaskInfo();
        this.taskBusiness.addTask(userInput.nameTask,
            userInput.descriptionTask,
            userInput.deadlineTask,
            userInput.taskId);
    }

    handleDisplayTask(taskList) {
        if (taskList == null) {
            this.taskDisplay.renderNewTasks(this.taskBusiness.getTaskList());
        } else {
            this.taskDisplay.renderNewTasks(taskList);
        }
    }

    handleSwitchTab(navLinks, itemList, element) {
        this.taskDisplay.switchTab(navLinks, itemList, element);
    }

    handleMarkCompleteTask(e) {
        this.taskDisplay.markCompleteTask(e);
    }

    handleMarkCancelTask(e) {
        this.taskDisplay.markCancelTask(e);
    }

    handleRemoveTask(element) {
        this.taskDisplay.removeFromTaskList(element);
    }

    handleDeleteTask(id) {
        this.taskBusiness.deleteTask(id);
    }

    handleRemoveTaskFromCacnceledList(element) {
        this.taskDisplay.removeFromCanceledList(element);
    }

    handleRemoveTaskFromCompletedList(element) {
        this.taskDisplay.removeFromCompletedList(element);
    }

    handleGetTaskList() {
        let taskList = []
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            taskList.push(...value);
        }
        return taskList;
    }

}
