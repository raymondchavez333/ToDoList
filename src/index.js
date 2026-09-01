import "./styles.css";
import {greeting} from "./greeting.js";
import {ToDo} from "./newToDO.js";
import { proj } from "./newProject.js";

let toDoList = [];

// console.log("Hello");
// console.log(greeting);
// console.log(ToDo("hello", "hahaha", 123, "high").getPriority());
// console.log(proj("UCS").getName());

toDoList.push(ToDo("hello", "hahaha", 123, "high"));

console.log(toDoList[0].getDescription());