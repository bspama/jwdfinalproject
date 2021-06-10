function validFormFieldInput(data) {
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
    //newNameInput.focus();
  } else {
    taskNameErr.innerHTML = "All good ";
    taskNameErr.style.color = "green";
  }

// check if Assigned to is more than 5 characters

if (newAssignInput.value == "" || newAssignInput.value.length < 5) {
    assignedErr.innerHTML = "Length should be more than 5";
    assignedErr.style.color = "#ff0000";
    //newDescriptInput.focus();
  } else {
    assignedErr.innerHTML = "All good ";
    assignedErr.style.color = "green";
  }

// check if Description is more than 5 characters

if (newDescriptInput.value == "" || newDescriptInput.value.length < 5) {
    newDescriptErr.innerHTML = "Length should be more than 5";
    newDescriptErr.style.color = "#ff0000";
    //newDescriptInput.focus();
  } else {
    newDescriptErr.innerHTML = "All good ";
    newDescriptErr.style.color = "green";
  }

// check that Due Date is not empty

if (newDueDate.value == "") {
    dueDateErr.innerHTML = "Please enter a Due Date";
    dueDateErr.style.color = "#ff0000";
  } else {
    dueDateErr.innerHTML = "All good ";
    dueDateErr.style.color = "green";
  }

  // check that Task Status is not empty

  if (newStatusInput.value == "Choose...") {
    taskStatusErr.innerHTML = "Please enter a Task Status";
    taskStatusErr.style.color = "#ff0000";
  } else {
    taskStatusErr.innerHTML = "All good ";
    taskStatusErr.style.color = "green";
  }
  event.preventDefault(); 
}

addBtn.addEventListener("click", validFormFieldInput);
