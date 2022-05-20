import Project from "./project.js"

export default class Storage{

  static saveData(key,data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static createNewProjectData(key){
    let newProject = new Project(key);
    Storage.saveData(key,newProject);
    console.log(Storage.getData(key).getTitle());
  }

  static getData(key){
    const data = JSON.parse(localStorage.getItem(key))
    const dataObject = new Project(data["title"]);
    dataObject.setDescription = data["description"];
    dataObject.setTasks = data["tasks"];
    return dataObject;
  }

  static getAllData(){
    const data = {};
    for (let i = 0 ; i < localStorage.length ; i++){
      data[localStorage.key(i)] = Storage.getData(localStorage.key(i));
    }
    return data;
  }

}
