import Task from "./task.js"
import Project from "./project.js"
import Storage from "./storage.js"

export default class UI{

  static loadHomePage(){
    UI.loadProjects();
  }

  static loadProjects(){
    UI.loadDefaultProjects();
    UI.setProjectBtn();
  }

  static loadDefaultProjects(){
    const defaults = ["Urgent","Family","Work"];
    defaults.forEach((project) =>{
      Storage.createNewProjectData(project);
      UI.addDefaultProject(project)
    });
  }


  static addNewProject(title){
    Storage.createNewProjectData(title);
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
      UI.addNewProject(input.value);
      input.value="";
      inputField.parentElement.removeChild(inputField);
    });
  }

  static setTaskBtn(){
    const tasks = document.querySelector(".tasks");
    const addTasks = document.querySelector(".add-tasks");
    const inputField = UI.createInputField();
    addTasks.addEventListener("click",(e)=>{
      tasks.appendChild(inputField);
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
      UI.makeTaskInterface(para.textContent,[]);
    })
  }

  static makeTaskInterface(title,tasks){
    const tasksField = document.querySelector(".tasks");
    tasksField.textContent = "";
    const h2 = document.createElement("h2");
    const addTasks = document.createElement("div");
    addTasks.classList.add("add-tasks");
    addTasks.textContent = "+ Add Task";
    h2.textContent = title;
    tasksField.appendChild(h2);
    tasksField.appendChild(addTasks);
  }

}
