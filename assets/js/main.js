const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const itemList = document.querySelectorAll('.item-list');


  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Bỏ active ở tất cả link
      navLinks.forEach(item => item.classList.remove('active'));
      // Thêm active vào link được click
      this.classList.add('active');

      itemList.forEach(section => section.style.display = 'none');
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).style.display = 'block';

    });
  });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-task-button').addEventListener('click', function(event){
        event.preventDefault();
        const taskName = document.getElementById("task-name").value;
        const taskDescription = document.getElementById("task-description").value;
        const taskDeadline = document.getElementById("task-deadline").value;

        

        const input = document.getElementById("task-name");
        input.addEventListener("input", function() {
          let length = taskName.length;
          let max = maxlength;
          if(length > max){
            alert("Task name cannot exceed 20 characters.");
            addTaskForm.reset();
          }
        });

        console.log("Task Deadline: " + taskDeadline);
        console.log("Task Name: " + taskName);
        console.log("Task Description: " + taskDescription);
        let addTaskForm = document.getElementById("add-task-form");
        addTaskForm.reset();

        //create a new task item
        const task = document.createElement("li");
        task.className = "task";

        const container = document.createElement("div");
        container.className = "task-container task-container";
        task.appendChild(container);

        const title = document.createElement("h3");
        title.className = "task-name";
        title.textContent = taskName;
        container.appendChild(title);

        const description = document.createElement("p");
        description.className = "task-description";
        description.textContent = taskDescription;
        container.appendChild(description);

        const deadline = document.createElement("p");
        deadline.className = "task-deadline";
        deadline.textContent = "Deadline: " + taskDeadline;
        container.appendChild(deadline);

        const complete = document.createElement("button");
        complete.className = "task-complete complete-button";
        complete.textContent = "Complete";
        container.appendChild(complete);

        const cancel = document.createElement("button");
        cancel.className = "task-cancel cancel-button";
        cancel.textContent = "Cancel";
        container.appendChild(cancel);

      if(taskName == "" || taskDescription == "" || taskDeadline == ""){
        alert("Please fill in all fields before adding a task.");
      };
        document.getElementById("task-list").appendChild(task);
    });
});

  document.getElementById("task-list").addEventListener("click", function(e) {
    if (e.target.classList.contains("task-complete")) {
      let taskNode = e.target.closest(".task");
      let clone = taskNode.cloneNode(true);
      clone.querySelector(".task-complete").remove();
      clone.querySelector(".task-cancel").remove();

      let completeStatus = document.createElement("p");
      completeStatus.className = "task-complete-status";
      completeStatus.textContent = "Task Completed!";
      clone.appendChild(completeStatus);


      document.getElementById("completed-list").appendChild(clone);
      document.getElementById("task-list").removeChild(taskNode);
    }
  });
  document.getElementById("task-list").addEventListener("click", function(e) {
    if (e.target.classList.contains("task-cancel")) {
      let taskNode = e.target.closest(".task");
      let clone = taskNode.cloneNode(true);
      clone.querySelector(".task-complete").remove();
      clone.querySelector(".task-cancel").remove();
      
      let cancelStatus = document.createElement("p");
      cancelStatus.className = "task-complete-status";
      cancelStatus.textContent = "Task Canceled!";
      clone.appendChild(cancelStatus);

      document.getElementById("canceled-list").appendChild(clone);
      document.getElementById("task-list").removeChild(taskNode);
    }
  });
