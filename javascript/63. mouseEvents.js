//eventListener listens for specific events to create interactive web pages
//These events include: click, mouseover (when we hover over) and mouseout (hover over and then leave it)
//.addEventListener(event, callback)
const myBox = document.getElementById("myBox");
myBox.addEventListener("click", changeColor);
function changeColor(event) { //event is an object containing information about smth happening
    //console.log(event);
    event.target.style.backgroundColor = "tomato"; //"target" is what tag we clicked on the page
    event.target.textContent = "OUCH! 🤕";
}
//same can be written with function expressions:
//myBox.addEventListener("click", function(event){
//    event.target.style.backgroundColor = "tomato"; //"target" is what tag we clicked on the page
//    event.target.textContent = "OUCH! 🤕";
//});
//or arrow functions:
//myBox.addEventListener("click", event => {...}); //if only 1 parameter, no need to use ()
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it! 😲";
});
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😊";
});

//Do the same but with a button separately to alter the box
const clickButton = document.getElementById("click-button");
clickButton.addEventListener("click", changeColor);
function changeColor(event) {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
}
clickButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 😲";
});
clickButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😊";
});