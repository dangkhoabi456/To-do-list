/*const navLinks = document.querySelectorAll('.nav-link');
const itemList = document.querySelectorAll('.item-list');


navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Bỏ active ở tất cả link
    navLinks.forEach(item => item.classList.remove('active'));
    // Thêm active vào link được click
    this.classList.add('active');

    itemList.forEach(section => section.style.display = 'none');
    const targetId = this.getAttribute('data-target');
    document.getElementById(targetId).style.display = 'block';

  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('add-task-button').addEventListener('click', function (event) {
    event.preventDefault();
    const taskName = document.getElementById("task-name").value;
    const taskDescription = document.getElementById("task-description").value;
    const taskDeadline = document.getElementById("task-deadline").value;

    console.log("Task Deadline: " + taskDeadline);
    console.log("Task Name: " + taskName);
    console.log("Task Description: " + taskDescription);

    //tạo task mới
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

    //kiểm tra có trùng task không
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

    //kiểm tra xem ô input có trống không
    if (taskName == "" || taskDescription == "" || taskDeadline == "") {
      alert("Please fill in all fields before adding a task.");
      return;
    };

    //kiểm tra xem time có phải đến từ quá khứ không
    let now = new Date();
    let deadlineDate = new Date(taskDeadline);
    if (now > deadlineDate) {
      alert("The deadline must be a future date and time.");
      return;
    };

    //xác nhận có phải là daily task không
    let dailyTaskChecked = document.getElementById("daily-task-checked");
    if (dailyTaskChecked.checked) {
      task.classList.add("daily-task");
      alert("Add task completed!");
    }
    document.getElementById("task-list").appendChild(task);
    let addTaskForm = document.getElementById("add-task-form");
    addTaskForm.reset();
  });
});

//đánh dấu task đã complete
document.getElementById("task-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("task-complete")) {
    let taskNode = e.target.closest(".task");
    taskNode.querySelector(".task-complete").remove();
    taskNode.querySelector(".task-cancel").remove();

    let completeStatus = document.createElement("p");
    completeStatus.className = "task-complete-status";
    completeStatus.textContent = "Task completed!";
    taskNode.querySelector(".task-container").appendChild(completeStatus);


    document.getElementById("completed-list").appendChild(taskNode);

  }
});

//đánh dấu task đã cancel
document.getElementById("task-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("task-cancel")) {
    let taskNode = e.target.closest(".task");
    taskNode.querySelector(".task-complete").remove();
    taskNode.querySelector(".task-cancel").remove();

    let cancelStatus = document.createElement("p");
    cancelStatus.className = "task-cancel-status";
    cancelStatus.textContent = "Task canceled!";
    taskNode.querySelector(".task-container").appendChild(cancelStatus);

    document.getElementById("canceled-list").appendChild(taskNode);

  }
});

//tự động cancel task khi qua deadline
setInterval(function () {
  let currentTime = new Date();
  let overdude = document.querySelectorAll('.task-deadline');
  overdude.forEach(deadline => {
    let deadLineTime = new Date(deadline.getAttribute("datetime"));
    if (currentTime > deadLineTime) {
      let taskNode = deadline.closest(".task");
      let cloneNode = taskNode.cloneNode(true);

      cloneNode.querySelector(".task-complete").remove();
      cloneNode.querySelector(".task-cancel").remove();

      let cancelStatus = document.createElement("p");
      cancelStatus.className = "task-cancel-status";
      cancelStatus.textContent = "Task canceled!";
      cloneNode.querySelector(".task-container").appendChild(cancelStatus);

      document.getElementById("task-list").removeChild(taskNode);
      document.getElementById("canceled-list").appendChild(cloneNode);
    }
  });
}, 1000);

//tìm task
document.getElementById('search-button').addEventListener("click", function (event) {
  event.preventDefault();
  itemList.forEach(section => section.style.display = 'none');
  navLinks.forEach(item => item.classList.remove('active'));

  const taskSearch = document.getElementById("search").value;
  const taskTitleExisted = document.querySelectorAll(".task-name");

  // Dùng find, sử dụng Array.from để chuyển đổi NodeList thanh Array để xài find
  const foundTask = Array.from(taskTitleExisted).find(task => task.textContent === taskSearch);

  if (foundTask) {
    // Nếu tìm thấy
    document.getElementById("result-section").style.display = "block";

    let taskNode = foundTask.closest(".task");
    taskNode.classList.remove("task");
    taskNode.classList.add("result-task");

    document.getElementById("result-list").appendChild(taskNode);
  } else {
    // Không tìm thấy
    document.getElementById("result-list").innerHTML = "<li>No task found.</li>";
  }
});

//đánh dấu task đã cancel trong result
document.getElementById("result-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("task-cancel")) {
    let taskNode = e.target.closest(".result-task");
    taskNode.querySelector(".task-complete").remove();
    taskNode.querySelector(".task-cancel").remove();

    let cancelStatus = document.createElement("p");
    cancelStatus.className = "task-cancel-status";
    cancelStatus.textContent = "Task canceled!";
    taskNode.querySelector(".task-container").appendChild(cancelStatus);

    document.getElementById("canceled-list").appendChild(taskNode);
  }
});

//đánh dấu task đã complete trong result
document.getElementById("result-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("task-complete")) {
    let taskNode = e.target.closest(".result-task");
    taskNode.querySelector(".task-complete").remove();
    taskNode.querySelector(".task-cancel").remove();

    let completeStatus = document.createElement("p");
    completeStatus.className = "task-complete-status";
    completeStatus.textContent = "Task completed!";
    taskNode.querySelector(".task-container").appendChild(completeStatus);

    document.getElementById("completed-list").appendChild(taskNode);
  }
});

//chuyển lại các task từ result-task sang task
document.getElementById("task").addEventListener("click", function () {
  let taskLost = document.querySelectorAll('.result-task');
  let taskComplete = document.querySelectorAll('.result-task .task-complete-status');
  let taskCancel = document.querySelectorAll('.result-task .task-cancel-status');

  //do nothing
  if (taskLost.length == 0) {

  }
  //không thêm các task đã complete và cancel vào task
  else if (taskComplete.length > 0 || taskCancel.length > 0) {
    taskComplete.forEach(complete => {
      complete.remove();
    });
    taskCancel.forEach(cancel => {
      cancel.remove();
    });

  } else {
    taskLost.forEach(task => {
      task.classList.remove("result-task");
      task.classList.add("task");
      document.getElementById("task-list").appendChild(task);
    });
  }
}); */

/*----------------------------------------CONTROLLER------------------------------------------------------*/
//chứa hàm xử lý sự kiện, logic của ứng dụng

//đánh dấu task complete
function markCompleteTask(e) {
  if (e.target.classList.contains("task-complete")) {
    let taskNode = e.target.closest(".task");
    taskNode.querySelector(".task-complete").remove();
    taskNode.querySelector(".task-cancel").remove();

    let completeStatus = document.createElement("p");
    completeStatus.className = "task-complete-status";
    completeStatus.textContent = "Task completed!";
    taskNode.querySelector(".task-container").appendChild(completeStatus);

    document.getElementById("completed-list").appendChild(taskNode);
  }
}

//đánh dấu task cancel
function markCancelTask(e) {
  if (e.target.classList.contains("task-cancel")) {
    let taskNode = e.target.closest(".task");
    taskNode.querySelector(".task-complete").remove();
    taskNode.querySelector(".task-cancel").remove();

    let cancelStatus = document.createElement("p");
    cancelStatus.className = "task-cancel-status";
    cancelStatus.textContent = "Task canceled!";
    taskNode.querySelector(".task-container").appendChild(cancelStatus);

    document.getElementById("canceled-list").appendChild(taskNode);
  }
}

  //ham thêm task mới
  function addTask(task){
    document.getElementById("task-list").appendChild(task);
  }

  function createTask(taskAttribute){
    const [taskName, taskDescription, taskDeadline] = taskAttribute;

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


    return task;
  }

  //ham nhan user input
  function acceptUserInput(){
    const taskName = document.getElementById("task-name").value;
    const taskDescription = document.getElementById("task-description").value;
    const deadLine = document.getElementById("task-deadline").value;
    let taskAttribute = [taskName, taskDescription, deadLine];

    console.log(taskAttribute);
    return taskAttribute;

  }
  //ham hien thi va an cac section khong can thiet
  function displaySection(sectionIdToShow){
    const navLinks = document.querySelectorAll('.nav-link');
    const itemList = document.querySelectorAll('.item-list');


  }
/*----------------------------------------Main------------------------------------------------------*/
//nơi xử lý sự kiện, gọi hàm từ controller
//them task moi 
 document.getElementById('add-task-button').addEventListener('click', function (event) {
  event.preventDefault();
  const taskAttribute = acceptUserInput();
  const task = createTask(taskAttribute);
  addTask(task);
  console.log(taskAttribute);
  console.log("Hello");
 });

document.querySelectorAll('.nav-link').forEach(link => {link.addEventListener('click', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const itemList = document.querySelectorAll('.item-list');
   navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');

    itemList.forEach(section => section.style.display = 'none');
    const targetId = this.getAttribute('data-target');
    document.getElementById(targetId).style.display = 'block';

})});
 