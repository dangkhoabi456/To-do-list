import { Task } from "../model layer/model.js"
export class TaskBusiness {
    constructor() {
        this.taskList = [];
        this.localStorageList = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            this.localStorageList.push(value);
            this.taskList = this.localStorageList.map(t => new Task(t.name, t.description, t.deadline, t.id));
        }
    }

    addTask(name, description, deadline, id) {
        const taskName = name;
        const taskDescription = description;
        const taskDeadline = deadline;
        const taskId = id;
        const newTask = new Task(taskName, taskDescription, taskDeadline, taskId);
        if (this.checkTaskRepeat(newTask)) {
            alert("Task existed");
        }
        else if(this.checkValidDeadline(newTask)){
            alert("Deadline invalid");
        } else if(this.checkEmptyInfo(newTask)){
            alert("Empty information");
        } else {
            this.taskList.push(newTask);
            localStorage.setItem(taskId, JSON.stringify(newTask));
        }
    }

    checkTaskRepeat(newTask) {
        for (let task of this.taskList) {
            if (task.getName() === newTask.getName() &&
                task.getDescription() === newTask.getDescription() &&
                task.getDeadline() === newTask.getDeadline() && task.getId() === newTask.getId()) {
                return true;
            }
        }
        return false;
    }

    checkValidDeadline(newTask) {
        let now = new Date();
        let checkTime = new Date(newTask.getDeadline());
        if(checkTime < now){
            return true;
        }
        return false;
    }

    checkEmptyInfo(newTask){
        if(newTask.getName() === "" || newTask.getDescription() === "" || newTask.getDeadline() === ""){
            return true;
        }
        return false;
    }
    getTaskList() {
        return this.taskList;
    }

    deleteTask(id) {
        localStorage.removeItem(id);
        this.taskList = this.taskList.filter(task => task.getId() !== id);
    }

    changeTaskStatus(id, newStatus){
        for(let task of this.taskList){
            if(task.getId() === id){
                task.setStatus() = newStatus;
            }
    }
}

}