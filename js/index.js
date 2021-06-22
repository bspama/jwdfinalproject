// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

//In `js/index.js`, near the top of the file, after _instantiating_ `taskManager`, `load` the tasks with `taskManager.load()` and render them with `taskManager.render()`.
taskManager.load();
taskManager.render();

//create task
// This is where we can test our code

// TaskManager.addTask("Boots", "Is Cool!", "Shalveena", "21/05/2021", "Done");
// console.log(TaskManager.tasks);

//1. Create a `taskHtml` variable with the result of calling the `createTaskHtml` function, making sure to pass a value for each parameter.

// const taskHtml = createTaskHtml(
//   "Buy Groceries",
//   "Shalveena",
//   "To do",
//   "11-06-2021",
//   "Testing"
// );
// // console.log(taskHtml);

// select "Add" button element from index.html
// const addBtn = document.querySelector("#addBtn");
const form = document.querySelector("#taskForm");

//Grey out past Due Dates
const today = new Date().toISOString().split('T')[0];
document.getElementsByClassName("dueDate")[0].setAttribute('min', today);

const submitForm = (event) => {
  event.preventDefault();
  let validForm = true;

  const newNameInput = document.querySelector("#new-name");
  const newAssignInput = document.querySelector("#new-assign");
  const newDescriptInput = document.querySelector("#new-descript");
  const newStatusInput = document.querySelector("#new-status");
  const newDueDate = document.querySelector("#new-duedate");
  const taskNameErr = document.querySelector("#tn-error-msg");
  const assignedErr = document.querySelector("#at-error-msg");
  const newDescriptErr = document.querySelector("#nd-error-msg");
  const dueDateErr = document.querySelector("#dd-error-msg");
  const taskStatusErr = document.querySelector("#ts-error-msg");

  // console.log("name: " + newNameInput.value);

  // check if Task Name is more than 5 characters

  if (newNameInput.value.trim() == "" || newNameInput.value.length < 5) {
    taskNameErr.innerHTML = "Length should be more than 5";
    taskNameErr.style.color = "#ff0000";
    validForm = false;

    //newNameInput.focus();
  } else {
    taskNameErr.innerHTML = "All good ";
    taskNameErr.style.color = "green";
  }

  // check if Assigned to is more than 5 characters

  if (newAssignInput.value.trim() == "" || newAssignInput.value.length < 5) {
    assignedErr.innerHTML = "Length should be more than 5";
    assignedErr.style.color = "#ff0000";
    validForm = false;

    //newDescriptInput.focus();
  } else {
    assignedErr.innerHTML = "All good ";
    assignedErr.style.color = "green";
  }

  // check if Description is more than 5 characters

  if (newDescriptInput.value.trim() == "" || newDescriptInput.value.length < 5) {
    newDescriptErr.innerHTML = "Length should be more than 5";
    newDescriptErr.style.color = "#ff0000";
    validForm = false;
    //newDescriptInput.focus();
  } else {
    newDescriptErr.innerHTML = "All good ";
    newDescriptErr.style.color = "green";
  }

  // check that Due Date is not empty

  if (newDueDate.value == "") {
    dueDateErr.innerHTML = "Please enter a Due Date";
    dueDateErr.style.color = "#ff0000";
    validForm = false;
  } else {
    dueDateErr.innerHTML = "All good ";
    dueDateErr.style.color = "green";
  }

  // check that Task Status is not empty

  if (newStatusInput.value == "Choose...") {
    taskStatusErr.innerHTML = "Please enter a Task Status";
    taskStatusErr.style.color = "#ff0000";
    validForm = false;
  } else {
    taskStatusErr.innerHTML = "All good ";
    taskStatusErr.style.color = "green";
  }

  // if the information is valid, run the addTask function and the render function.
  if (validForm) {
    taskManager.addTask(
      newNameInput.value,
      newAssignInput.value,
      newStatusInput.value,
      newDueDate.value,
      newDescriptInput.value
    );

    form.reset();
    taskNameErr.innerHTML = "";
    assignedErr.innerHTML = "";
    newDescriptErr.innerHTML = "";
    dueDateErr.innerHTML = "";
    taskStatusErr.innerHTML = "";
    taskManager.save();
    taskManager.render();
  }

  //Clear all the fields and errors when Reset Button is clicked
  const reset = document.querySelector("#resetBtn");
  reset.addEventListener("click",() => {
      taskNameErr.innerHTML = "";
      assignedErr.innerHTML = "";
      newDescriptErr.innerHTML = "";
      dueDateErr.innerHTML = "";
      taskStatusErr.innerHTML = "";
  })

};

//Event Listener for Submit Event (ie Click Add Button) for the Form
form.addEventListener("submit", submitForm);

const taskList = document.querySelector("#tasks-list");

//Event Listener to check when Mask as Done Button is clicked
taskList.addEventListener("click", (event) => {
  //Checks whether the target has class called done-button and if it does saves it into the parentTask
  if (event.target.classList.contains("done-button")) {  
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;
    //console.log(parentTask);
    //Get the taskID of the parentTask and converts into integer
    const taskID = parseInt(parentTask.dataset.taskId);
    //Called the getTaskbyID method and saves it into task variable and changes the status to Done and render the task. 
    const task = taskManager.getTaskById(taskID);
    task.status = "Done";
    //In `js/index.js`, after both adding a new task and updating a task's status to done, call `taskManager.save()` to save the tasks to `localSorage`.
    taskManager.save() 
    taskManager.render();
  }

});




// console.log(taskManager.tasks);
