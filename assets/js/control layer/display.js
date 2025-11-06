export class TaskDisplay {
    renderNewTasks(taskList) {
        document.getElementById("task-list").innerHTML = "";

        for (let task of taskList) {
            const title = document.createElement("h3");
            title.className = "task-name";
            title.textContent = task.getName();

            const description = document.createElement("p");
            description.className = "task-description";
            description.textContent = task.getDescription();

            const deadline = document.createElement("p");
            deadline.className = "task-deadline";
            deadline.textContent = "Deadline: " + task.getDeadline();
            deadline.setAttribute("datetime", task.getDeadline());

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

            for (let i = 0; i < renderTask.length; i++) {
                container.appendChild(renderTask[i]);
            }
            this.displayTask(container, task.getId());
        }
    }

    displayTask(container, id) {
        const task = document.createElement("li");
        task.className = "task";
        task.setAttribute("id", id);
        task.appendChild(container);
        document.getElementById("task-list").appendChild(task);
        let addTaskForm = document.getElementById("add-task-form");
        addTaskForm.reset();
    }

    switchTab(navLinks, itemList, element) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            element.classList.add('active');
            itemList.forEach(section => section.style.display = 'none');
            const targetId = element.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'block';
        });
    }

    markCompleteTask(e) {
        let taskNode = e.target.closest(".task");
        taskNode.querySelector(".task-complete").remove();
        taskNode.querySelector(".task-cancel").remove();

        let completeStatus = document.createElement("p");
        completeStatus.className = "task-complete-status";
        completeStatus.textContent = "Task completed!";
        taskNode.querySelector(".task-container").appendChild(completeStatus);
        document.getElementById("completed-list").appendChild(taskNode);
    }

    markCancelTask(e) {
        let taskNode = e.target.closest(".task");
        taskNode.querySelector(".task-complete").remove();
        taskNode.querySelector(".task-cancel").remove();

        let cancelStatus = document.createElement("p");
        cancelStatus.className = "task-cancel-status";
        cancelStatus.textContent = "Task canceled!";
        taskNode.querySelector(".task-container").appendChild(cancelStatus);
        document.getElementById("canceled-list").appendChild(taskNode);
    }

    removeFromTaskList(e) {
        document.getElementById("task-list").removeChild(e);
    }

    removeFromCanceledList(e) {
        document.getElementById("canceled-list").removeChild(e);
    }

    removeFromCompletedList(e) {
        document.getElementById("completed-list").removeChild(e);
    }
}