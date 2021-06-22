const createTaskHtml = (id, name, assignedTo, status, dueDate, description) => {
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
                      <button type="button" class="btn btn-secondary done-button">
                        Mark as Done
                      </button>
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

  addTask(name, assignedTo, status, dueDate, description) {
    // Within the addTask method, increment the this.currentId

    // create a task using this funtion and push it to the this.tasks Array.

    // 1. create a task
    const newTask = {
      currentID: this.currentID++,
      name: name,
      "assigned to": assignedTo,
      status: status,
      dueDate: dueDate,
      description: description,
    };

    // 2. push the task to the this.tasks array with the correct properties of the task.

    this.tasks.push(newTask);
    // console.log(this.tasks);
  }

  // Create render method to show tasks list

  render() {
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
      // push the new task html to the empty task html list array
      tasksHtmlList.push(taskHtml);
    });

    // join the html list array into one string, where each element from the array starts on a new line
    const tasksHtml = tasksHtmlList.join("\n");

    // target the tasks list ul element from index.html and replace its inner html with the string we just created in tasksHtml.
    const taskList = document.querySelector("#tasks-list");
    taskList.innerHTML = tasksHtml;
  }

  getTaskById(taskID) {
    //create a foundTask variable to store the found task
    let foundTask;
    //Loops through each tasks in the tasks array and then when a match is found, saves it into the foundTask variable
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
  // Create a save method to localStorage
 
  save() { 
    //create a JSON string of the tasks using `JSON.stringify()` and store it to a new variable, `tasksJson`
    const tasksJson = JSON.stringify(this.tasks);
    //Store the JSON string in `localStorage` under the key `tasks` using `localStorage.setItem()`.
    localStorage.setItem("tasks",tasksJson);
    //Convert this.currentID to string
    const currentID = JSON.stringify(this.currentID);
    // Store the `currentId` variable in `localStorage` under the key `currentId` using `localStorage.setItem()`.
    localStorage.setItem("currentID",currentID);
  }
  load() {
      //check if any tasks are saved in localStorage with `localStorage.getItem()`.
    if(localStorage.getItem("tasks")){
      //Get the JSON string of tasks from localStorage and save into tasksJson variable
      const tasksJson = localStorage.getItem("tasks");
      // Convert the `tasksJson` string to an array using `JSON.parse()` and store it in `this.tasks`
      this.tasks = JSON.parse(tasksJson) 
    }
      //Next, check if the `currentId` is saved in localStorage with `localStorage.getItem()`.
    if (localStorage.getItem("currentID")) {
      //If the `currentId` is stored, get the `currentId` in localStorage using `localStorage.getItem()` and store it in a new variable, `currentId`.
      const currentID = localStorage.getItem("currentID");
      // Convert the currentId to a number before storing it to the `TaskManager`'s `this.currentId`
      this.currentID = parseInt(currentID);
    }
  }
  //1. In `js/taskManager.js`, create a `deleteTask` method on the `TaskManager` class. It should take one parameter, `taskId`, the id of the task we want to be deleted.

  deleteTask(taskID){
    //2. In the `deleteTask` method, create a new variable `newTasks` and set it to an empty array.
    const newTasks = [];
    //3. Loop over the tasks, and for each iteration, (1) get current asks and store in a variable task, 
    this.tasks.forEach((currentTask) => {
      const task = currentTask
      //(2)if task.id is not equal to taskID passed as a parameter, 
      if (task.currentID != taskID) {
      //(3)if the task.id is not equal to the taskID  push the task into the newTasks array.
      newTasks.push(task);
      }
      //4. Set `this.tasks` to `newTasks`.
      this.tasks = newTasks;  
    });
    
  }
}
