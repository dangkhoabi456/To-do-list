export class Task {
    constructor(name, description, deadline, id) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.id = id;
        this.status = "pending";
    }
    getName() {
        return this.name;
    }

    getStatus(){
        return this.status;
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

    setStatus(newStatus){
        this.status = newStatus;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setDeadline(newDeadline) {
        this.deadline = newDeadline;
    }
}