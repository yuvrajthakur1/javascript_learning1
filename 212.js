//Adding new element to page using javascript


//using innerHTML to add html element

const todoList= document.querySelector(".todo-list");

console.log(todoList.innerHTML);

todoList.innerHTML+="<li>hello</li>";

//adding one more todo

//but above method is not good