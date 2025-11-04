import {Task} from "../model layer/model.js"
export class TaskBusiness{
static taskList = [];
    addTask(name, description, deadline, id){
        const taskName = name;
        const taskDescription = description;
        const taskDeadline = deadline;
        const taskId = id;
        const newTask = new Task(taskName, taskDescription, taskDeadline, taskId);
        return newTask;
    }
    checkTaskRepeat(newTask){
        for(let task of TaskBusiness.taskList){
            if(task.getName() === newTask.getName() &&
                task.getDescription() === newTask.getDescription() &&
                task.getDeadline() === newTask.getDeadline() && task.getId() === newTask.getId()){
                return true;
            }
        }
    }

    increaseDataStorage(newTask){
        TaskBusiness.taskList.push(newTask);
    }

    deleteTask(id){
            for(let task of TaskBusiness.taskList){
            if(task.getId() === id){
                TaskBusiness.taskList.remove(task);
            }
        }
    }
}