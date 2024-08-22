//Static collection of HTML elements by (id, class, element)
//Can be created by using .querySelectorAll()
//Similar to an array, but no .map(), .filter(), .reduce()
//NodeList won't update to automatically reflect changes in DOM:
//E.g. if you remove the element from the DOM, you need to separately remove it from NodeList too
let buttons = document.querySelectorAll(".four-buttons");
console.log(buttons);

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "🐉";
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(213, 66%, 66%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(213, 66%, 41%)";
    });
});

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "four-buttons"; //"classList" is used when working with an element
document.body.appendChild(newButton); //has the same CSS properties, since it's in the same class

console.log(buttons); //NodeList shows only 4 buttons without the 5th
buttons = document.querySelectorAll(".four-buttons"); //select them again to include the 5th button
console.log(buttons); //now all 5 buttons're within the NodeList

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove(); //removes the target (button) from the DOM
        buttons = document.querySelectorAll(".four-buttons"); //the NodeList is being updated too
        console.log(buttons);
    });
});