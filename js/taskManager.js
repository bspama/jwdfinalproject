const createTaskHtml = (currentID, name, assignedTo, status, dueDate, description) => {
  const html = `
            <li class="list-group-item" data-task-id="${currentID}">
              <!-- add a card into the first list group item. -->
              <div class="card">
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
                        Mark as Complete
                      </button>
                      <button type="button" class="btn btn-secondary">
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
}
