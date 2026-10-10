import "./styles.css";
import {greeting} from "./greeting.js";
import {ToDo} from "./newToDO.js";
import { proj } from "./newProject.js";
import { Status } from "./statusCheck.js";
import { Priority } from "./changePriority.js";
import { deleter } from "./deleteTodo.js";
import { projects } from "./allProjects.js";
import { deleterProj } from "./deleteProject.js";
import { parse, getDate, getMonth, getYear } from "date-fns";


// let projectTotal = projects();

let defaultProj = proj("Default");
let defaultToDo = ToDo("Default", "hahaha", "March 3, 2027", "high");
let defaultToDo1 = ToDo("Default1", "hahaha1", "March 3, 2027", "high");
defaultProj.addTodos({title: defaultToDo.getTitle(), description: defaultToDo.getDescription(), dueDate: defaultToDo.getDueDate(), priority: defaultToDo.getPriority(), status: defaultToDo.getStatus()});
defaultProj.addTodos({title: defaultToDo1.getTitle(), description: defaultToDo1.getDescription(), dueDate: defaultToDo1.getDueDate(), priority: defaultToDo1.getPriority(), status: defaultToDo1.getStatus()});

// projectTotal.addProject(defaultProj);
console.log(defaultProj.getTodos());


let defaultProj2 = proj("Second");
let defaultToDo2 = ToDo("Default", "hahaha", "March 3, 2027", "high");
let defaultToDo3 = ToDo("Default2", "hahaha1", "March 3, 2027", "high");
defaultProj2.addTodos({title: defaultToDo2.getTitle(), description: defaultToDo2.getDescription(), dueDate: defaultToDo2.getDueDate(), priority: defaultToDo2.getPriority(), status: defaultToDo2.getStatus()});
defaultProj2.addTodos({title: defaultToDo3.getTitle(), description: defaultToDo3.getDescription(), dueDate: defaultToDo3.getDueDate(), priority: defaultToDo3.getPriority(), status: defaultToDo3.getStatus()});

// console.log(defaultProj2.getTodos());

// Edit the priority status 
// Solution 1 (changing prio)
function change(object, option){
  // accepts {title: 'Default', description: 'hahaha', dueDate: 'March 3, 2027', priority: 'high', status: 'unchecked'};
  let title1 = object.title;
  let description1 = object.description;
  let dueDate1 = object.dueDate;
  let priority1 = object.priority;
  let status1 = object.status;
  // localStorage.setItem("Project: Default", JSON.stringify({title: `${title1}`, description: `${description1}`, dueDate: `${dueDate1}`, priority: `${option}`, status: `${status1}`}));
  return {title: `${title1}`, description: `${description1}`, dueDate: `${dueDate1}`, priority: `${option}`, status: `${status1}`};
}
let changePrio = JSON.parse(localStorage.getItem("Project: Default"));
// console.log(changePrio[0]);
// console.log((change(changePrio[0], "medium")));
// localStorage.removeItem("Project: Default");

// defaultProj.deleteToArray("Default");
// console.log(defaultProj.getArrayTodos());

// Solution 2 (Changing prio)

let defaultToDoChanged = ToDo("Default", "hahaha", "March 3, 2027", "medium");
console.log(defaultToDoChanged.getFullDetails());
defaultProj.modifyArray(defaultToDoChanged.getFullDetails());
console.log(defaultProj.getArrayTodos());

// defaultProj.addTodos({title: defaultToDoChanged.getTitle(), description: defaultToDoChanged.getDescription(), dueDate: defaultToDoChanged.getDueDate(), priority: defaultToDoChanged.getPriority(), status: defaultToDoChanged.getStatus()});
// console.log(defaultProj.getArrayTodos());



// console.log(JSON.parse(localStorage.getItem("Default")));
// console.log(projectTotal);
// console.log(projectTotal.getProjects()[0].getTodos()[0].getTitle());


// let result = parse('02/11/2014', 'MM/dd/yyyy', new Date());

// console.log(result);

// console.log(getDate(result));
// console.log(getMonth(result));
// console.log(getYear(result));

// // DOM
// let projectName = document.querySelector(".sidebar2");
// projectName.textContent = projectTotal.getProjects()[0].getName();

// let projectList = document.querySelector(".sidebar5");
// let existingProjects = projectTotal.getProjects().map(item => item.getName());
// projectList.textContent = existingProjects;

// if (!localStorage.getItem("project")) {
//   populateStorage();
// } else {
//   setProject();
// }

// function populateStorage() {
//   localStorage.setItem('project', JSON.stringify(projectTotal.getProjects()));

//   setProject();
// }

function setProject() {
  let currentProj = localStorage.getItem('project');
//   var currentFont = localStorage.getItem('font');
//   var currentImage = localStorage.getItem('image');

//   document.getElementById('bgcolor').value = currentColor;
//   document.getElementById('font').value = currentFont;
//   document.getElementById('image').value = currentImage;

  // console.log(JSON.parse(currentProj));

// document.querySelector(".sidebar2").textContent = currentProj;  

//   htmlElem.style.backgroundColor = '#' + currentColor;
//   pElem.style.fontFamily = currentFont;
//   imgElem.setAttribute('src', currentImage);
}

// bgcolorForm.onchange = populateStorage;
// fontForm.onchange = populateStorage;
// imageForm.onchange = populateStorage;

