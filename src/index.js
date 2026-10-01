import "./styles.css";
import {greeting} from "./greeting.js";
import {ToDo} from "./newToDO.js";
import { proj } from "./newProject.js";
import { status } from "./statusCheck.js";
import { priority } from "./changePriority.js";
import { deleter } from "./deleteTodo.js";
import { projects } from "./allProjects.js";
import { deleterProj } from "./deleteProject.js";
import { parse, getDate, getMonth, getYear } from "date-fns";


let projectTotal = projects();

const defaultProj = proj("Default");
const defaultToDo = ToDo("Default", "hahaha", "March 3, 2027", "high");
defaultProj.addTodos(defaultToDo);
projectTotal.addProject(defaultProj);

// console.log(projectTotal.getProjects()[0].getName());
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

if (!localStorage.getItem("project")) {
  populateStorage();
} else {
  setProject();
}

function populateStorage() {
  localStorage.setItem('project', projectTotal);

  setProject();
}

function setProject() {
  var currentProj = localStorage.getItem('project');
//   var currentFont = localStorage.getItem('font');
//   var currentImage = localStorage.getItem('image');

//   document.getElementById('bgcolor').value = currentColor;
//   document.getElementById('font').value = currentFont;
//   document.getElementById('image').value = currentImage;

//   htmlElem.style.backgroundColor = '#' + currentColor;
//   pElem.style.fontFamily = currentFont;
//   imgElem.setAttribute('src', currentImage);
}

// bgcolorForm.onchange = populateStorage;
// fontForm.onchange = populateStorage;
// imageForm.onchange = populateStorage;