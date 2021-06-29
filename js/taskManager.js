// Creating the HTML that will be added to our index.html
const createTaskHtml = (id, name, assignedTo, status, dueDate, description) => {
  //creating HTML for the Done button to be removed when status changed
  let doneButton;
  if (status !== "Done") {
    doneButton = `<button type="button" id="done-button" class="btn btn-secondary done-button">
                        Mark as Done
                      </button>`;
  } else {
    doneButton = "";
  }

  const html = `
            <li class="list-group-item" >
              <!-- add a card into the first list group item. -->
              <div class="card" data-task-id="${id}">
                <div class="card-body">
                  <!-- This is the first row of the card -->
                  <div class="row">
                    <h5 class="card-title">${name}</h5>
                  </div>
                  <!-- Second row of the card -->
                  <div class="row my-sm-2">
                    <!-- has 3 columns -->
                    <div class="col-4">
                      <p class="card-text">Assigned to: ${assignedTo}</p>
                    </div>
                    <div class="col-4">
                      <p class="card-text">Status: ${status}</p>
                    </div>
                    <div class="col-4">
                      <p class="card-text">Due date: ${dueDate}</p>
                    </div>
                  </div>
                  <!-- Third row of the card -->
                  <div class="row my-sm-2">
                    <p class="card-text">
                    ${description}
                    </p>
                  </div>
                  <!-- Fourth row of the card -->
                  <div class="row">
                    <div class="col">
                      <button type="button" class="btn btn-secondary">
                        Edit
                      </button>
                      ${doneButton}
                      <button type="button" class="btn btn-secondary delete-button">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

`;
  return html;
};

class TaskManager {
  constructor(currentID = 0) {
    this.tasks = [];
    this.currentID = currentID;
  }

  // Method to add task
  addTask(name, assignedTo, status, dueDate, description) {
    // Within the addTask method, increment the this.currentId

    // 1. create a task
    const newTask = {
      currentID: this.currentID++,
      name: name,
      "assigned to": assignedTo,
      status: status,
      dueDate: dueDate,
      description: description,
    };

    // 2. push the task to the this.tasks array

    this.tasks.push(newTask);
    // console.log(this.tasks);
  }

  // Method to render task list

  render() {
    console.log("render");

    // empty tasks html list array
    let tasksHtmlList = [];

    // for each task, format the date and create the task html
    this.tasks.forEach((task) => {
      //  const currentTask = task;
      const date = new Date(task.dueDate);
      const formattedDate = date.toDateString();
      const taskHtml = createTaskHtml(
        task.currentID,
        task.name,
        task["assigned to"],
        task.status,
        formattedDate,
        task.description
      );
      // push the new task html to the task html list array
      tasksHtmlList.push(taskHtml);
    });

    // join the html list array into one string, where each element from the array starts on a new line
    const tasksHtml = tasksHtmlList.join("\n");

    // target the tasks list ul element from index.html and replace its inner html with the string we just created in tasksHtml.
    const taskList = document.querySelector("#tasks-list");
    taskList.innerHTML = tasksHtml;
  }

  getTaskById(taskID) {
    //create a foundTask variable
    let foundTask;
    //Loops through each task in the tasks array. When a match is found, saves it into the foundTask variable
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.currentID === taskID) {
        foundTask = task;
      }
    }

    return foundTask;

    // this.tasks.forEach((currentTask) => {
    //   const task = currentTask;
    //   if (task.currentID === taskID) {
    //     foundTask = task;
    //   }
    // });

    // return foundTask;
  }

  // Save method to save to localStorage

  save() {
    // change tasks array to string and store in tasksJason variable
    const tasksJson = JSON.stringify(this.tasks);
    // Store the string in localStorage (key:'tasks', value: 'tasksJson')
    localStorage.setItem("tasks", tasksJson);
    //Convert this.currentID to string
    const currentID = JSON.stringify(this.currentID);
    // Store in localStorage.
    localStorage.setItem("currentID", currentID);
  }

  //Load method to load from LocalStorage
  load() {
    //check if any tasks are saved in localStorage.
    if (localStorage.getItem("tasks")) {
      //Get the JSON string of tasks from localStorage and save into tasksJson variable
      const tasksJson = localStorage.getItem("tasks");
      // Convert to an array using and store it in this.tasks
      this.tasks = JSON.parse(tasksJson);
    }

    // Check if the currentId is saved in localStorage with
    if (localStorage.getItem("currentID")) {
      //If the `currentId` is stored, get the `currentId` in localStorage using `localStorage.getItem()` and store it in a new variable, `currentId`.
      const currentID = localStorage.getItem("currentID");
      // Convert the currentId to a number before storing it to the `TaskManager`'s `this.currentId`
      this.currentID = parseInt(currentID);
    }
  }

  // Delete task method

  deleteTask(taskID) {
    const newTasks = [];

    // Loop over each task, and for each iteration:
    //(1) get current tasks and store in a variable
    this.tasks.forEach((currentTask) => {
      const task = currentTask;
      //(2)if task.id is not equal to taskID,
      if (task.currentID != taskID) {
        //(3)push the task into the newTasks array.
        newTasks.push(task);
      }
      //4. Set `this.tasks` to `newTasks`.
      this.tasks = newTasks;
    });
  }
}
