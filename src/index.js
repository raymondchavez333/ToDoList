import "./styles.css";
import {greeting} from "./greeting.js";
import {ToDo} from "./newToDO.js";

console.log("Hello");
console.log(greeting);
console.log(ToDo("hello", "hahaha", 123, "high").getPriority());
