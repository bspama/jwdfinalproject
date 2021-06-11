class taskManager {
  constructor(currentID = 0) {
    this.tasks = [];
    this.currentID = currentID;
  }

  addTask(name, description, assignedTo, dueDate, status) {
    // Within the addTask method, increment the this.currentId

    // create a task using this funtion and push it to the this.tasks Array.

    // 1. create a task
    const newTask = {
      currentID: this.currentID++,
      name: name,
      description: description,
      "assigned to": assignedTo,
      "due date": dueDate,
      status: status,
    };

    // 2. push the task to the this.tasks array with the correct properties of the task.

    this.tasks.push({ newTask });
  }
}

