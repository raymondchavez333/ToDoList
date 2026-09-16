import "./styles.css";
import {greeting} from "./greeting.js";
import {ToDo} from "./newToDO.js";
import { proj } from "./newProject.js";
import { status } from "./statusCheck.js";
import { priority } from "./changePriority.js";
import { deleter } from "./deleteTodo.js";
import { projects } from "./allProjects.js";
import { deleterProj } from "./deleteProject.js";
// let toDoList = [];

// console.log("Hello");
// console.log(greeting);
// console.log(ToDo("hello", "hahaha", 123, "high").getPriority());
// console.log(proj("UCS").getName());

// toDoList.push(ToDo("hello", "hahaha", 123, "high"));

// console.log(toDoList[0].getDescription());

let projectTotal = projects();

const defaultProj = proj("Default");
const defaultToDo = ToDo("Default", "hahaha", "March 3, 2027", "high");
defaultProj.addTodos(defaultToDo);
projectTotal.addProject(defaultProj);

console.log(projectTotal.getProjects()[0].getName());
console.log(projectTotal.getProjects()[0].getTodos()[0].getTitle());
