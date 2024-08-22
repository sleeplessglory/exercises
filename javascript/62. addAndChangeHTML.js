//1. Create the element
const newH1 = document.createElement("h1"); //specify the tag
//2. Add attributes/properties
newH1.textContent = "I like pizza!";
newH1.id = "newID"; //added an "id" attribute for it with the "newID" value
newH1.style.color="red"; //added a CSS property
newH1.style.textAlign = "center";
//3. Append element to DOM
//document.body.append(newH1); //the last child of <body> parent
//document.body.prepend(newH1); //the 1st child of <body> parent
document.getElementById("box2-id").append(newH1); //the last child of the 2nd box
document.getElementById("box3-id").prepend(newH1); //the 1st child of the 3rd box

const box2 = document.getElementById("box2-id");
document.body.insertBefore(newH1, box2); //.insertBefore(newElement, currentElement)
//Let's pretend that these boxes don't have IDs, then:
const boxes = document.querySelectorAll("box-class"); //nodelist is assigned to the variable
//document.body.insertBefore(newH1, boxes[1]); //before the 2nd box

//4. Remove the element
//document.body.removeChild(newH1); //if the <body> is parent
document.getElementById("box3-id").removeChild(newH1); //if this box is the parent


//1. Create the element
let newListItem = document.createElement("li");
//2. Add attributes/properties
newListItem.textContent = "Potatoes and mushrooms";
newListItem.id = "potatoes-mushrooms";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
//3. Append element to DOM
document.body.append(newListItem);
document.getElementById("lunch").append(newListItem);
document.getElementById("lunch").prepend(newListItem);
const spaghetti = document.getElementById("spaghetti");
document.getElementById("lunch").insertBefore(newListItem, spaghetti);
//Let's pretend that lunch items do not have IDs, then:
const listItems = document.querySelectorAll("#lunch li"); //selects all the lists within the "lunch" ID
document.getElementById("lunch").insertBefore(newListItem, listItems[4]); //listItems is a nodelist (specify the index in order to apply anything)
//4. Remove the element
document.getElementById("lunch").removeChild(newListItem); //removes the new element (child)