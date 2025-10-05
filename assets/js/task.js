class Task {
    constructor(name, description, deadline, isDaily = false) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.isDaily = isDaily; //true or false
        this.status = "pending";
    }

    render(){
        const task = document.createElement("li");

        const containner = document.createElement("div");
        containner.className = ("task-containner");

        const name = document.createElement("h3");
        name.className = ("task-name");
        name.textContent = this.name;
        containner.appendChild(name);

        const description = document.createElement("p");
        description.className = ("task-description");
        description.textContent = this.description;
        containner.appendChild(description);

        const deadline = document.createElement("p");
        deadline.className = ("task-deadline");
        deadline.textContent = "Deadline: " + this.deadline;
        deadline.setAttribute("datetieme", this.deadline);
        containner.appendChild(deadline);

        if(isDailt = true){
            task.classList.add("daily-task");
        }

        task.appendChild(containner);
    }
}