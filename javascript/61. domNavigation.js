//The process of navigating through the structure of an HTML document using JS
//HTML elements include but not limited to:
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children
let element = document.getElementById("fruits"); //reference to this unordered list
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "lightgreen"; //highlights the "Apple"

let ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild; //first child of every <ul> element
    firstChild.style.backgroundColor = "yellow";
});


element = document.getElementById("desserts");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "lightblue";

ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "lightblue";
});


element = document.getElementById("apple"); //if we choose "fruits" ID, it's gonna apply to the whole next (sibling) element ("vegetables")
nextSibling = element.nextElementSibling;
nextSibling.style.fontStyle = "italic"; //"orange" is now italic


element = document.getElementById("vegetables"); //the previous sibling is "fruits"
const prevSibling = element.previousElementSibling;
prevSibling.style.fontWeight = "bold";


element = document.getElementById("cake");
const parent = element.parentElement;
parent.style.fontStyle = "italic";


element = document.getElementById("vegetables");
const children = element.children; //returns an HTML collection
Array.from(children).forEach(child => { //we need to turn this collection into an array and go through each element
    child.style.fontSize = "1.4em";
});
//or we can access this HTML collection by an index number
children[1].style.backgroundColor = "pink"; //the 2nd child is highlighted now