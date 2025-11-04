const SELECTORS = {
  navLinks: '.nav-link',
  task: '.task',
  itemList: '.item-list',
  taskList: '#task-list',
  completedList: '#completed-list',
  canceledList: '#canceled-list',
  resultList: '#result-list',
  addTaskButton: '#add-task-button',
  searchButton: '#search-button',
  taskName: '.task-name',
  taskDescription: '.task-description',
  taskDeadline: '.task-deadline',
  taskStatus: '.task-status',
};

//Utilities
const textCapitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
//Check duplicate task
const checkDuplicateTask = (name, description, deadline) => {
  const taskList = document.querySelectorAll(SELECTORS.task);
  for (const task of taskList) {
    const taskName = task.querySelector(SELECTORS.taskName).textContent;
    const taskDescription = task.querySelector(SELECTORS.taskDescription).textContent;
    const taskDeadline = task.querySelector(SELECTORS.taskDeadline).textContent;
    if (taskName === name && taskDescription === description && taskDeadline === deadline) {
      return true;
    }
  }
  return false;
};