const navLinks = document.querySelectorAll('.nav-link');
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

        console.log("Task Deadline: " + taskDeadline);
        console.log("Task Name: " + taskName);
        console.log("Task Description: " + taskDescription);
        let addTaskForm = document.getElementById("add-task-form");
        addTaskForm.reset();

        //create a new task item
        const task = document.createElement("li");
        task.className = "task";

        const container = document.createElement("div");
        container.className = "task-container";
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
        deadline.setAttribute("datetime", taskDeadline);
        container.appendChild(deadline);

        const complete = document.createElement("button");
        complete.className = "task-complete complete-button";
        complete.textContent = "Complete";
        container.appendChild(complete);

        const cancel = document.createElement("button");
        cancel.className = "task-cancel cancel-button";
        cancel.textContent = "Cancel";
        container.appendChild(cancel);

        let sameTask = false;
        document.querySelectorAll('.task').forEach(item => {
          let nameCreated = item.querySelector('.task-name').textContent;
          let descCreated = item.querySelector('.task-description').textContent;
          let deadlineCreated = item.querySelector('.task-deadline').getAttribute("datetime");
          if (taskName === nameCreated && taskDescription === descCreated && taskDeadline === deadlineCreated) {
            sameTask = true;
          }
        });

        if (sameTask) {
          alert("This task already exists. Please enter a different task.");
          return;
        }

        if(taskName == "" || taskDescription == "" || taskDeadline == ""){
            alert("Please fill in all fields before adding a task.");
            document.getElementById("task-list").removeChild(task);
          };

          let now = new Date();
          let deadlineDate = new Date(taskDeadline);
          if(now > deadlineDate){
            alert("The deadline must be a future date and time.");
            document.getElementById("task-list").removeChild(task);
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
      clone.querySelector(".task-container").appendChild(completeStatus);


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
      cancelStatus.className = "task-cancel-status";
      cancelStatus.textContent = "Task Canceled!";
      clone.querySelector(".task-container").appendChild(cancelStatus);

      document.getElementById("canceled-list").appendChild(clone);
      document.getElementById("task-list").removeChild(taskNode);
    }
  });

  setInterval(function(){
    let currentTime = new Date();
    let overdude = document.querySelectorAll('.task-deadline');
    overdude.forEach(deadline => {
      let deadLineTime = new Date(deadline.getAttribute("datetime"));
      if(currentTime > deadLineTime){
        let taskNode = deadline.closest(".task");
        let cloneNode = taskNode.cloneNode(true);

        cloneNode.querySelector(".task-complete").remove();
        cloneNode.querySelector(".task-cancel").remove();

        let cancelStatus = document.createElement("p");
        cancelStatus.className = "task-complete-status";
        cancelStatus.textContent = "Task Canceled!";
        cloneNode.appendChild(cancelStatus);

        document.getElementById("task-list").removeChild(taskNode);
        document.getElementById("canceled-list").appendChild(cloneNode);
      }
    });
  }, 1000);