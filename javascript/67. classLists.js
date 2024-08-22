//Element property in JS used to interact with an element's list of (CSS) classes
//Allows to make reusable classes for many elements across the web page
//add()
//remove()
//toggle(remove if present, add if not)
//replace(oldClass, newClass)
//contains()
const myButton = document.getElementById("my-button");
myButton.classList.add("enabled"); //created a new class (not added to the existing like previously)
myButton.classList.remove("enabled"); //the new class is removed now

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("btn-hov");
});
myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("btn-hov");
});

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("btn-hover"); //removes the class if present, adds if not
});
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("btn-hover"); //removes the class if present, adds if not
});

myButton.classList.add("enabled");
myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤡";
        event.target.classList.replace("disabled", "enabled");
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});


const newH1 = document.getElementById("newH1");
newH1.classList.add("enabled"); //added properties of another class to this element
newH1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤡";
        event.target.classList.replace("disabled", "enabled");
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});


let buttons = document.querySelectorAll(".another4");
buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("btn-hov");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("btn-hov");
    });
});
buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")) {
            event.target.textContent += "👻";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});