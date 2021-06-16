// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

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

  if (newNameInput.value == "" || newNameInput.value.length < 5) {
    taskNameErr.innerHTML = "Length should be more than 5";
    taskNameErr.style.color = "#ff0000";
    validForm = false;

    //newNameInput.focus();
  } else {
    taskNameErr.innerHTML = "All good ";
    taskNameErr.style.color = "green";
  }

  // check if Assigned to is more than 5 characters

  if (newAssignInput.value == "" || newAssignInput.value.length < 5) {
    assignedErr.innerHTML = "Length should be more than 5";
    assignedErr.style.color = "#ff0000";
    validForm = false;

    //newDescriptInput.focus();
  } else {
    assignedErr.innerHTML = "All good ";
    assignedErr.style.color = "green";
  }

  // check if Description is more than 5 characters

  if (newDescriptInput.value == "" || newDescriptInput.value.length < 5) {
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
      newDescriptInput.value,
      newAssignInput.value,
      newDueDate.value,
      newStatusInput.value
    );

    form.reset();
    taskNameErr.innerHTML = "";
    assignedErr.innerHTML = "";
    newDescriptErr.innerHTML = "";
    dueDateErr.innerHTML = "";
    taskStatusErr.innerHTML = "";

    taskManager.render();
  }
};

form.addEventListener("submit", submitForm);
const taskList = document.querySelector("#tasks-list");
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;
    console.log(parentTask);
  }
});
