//Inner Html
//html code written inside the container is inner Html 

const headLine = document.querySelector(".headline");

console.log(headLine.innerHTML);

//it will give complete html code that is written under class headline simply

//{/* <h2 id="main-heading">Manage Your Work</h2> */}
                // <button class="btn btn-headline">Learn more</button>



headLine.innerHTML= "Inner HTML demo";                
headLine.innerHTML+="<button class=\"btn\">Submit</button>"
//similarly as above example we can made modification to inner html of any container okay
