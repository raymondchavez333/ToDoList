import "./styles.css";
import {greeting} from "./greeting.js";
import {ToDo} from "./newToDO.js";
import { proj } from "./newProject.js";
import { status } from "./statusCheck.js";
// let toDoList = [];

// console.log("Hello");
// console.log(greeting);
// console.log(ToDo("hello", "hahaha", 123, "high").getPriority());
// console.log(proj("UCS").getName());

// toDoList.push(ToDo("hello", "hahaha", 123, "high"));

// console.log(toDoList[0].getDescription());

const firstProj = proj("UC works");
const firstTodo = ToDo("hello", "hahaha", 123, "high");
firstProj.addTodos(firstTodo);

console.log(firstProj.getTodos()[0].getTitle());
console.log(firstProj.getTodos()[0].getStatus());
console.log(status(firstProj));
console.log(firstProj.getTodos()[0].getStatus());

const secondProj = proj("UC assignments");
const secondTodo = ToDo("hehe", "ew", 456, "low");
secondProj.addTodos(secondTodo);

console.log(secondProj.getTodos()[0].getTitle());
console.log(secondProj.getTodos()[0].getStatus());
console.log(secondProj.getTodos()[0].setStatus());
console.log(secondProj.getTodos()[0].getStatus());

console.log(firstProj.getName());
console.log(secondProj.getName());