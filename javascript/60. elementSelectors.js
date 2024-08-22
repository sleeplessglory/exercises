//Methods used to target and manipulate HTML elements that allow you to
//select one or multiple HTML elements from the DOM (Document Object Model)
//document.getElementById() returns //element or null
//document.getElementsByClassName()  //HTML collection
//document.getElementsByTagName()   //HTML collection
//document.querySelector()          //1st matching element or null
//document.querySelectorAll()       //nodelist (which has built-in methods) is static (they do not update automatically)

const myHeading = document.getElementById("my-heading"); //if the ID is misspelled, the console shows "null"
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading); //shows an HTML element with an inline CSS


let fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "yellow"; //acesses the [0] index object (1st out of 3 <div> objects)

for (let fruit of fruits) {
    fruit.style.backgroundColor = "green"; //every <div> object's highlighted
}

//fruits.forEach(); //TypeError since HTML collections don't have .forEach() method
Array.from(fruits).forEach(fruit => { //Array.from() returns a new array, where we can use .forEach()
    fruit.style.backgroundColor = "gray";
});

console.log(fruits); //returns an HTML collection (3 <div> objects)


const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.backgroundColor = "pink";

for (let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "pink";
}

const liElements = document.getElementsByTagName("li");
for (let liElement of liElements) {
    liElement.style.fontSize = "1.2em";
    liElement.style.backgroundColor = "lightgreen";
}
//or we can turn these HTML collections into an array and use array methods
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "pink";
});
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
    liElement.style.fontSize = "1.2em";
});

console.log(h4Elements); //returns an HTML collection (2 <h4> objects)
console.log(liElements);


const element = document.querySelector(".fruits"); //selects the 1st matching element with "fruits" class ("." is specified for it). Class or tag names can be selected
element.style.fontStyle = "italic"; //"Apple" has been modified

fruits = document.querySelectorAll(".fruits");
fruits[0].style.fontWeight = "bold"; //"Apple" is bold now
console.log(fruits); //shows a nodelist with built-in methods (no need to turn them into an array)

fruits.forEach(fruit => {
    fruit.style.backgroundColor = "lightgreen";
});