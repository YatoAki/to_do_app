import Task from "./task.js"
import Project from "./project.js"

export default class UI{

  static loadHomePage(){
    UI.setBtns();
  }


  static createProject(title){
    const para = document.createElement("p")
    para.textContent = title;
    return para;
  }

  static setBtns(){
    UI.setTaskBtn();
    UI.setProjectBtn();
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
    const newProjects = document.getElementById("new-projects");
    yesBtn.addEventListener("click",(e) =>{
      newProjects.appendChild(UI.createProject(input.value));
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

}
