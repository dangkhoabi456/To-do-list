import { TaskBusiness } from "../business layer/business.js"
import { TaskDisplay } from "./display.js"
import {Utilities} from "../netural layer/utilities.js"

export class EventHandler {
constructor(){
    this.utilities = new Utilities();
    this.taskBusiness = new TaskBusiness();
    this.taskDisplay = new TaskDisplay();
}

    handleAddTask() {
        const userInput = this.utilities.getTaskInfo();
        const newTask = this.taskBusiness.addTask(userInput.nameTask, userInput.descriptionTask, userInput.deadlineTask, userInput.taskId);
        if(this.taskBusiness.checkTaskRepeat(newTask)){
            alert("Task existed")
            return;
        }
        this.taskBusiness.increaseDataStorage(newTask);
        const renderTask = this.taskDisplay.renderNewTask(newTask);
        this.taskDisplay.displayTask(renderTask);
    }

    handleSwitchTab(navLinks, itemList) {
        this.taskDisplay.switchTab(navLinks, itemList);
    }

    handleMarkCompleteTask(e){
        this.taskDisplay.markCompleteTask(e);
    }

    handleMarkCancelTask(e){
        this.taskDisplay.markCancelTask(e);
    }

    handleDeleteTask(id){
        this.taskBusiness.deleteTask(id);
    }

    handleRemoveTask(element){
        this.taskDisplay.removeFromTaskList(element);
    }

    handleRemoveTaskFromCacnceledList(element){
        this.taskDisplay.removeFromCanceledList(element);
    }

    handleRemoveTaskFromCompletedList(element){
        this.taskDisplay.removeFromCompletedList(element);
    }
}
