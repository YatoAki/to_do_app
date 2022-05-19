export default class Project{
  constructor(title,description = "None"){
    this.title = title;
    this.description = description;
    this.tasks = []
  }

  setTitle(title){
    this.title = title;
  }

  getTitle(){
    return this.title;
  }

  setDescription(description){
    this.description = description;
  }

  getDescription(){
    return this.description;
  }

  setTasks(tasks){
    this.tasks = tasks;
  }

  getTasks(){
    return this.tasks;
  }

  getTask(taskTitle){
    return this.tasks.find((task) => task.getTitle == taskTitle)
  }

  addTask(newTask){
    if (this.tasks.find((task) => task.getTitle == newTask.title)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskTitle){
    this.tasks = this.tasks.filter((task) => task.getTitle != taskTitle);
  }


}
