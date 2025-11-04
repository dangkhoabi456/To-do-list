export class Utilities{
    generateId(){
        return Math.floor((Math.random() * 100) + 1);
    }

    getTaskInfo(){
        const name = document.getElementById("task-name").value;
        const description = document.getElementById("task-description").value;
        const deadline = document.getElementById("task-deadline").value;
        const id = this.generateId();
        const task = {nameTask : name, descriptionTask : description, deadlineTask : deadline, taskId : id};
        return task;
    }
}