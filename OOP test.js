//MODEL
//Task class
class Task {
    #taskName;
    #taskDescription;
    #taskDeadline;

    constructor(taskName, taskDescription, taskDeadline) {
        this.#taskName = taskName;
        this.#taskDescription = taskDescription;
        this.#taskDeadline = taskDeadline;
    }

    get taskName() {
        return this.#taskName;
    }

    get taskDescription() {
        return this.#taskDescription;
    }

    get taskDeadline() {
        return this.#taskDeadline;
    }

    set taskName(newTaskName) {
        this.#taskName = newTaskName;
    }
    set taskDescription(newTaskDescription) {
        this.#taskDescription = newTaskDescription;
    }
    set taskDeadline(newTaskDeadline) {
        this.#taskDeadline = newTaskDeadline;
    }
}

//Complete Task class
class CompleteTask extends Task {
    #status;

    constructor(taskName, taskDescription, taskDeadline, status) {
        super(taskName, taskDescription, taskDeadline);
        this.#status = status;
    }
    get status() {
        return this.#status;
    }
    set status(newStatus) {
        this.#status = newStatus;
    }
}

//Incomplete Task class
class IncompleteTask extends Task {
    #status;

    constructor(taskName, taskDescription, taskDeadline, status) {
        super(taskName, taskDescription, taskDeadline);
        this.#status = status;
    }
    get status() {
        return this.#status;
    }
    set status(newStatus) {
        this.#status = newStatus;
    }
}
//VIEW
//main