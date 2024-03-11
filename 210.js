//How browser see our html Document

//methods to traverse Dom tree

//document.getRootNode(); to select root node of the tree that is html
//rootNode.childnode; to get all the childs of root node


//  const rootNode= document.getRootNode();
//  const htmlElementNode= rootNode.childNodes[0];//root means document elemet ke child nodes jo ki sirf html hei
//  console.log(htmlElementNode.childNodes)//NodeList(3) [head, text, body] ab dekh rahe hei html ke child nodes


//  const headElementNode=htmlElementNode.childNodes[0];
//  const textNode1=htmlElementNode.childNodes[1];
//  const bodyElementnode=htmlElementNode.childNodes[2];

//  console.log(headElementNode)//head will be op
//  console.log(textNode1)//#text will be op 
//  console.log(bodyElementnode)//body will be o[p]


// console.log(headElementNode.parentNode)//html is parent node of head


// //sibbling reltion ship

// console.log(headElementNode.nextSibling);//text
// console.log(headElementNode.nextSibling.nextSibling);//body op

// console.log(headElementNode.childNodes);//[text, title, text, script, text]



//__________________________________________________________________________________

// const h1=  document.querySelector("h1");

// const div= h1.parentNode;//will return parent node of h1 element

// div.style.color="green";
// div.style.backgroundColor="black"

// const body = h1.parentNode.parentNode;//will return parentnode of parentnodeof h1


//---------------------------------------------------------------------------------


// const head=document.querySelector("head");

// head.querySelector("title");//it is also possib;e it will search for title only inside the head part

//-------------------------------------------------------------------------------------------
const Container= document.querySelector(".container");
console.log(Container.children);//[h1, p] only will ignore spaces