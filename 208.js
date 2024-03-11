//loop

//in node list we can use............. for of,simple for,for each ; thta the difference btween node list and html collection




//task:- make the color of li items of nav grreen their background will be white

const navItems= document.getElementsByTagName("a");

console.log(navItems);//HTML collection
console.log(navItems.length);//3

// it will give html collection as a return
// now we will apply loop
//we cannot apply for each loop to html collection
// 1.simple for loop
// 2.for of loop 
// 3.foreachlopp


// this will make all the nav items green and background yelllow

for(let i of navItems)
{
    // console.log(navItems[i])

    const navColor= i;
    navColor.style.color="green";
    navColor.style.fontWeight="bold";
    navColor.style.backgroundColor="yellow";

}



//How to change html collection to to array


Array.from(navItems);
//it will convert navitems from html collection to arry like object and then we can apply forEach loop using let
console.log(typeof navItems);
console.log(Array.isArray(Array.from(navItems)));//true