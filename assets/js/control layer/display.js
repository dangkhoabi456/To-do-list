export class TaskDisplay {
    renderNewTask(newTask) {
        const title = document.createElement("h3");
        title.className = "task-name";
        title.textContent = newTask.getName();

        const description = document.createElement("p");
        description.className = "task-description";
        description.textContent = newTask.getDescription();

        const deadline = document.createElement("p");
        deadline.className = "task-deadline";
        deadline.textContent = "Deadline: " + newTask.getDeadline();
        deadline.setAttribute("datetime", newTask.getDeadline());

        const complete = document.createElement("button");
        complete.className = "task-complete complete-button";
        complete.textContent = "Complete";

        const cancel = document.createElement("button");
        cancel.className = "task-cancel cancel-button";
        cancel.textContent = "Cancel";
        
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "ti-close";

        const renderTask = [title, description, deadline, complete, cancel, deleteIcon];

        const container = document.createElement("div");
        container.className = "task-container";
            for(let i = 0; i < renderTask.length ; i++){
            container.appendChild(renderTask[i]);
        }

        container.setAttribute("id", newTask.getId());
        return container
    }

    displayTask(container) {
        const task = document.createElement("li");
        task.className = "task";
        task.appendChild(container);
        document.getElementById("task-list").appendChild(task);
        let addTaskForm = document.getElementById("add-task-form");
        addTaskForm.reset();
    }

    switchTab(navLinks, itemList) {
        navLinks.forEach(links =>{
            links.addEventListener('click', function () {
                navLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
                itemList.forEach(section => section.style.display = 'none');
                const targetId = this.getAttribute('data-target');
                document.getElementById(targetId).style.display = 'block';
            });
        });
    }

    markCompleteTask(e){
    let taskNode = e.target.closest(".task");
    taskNode.querySelector(".task-complete").remove();
    taskNode.querySelector(".task-cancel").remove();

    let completeStatus = document.createElement("p");
    completeStatus.className = "task-complete-status";
    completeStatus.textContent = "Task completed!";
    taskNode.querySelector(".task-container").appendChild(completeStatus);
    document.getElementById("completed-list").appendChild(taskNode);
    }

    markCancelTask(e){
    let taskNode = e.target.closest(".task");
    taskNode.querySelector(".task-complete").remove();
    taskNode.querySelector(".task-cancel").remove();

    let cancelStatus = document.createElement("p");
    cancelStatus.className = "task-cancel-status";
    cancelStatus.textContent = "Task canceled!";
    taskNode.querySelector(".task-container").appendChild(cancelStatus);
    document.getElementById("canceled-list").appendChild(taskNode);
    }

    removeFromTaskList(e){
        document.getElementById("task-list").removeChild(e);
    }

    removeFromCanceledList(e){
        document.getElementById("canceled-list").removeChild(e);
    }

    removeFromCompletedList(e){
        document.getElementById("completed-list").removeChild(e);
    }
}