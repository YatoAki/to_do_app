export default class Task{
  constructor(title,dueDate = "None"){
    this.title = title;
    this.dueDate = dueDate;
  }

  setTitle(title){
    this.title = title;
  }

  getTitle(){
    return this.title;
  }

  setDueDate(dueDate){
    this.dueDate = dueDate;
  }

  getDueDate(){
    return this.dueDate;
  }
}
