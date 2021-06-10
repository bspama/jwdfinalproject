//adding the selector
const newName = document.querySelector('#new-name');
const newAssign = document.querySelector('#new-assign');
const newDescript = document.querySelector('#new-descript');
const newStatus = document.querySelector('#new-status');
const newDueDate = document.querySelector('#new-duedate');
const newDueDate = document.querySelector('#new-duedate');
const addBtn = document.querySelector('#addBtn');

//console.log("Task name:  " + newName.value);

let validFormFieldInput = function (data) {
    if (newName.value.length > 5) {
        
    }

};

function validFormFieldInput() {
    if (newName.value == “” && newName.value.length < 8) {
      errMsg.innerHTML = “Length should be more than 8";
      document.querySelector(“#errMsg”).style.color = “#FF0000";
      myName2.focus();
    } else {
      errMsg.innerHTML = “All good “;
      document.querySelector(“#errMsg”).style.color = “#EEEEEE”;
    }
  }

addBtn.addEventListener('click',validFormFieldInput);



