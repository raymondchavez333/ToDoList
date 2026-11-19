import "./styles.css";
import {greeting} from "./greeting.js";
import {ToDo} from "./newToDO.js";
import { proj } from "./newProject.js";
import { Status } from "./statusCheck.js";
import { Priority } from "./changePriority.js";
import { deleter } from "./deleteTodo.js";
import { projects } from "./allProjects.js";
import { deleterProj } from "./deleteProject.js";
import { format, parse, getDate, getMonth, getYear } from "date-fns";



let projectsContainer = projects();

let projectLists = document.querySelector(".sidebar5");
let projectName = document.querySelector(".sidebar2");
let todoLists = document.querySelector(".mainBottom");

if(!localStorage.length ){
  firstDefault()
  populateStorage();
}else{
  set();
}

function firstDefault (){
  let defaultProj = proj("Default");
    // console.log(defaultProj.getId());
    // projectsContainer.addProject(`${defaultProj.getName()} ${defaultProj.getId()}`);
    projectsContainer.addProject({name: `${defaultProj.getName()}`, id: `${defaultProj.getId()}`});
    console.log(projectsContainer.getProjects());
    let defaultToDo = ToDo("Demo Todo", "hahaha", "March 3, 2027", "high");
    let defaultToDo1 = ToDo("Default1", "hahaha1", "March 3, 2027", "high");
    defaultProj.addTodos({title: defaultToDo.getTitle(), description: defaultToDo.getDescription(), dueDate: defaultToDo.getDueDate(), priority: defaultToDo.getPriority(), status: defaultToDo.getStatus()});
    defaultProj.addTodos({title: defaultToDo1.getTitle(), description: defaultToDo1.getDescription(), dueDate: defaultToDo1.getDueDate(), priority: defaultToDo1.getPriority(), status: defaultToDo1.getStatus()});

    // projectTotal.addProject(defaultProj);
    // let projectName = document.querySelector(".sidebar2");
    console.log(defaultProj.getTodos());
    console.log(defaultProj.getName());
    projectName.textContent = `${defaultProj.getName()}`;
    projectName.setAttribute("data-id", `${defaultProj.getId()}`);
    // let defaultShow = JSON.parse(localStorage.getItem(`Project: ${defaultProj.getName()}`));
    // console.log(defaultShow);

    // let projectLists = document.querySelector(".sidebar5");
    // let defaultDiv = document.createElement("div");
    // defaultDiv.textContent = `${projectsContainer.getProjects()}`;
    // projectLists.appendChild(defaultDiv);

    // let demoDiv = document.createElement("div");
    // demoDiv.textContent = `${defaultToDo.getTitle()}`;
    // todoLists.appendChild(demoDiv);

    console.log(projectName.textContent);

    // localStorage.setItem("activeProject", `${projectName.textContent}`);
    localStorage.setItem("activeProject", JSON.stringify({name: `${defaultProj.getName()}`, id: `${defaultProj.getId()}`}));
    localStorage.setItem("activeProjectList", JSON.stringify(projectsContainer.getProjects()));
    localStorage.setItem("activeTodoList", JSON.stringify(defaultProj.getTodos()));
}


function populateStorage(){
    
  localStorage.setItem("activeProjectList", JSON.stringify(projectsContainer.getProjects()));
  // localStorage.setItem("activeProject", projectName.textContent);
  localStorage.setItem("activeProject", JSON.stringify({name: `${projectName.textContent}`, id: `${projectName.dataset.id}`}));
  const projTodos = JSON.parse(localStorage.getItem(`Project: ${projectName.textContent} ${projectName.dataset.id}`));
  console.log(projTodos);
  localStorage.setItem("activeTodoList", JSON.stringify(projTodos));
  set();
  

}

function set(){
  projectsContainer.modifyProjects(JSON.parse(localStorage.getItem("activeProjectList")));
  const currentProject = JSON.parse(localStorage.getItem("activeProject"));
  const currentProjectList = localStorage.getItem("activeProjectList");
  const currentTodoList = localStorage.getItem("activeTodoList");

  document.querySelector(".sidebar2").textContent= `${currentProject.name}`;
  const currentProjectListParsed = JSON.parse(currentProjectList);
  currentProjectListParsed.forEach((item) => {
    const divProjectList = document.createElement("div");
    divProjectList.classList.add("projectItems");
    // divProjectList.setAttribute("data-id", )
    const divProjectName = document.createElement("div");
    divProjectName.textContent = `${item.name}`;
    divProjectList.appendChild(divProjectName);
    const openButton = document.createElement("button");
    openButton.textContent = "Open";
    openButton.setAttribute("id", "openProject");
    divProjectList.appendChild(openButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "deleteProject");
    divProjectList.appendChild(deleteButton);
    // divProjectList.textContent = `${item}`;

    openButton.addEventListener("click", () => {
      // localStorage.setItem("activeProject", `${item}`);
      localStorage.setItem("activeProject", JSON.stringify({name: `${item.name}`, id: `${item.id}`}));
      projectName.textContent = `${item.name}`;
      projectName.setAttribute("data-id", `${item.id}`);
      const projectItemsDom = document.querySelectorAll(".projectItems");
      projectItemsDom.forEach((item) =>{
      // projectLists.removeChild(item);
      item.remove();
      });

      const todoItemsDom = document.querySelectorAll(".todoItems");
      todoItemsDom.forEach((item) =>{
      item.remove();
      });
      populateStorage();
    });

    deleteButton.addEventListener("click", () => {
      const newProjList = projectsContainer.getProjects().filter(projItem => {
            return projItem.id !== item.id;
        });
      projectsContainer.modifyProjects(newProjList);
      projectLists.removeChild(divProjectList);
      localStorage.removeItem(`Project: ${item.name} ${item.id}`);
      console.log(projectsContainer.getProjects());

      if(projectsContainer.getProjects().length === 0) {
        projectName.textContent = "No Project";
        projectName.setAttribute("data-id", "No Project");
        const todoItemsDom = document.querySelectorAll(".todoItems");
        todoItemsDom.forEach((item) =>{
        item.remove();
        });
        localStorage.clear();
      }else{
        projectName.textContent = `${projectsContainer.getProjects().at(-1).name}`;
        projectName.setAttribute("data-id", `${projectsContainer.getProjects().at(-1).id}`);
        console.log(projectsContainer.getProjects());

        const projectItemsDom = document.querySelectorAll(".projectItems");
        projectItemsDom.forEach((item) =>{
        // projectLists.removeChild(item);
        item.remove();
        });

        const todoItemsDom = document.querySelectorAll(".todoItems");
        todoItemsDom.forEach((item) =>{
        item.remove();
        });

      // localStorage.removeItem(`Project: ${item}`);
        populateStorage();
        }
    });

    projectLists.appendChild(divProjectList);
    console.log(item);
  });


  console.log(projectsContainer.getProjects());
  
  const currentTodoListParsed = JSON.parse(currentTodoList);
  console.log(currentTodoListParsed);
  currentTodoListParsed.forEach((item) => {
    const divTodoList = document.createElement("div");
    divTodoList.classList.add("todoItems");
    divTodoList.textContent = `${item.title}`;
    todoLists.appendChild(divTodoList);
    console.log(item.title);
  });


  // const todoList = JSON.parse(currentTodoList).map(item => item.title);
  // const alltodo = document.createElement()

}

const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const form = document.querySelector("form");
let createProject = document.getElementById("createProject");
const title = document.getElementById("title");

createProject.addEventListener("click", () => {
  favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  const projectItemsDom = document.querySelectorAll(".projectItems");
  projectItemsDom.forEach((item) =>{
  // projectLists.removeChild(item);
  item.remove();
  });

  const todoItemsDom = document.querySelectorAll(".todoItems");
  todoItemsDom.forEach((item) =>{
  item.remove();
  });
  
  const data = new FormData(form);
  for (const pair of data.entries()) {
  console.log(pair[0], pair[1]);
  }
  console.log(title.value);
  const newProj = proj(title.value);
  console.log(newProj.getName());
  // const newProjDiv = document.createElement("div");
  // newProjDiv.textContent = `${newProj.getName()}`;
  // projectLists.appendChild(newProjDiv);
  // projectsContainer.addProject(newProj.getName());
  projectsContainer.addProject({name: `${newProj.getName()}`, id: `${newProj.getId()}`});
  projectName.textContent = `${newProj.getName()}`;
  projectName.setAttribute("data-id", `${newProj.getId()}`);

  populateStorage();
  event.preventDefault(); 
  favDialog.close(); 
  console.log(projectsContainer.getProjects());
});

console.log(!localStorage.getItem("Project: Hello"));

// let defaultProj2 = proj("Second");
// let defaultToDo2 = ToDo("Default", "hahaha", "March 3, 2027", "high");
// let defaultToDo3 = ToDo("Default2", "hahaha1", "March 3, 2027", "high");
// defaultProj2.addTodos({title: defaultToDo2.getTitle(), description: defaultToDo2.getDescription(), dueDate: defaultToDo2.getDueDate(), priority: defaultToDo2.getPriority(), status: defaultToDo2.getStatus()});
// defaultProj2.addTodos({title: defaultToDo3.getTitle(), description: defaultToDo3.getDescription(), dueDate: defaultToDo3.getDueDate(), priority: defaultToDo3.getPriority(), status: defaultToDo3.getStatus()});

// console.log(defaultProj2.getTodos());

// let defaultProj3 = proj("Third");
// let defaultProj4 = proj("Fourth");

// Edit the priority status 
// Solution 1 (changing prio)
// function change(object, option){
//   // accepts {title: 'Default', description: 'hahaha', dueDate: 'March 3, 2027', priority: 'high', status: 'unchecked'};
//   let title1 = object.title;
//   let description1 = object.description;
//   let dueDate1 = object.dueDate;
//   let priority1 = object.priority;
//   let status1 = object.status;
//   // localStorage.setItem("Project: Default", JSON.stringify({title: `${title1}`, description: `${description1}`, dueDate: `${dueDate1}`, priority: `${option}`, status: `${status1}`}));
//   return {title: `${title1}`, description: `${description1}`, dueDate: `${dueDate1}`, priority: `${option}`, status: `${status1}`};
// }
// let changePrio = JSON.parse(localStorage.getItem("Project: Default"));
// console.log(changePrio[0]);
// console.log((change(changePrio[0], "medium")));
// localStorage.removeItem("Project: Default");

// defaultProj.deleteToArray("Default");
// console.log(defaultProj.getArrayTodos());

// Solution 2 (Changing prio)

// let defaultToDoChanged = ToDo("Default", "hahaha", "March 3, 2027", "medium");
// defaultToDoChanged.setStatus();
// console.log(defaultToDoChanged.getFullDetails());
// defaultProj.modifyArray(defaultToDoChanged.getFullDetails());
// console.log(defaultProj.getArrayTodos());

// defaultProj.deleteTodo({title: "Default1"});
// deleterProj(defaultProj4);


// defaultProj.addTodos({title: defaultToDoChanged.getTitle(), description: defaultToDoChanged.getDescription(), dueDate: defaultToDoChanged.getDueDate(), priority: defaultToDoChanged.getPriority(), status: defaultToDoChanged.getStatus()});
// console.log(defaultProj.getArrayTodos());



// console.log(JSON.parse(localStorage.getItem("Default")));
// console.log(projectTotal);
// console.log(projectTotal.getProjects()[0].getTodos()[0].getTitle());


// let result = parse('02/11/2014', 'MM/dd/yyyy', new Date());

// console.log(result);

const result = format(new Date(2014, 1, 11), 'MMMM dd, yyyy');
console.log(result);

// console.log(getDate(result));
// console.log(getMonth(result));
// console.log(getYear(result));

// // DOM
// let projectName = document.querySelector(".sidebar2");
// projectName.textContent = projectTotal.getProjects()[0].getName();

// let projectList = document.querySelector(".sidebar5");
// let existingProjects = projectTotal.getProjects().map(item => item.getName());
// projectList.textContent = existingProjects;

