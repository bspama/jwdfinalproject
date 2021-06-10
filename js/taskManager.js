class taskManager {
  constructor(currentID = 0) {
    this.tasks = [];
    this.currentID = currentID;
  }

  addTask(name, description, assignedTo, dueDate, status) {
    // this.currentID++;
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

    // 3. increment current id so the next task has a new id.
  }
}

const task1 = new taskManager();
task1.addTask("Boots", "Is Cool!", "Shalveena", "21/05/2021", "Done");
console.log(task1.tasks);

const task2 = new taskManager();
task2.addTask("Boots", "Is Cool!", "Shalveena", "21/05/2021", "Done");
console.log(task2.tasks);
