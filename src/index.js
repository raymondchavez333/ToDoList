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

const firstProj = proj("UC works");
const firstTodo = ToDo("hello", "hahaha", "March 3, 2027", "high");
firstProj.addTodos(firstTodo);
const firstTodo2 = ToDo("yow", "second", "September 3, 2027", "medium");
firstProj.addTodos(firstTodo2);
projectTotal.addProject(firstProj);
console.log(projectTotal.getProjects());
// console.log(firstProj.getTodos());
// console.log(firstProj.getTodos()[0].getDueDate());

// console.log(firstProj.getTodos()[0].getTitle());
// console.log(firstProj.getTodos()[0].getStatus());
// console.log(status(firstProj));
// console.log(firstProj.getTodos()[0].getStatus());
// console.log(priority(firstProj, "low"));

const secondProj = proj("UC assignments");
const secondTodo = ToDo("hehe", "ew", 456, "low");
secondProj.addTodos(secondTodo);
projectTotal.addProject(secondProj);
console.log(projectTotal.getProjects());

// console.log(deleterProj(projects()));

// console.log(secondProj.getTodos()[0].getTitle());
// console.log(secondProj.getTodos()[0].getStatus());
// console.log(secondProj.getTodos()[0].setStatus());
// console.log(secondProj.getTodos()[0].getStatus());

// console.log(firstProj.getName());
// console.log(secondProj.getName());

// console.log(deleter(firstProj));