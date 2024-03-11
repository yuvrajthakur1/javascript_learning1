//Anopther method to add element to html using js

//document.createElement() is used to create new html element


const newTodoItem= document.createElement("li");
const newTodoItemText= document.createTextNode("Teacher Study");

newTodoItem.append(newTodoItemText);
console.log(newTodoItem);

//<li>Teacher Study</li>

const todoList= document.querySelector(".todo-list");

//Selecting todo element

todoList.append(newTodoItem);

//after above line new todo item is added which is Teacher Study

// adding new todo item to ul element