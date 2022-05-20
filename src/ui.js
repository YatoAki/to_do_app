import Task from "./task.js"
import Project from "./project.js"
import Storage from "./storage.js"

export default class UI{

  static loadHomePage(){
    UI.loadProjects();
  }

  static loadProjects(){
    UI.loadDefaultProjects();
    UI.loadNewProjects();
    UI.setProjectBtn();
  }

  static loadNewProjects(){
    const newProjects = Storage.getAllData();
    const keys = Object.keys(newProjects)
    keys.forEach((key) => {
      if (key!== "Urgent" && key!== "Family" && key !== "Work"){
        UI.addNewProject(newProjects[key].getTitle());
      }
    })
  }

  static loadDefaultProjects(){
    const defaults = ["Urgent","Family","Work"];
    defaults.forEach((project) =>{
      if (localStorage.length < 3) Storage.createNewProjectData(project);
      UI.addDefaultProject(project)
    });
  }


  static addNewProject(title){
    const newProjects = document.getElementById("new-projects");
    const para = document.createElement("p");
    para.textContent = title;
    UI.makeShowTasksBtn(para);
    newProjects.appendChild(para);
  }

  static addDefaultProject(title){
    const newProjects = document.querySelector(".defaults");
    const para = document.createElement("p")
    para.textContent = title;
    UI.makeShowTasksBtn(para);
    newProjects.appendChild(para);
  }


  static setProjectBtn(){
    const projects = document.querySelector(".nav");
    const addProjects = document.querySelector(".add-projects");
    const inputField = UI.createInputField();
    addProjects.addEventListener("click",(e)=>{
      projects.appendChild(inputField);
    });

    const input = inputField.querySelector(".input")
    const yesBtn = inputField.querySelector(".yes");
    yesBtn.addEventListener("click",(e) =>{
      if (input.value == "") return;
      Storage.createNewProjectData(input.value);
      UI.addNewProject(input.value);
      input.value="";
      inputField.parentElement.removeChild(inputField);
    });
  }

  static createInputField(){
    const inputField = document.createElement("div")
    inputField.classList.add("input-field");
    const text = document.createElement("input");
    text.classList.add("input")
    text.setAttribute("type", "text");
    const div = document.createElement("div");
    const btnY = document.createElement("button");
    btnY.textContent = "Yes";
    const btnN = document.createElement("button");
    btnN.textContent = "Cancel";
    btnN.addEventListener("click", (e) => {
      inputField.parentElement.removeChild(inputField);
    });
    btnY.classList.add("yes");
    btnN.classList.add("no");
    div.appendChild(btnY);
    div.appendChild(btnN);
    inputField.appendChild(text);
    inputField.appendChild(div);
    return inputField;
  }

  static makeShowTasksBtn(para){
    para.addEventListener("click", (e)=>{
      const nav = document.querySelector(".nav");
      const projects = nav.querySelectorAll("p");
      projects.forEach((project) => {
        project.classList.remove("active");
      })
      para.classList.add("active");
      UI.makeTaskInterface(para.textContent);
    })
  }

  static makeTaskInterface(title){
    const tasksField = document.querySelector(".tasks");
    tasksField.textContent = "";
    const h2 = document.createElement("h2");
    const tasksList = document.createElement("div");
    tasksList.classList.add("tasks-list");
    tasksField.appendChild(h2);
    tasksField.appendChild(tasksList);

    const projectName = UI.getActiveProject();
    const allTasks = Storage.getData(projectName).getTasks();
    allTasks.forEach((task) => UI.addNewTask(task["title"]));

    const addTasks = document.createElement("div");
    addTasks.classList.add("add-tasks");
    addTasks.textContent = "+ Add Task";
    UI.setTaskBtn(title,addTasks);
    h2.textContent = title;
    tasksField.appendChild(addTasks);
  }

  static setTaskBtn(title,addTasks){
    const tasks = document.querySelector(".tasks");
    const inputField = UI.createInputField();
    addTasks.addEventListener("click",(e)=>{
      tasks.appendChild(inputField);
    });

    const input = inputField.querySelector(".input")
    const yesBtn = inputField.querySelector(".yes");
    yesBtn.addEventListener("click",(e) =>{
      if (input.value == "") return;
      const projectName = UI.getActiveProject();
      const project = Storage.getData(projectName);
      const task = new Task(input.value);
      project.addTask(task);
      Storage.saveData(projectName,project);
      UI.addNewTask(input.value);
      input.value="";
      inputField.parentElement.removeChild(inputField);
    });
  }

  static getActiveProject(){
    return document.querySelector(".active").textContent;
  }

  static addNewTask(title){
    const tasksList = document.querySelector(".tasks-list");
    const div = document.createElement("div");
    div.classList.add("each-task");
    const input = document.createElement("input");
    input.type = "radio";
    input.classList.add("done");
    div.appendChild(input);
    div.appendChild(UI.createPara(title,"title"));
    const grow = document.createElement("div");
    grow.classList.add("grow");
    div.appendChild(grow);
    div.appendChild(UI.createPara("None","time"));
    tasksList.appendChild(div);
  }

  static createPara(text,cl){
    const para = document.createElement("p")
    para.textContent = text;
    para.classList.add(cl);
    return para;
  }

}
