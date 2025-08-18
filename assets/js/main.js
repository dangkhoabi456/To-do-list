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

        console.log("Task Deadline: " + taskDeadline);
        console.log("Task Name: " + taskName);
        console.log("Task Description: " + taskDescription);
        let addTaskForm = document.getElementById("add-task-form");
        addTaskForm.reset();

    });
});
