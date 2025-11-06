export class Task {
    constructor(name, description, deadline, id) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.id = id;
    }
    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }
    getDeadline() {
        return this.deadline;
    }

    getId() {
        return this.id;
    }
    setName(newName) {
        this.name = newName;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setDeadline(newDeadline) {
        this.deadline = newDeadline;
    }
}