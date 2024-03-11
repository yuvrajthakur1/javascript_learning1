//get and set attribute


//GET ATTRIBUTE EXAMPLE

const link= document.querySelector("a");

//selecting ancor tag


console.log(link.getAttribute("href"));//#Home output


console.log(link.getAttribute("href").slice(1));//Home output


//will give the value of href attribute of selected anchor 

//getAttribute is a method that link object has


//SET ATTRIBUTE METHOD

//it is used to change the value of selected attribute

link.setAttribute("href","#myhome");


console.log(link.getAttribute("href"));//#myhome Output