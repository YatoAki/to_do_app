import Project from "./project.js"

export default class Storage{

  static saveData(key,data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static createNewProjectData(key){
    let newProject = new Project(key);
    Storage.saveData(key,newProject);
  }

  static getData(key){
    const data = JSON.parse(localStorage.getItem(key))
    const dataObject = new Project(data["title"]);
    dataObject.setDescription = data["description"];
    dataObject.setTasks = data["tasks"];
    return dataObject;
  }

}
