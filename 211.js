//classList method 
//to see how many classes your element has 
//to add classes to to your element using javascript file and to remove classes
 
const sectionTodo= document.querySelector(".todo-section");
//selected todo-section class sectio

console.log(sectionTodo.classList);//two classes todo-section and container

//Adding one more class to selected element

sectionTodo.classList.add('bg-dark')

//adding class through javascript

//now there will be three classes for selected element
//giving class using javascript


//removing an class

// sectionTodo.classList.remove('container');

//___________________________________________________________

//to check class exixts or not in an element

// console.log(sectionTodo.classList.contains('container'));//true

//------------------------


sectionTodo.classList.toggle('anyclass');
//if class named anyclass is not available in section todo then 
// it will add it is available then it will remove it.