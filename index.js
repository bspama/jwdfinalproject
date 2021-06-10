function validFormFieldInput(data) {
  const newNameInput = document.querySelector("#new-name");
  const taskName = document.querySelector("#task-name");
  const newAssignInput = document.querySelector("#new-assign");
  const newDescriptInput = document.querySelector("#new-descript");
  const newStatusInput = document.querySelector("#new-status");
  const newDueDate = document.querySelector("#new-duedate");
  const taskNameErr = document.querySelector("#tn-error-msg");

  // console.log("name: " + newNameInput.value);

  // check if Task Name is more than 5 characters

  if (newNameInput.value == "" || newNameInput.value.length < 5) {
    taskNameErr.innerHTML = "Length should be more than 5";
    taskNameErr.style.color = "#ff0000";
    newNameInput.focus();
  } else {
    taskNameErr.innerHTML = "All good ";
    taskNameErr.style.color = "green";
  }
}

addBtn.addEventListener("click", validFormFieldInput);
