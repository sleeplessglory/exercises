const PI = 3.14159; //declaring it as a constant won't let change it later on. Only const numbers and booleans have capitalised const names, not strings 
let radius;
let circumference;

//PI = 420.94; //JS won't let reassign it due to being const

//radius = window.prompt("Enter the radius of a circle")
//radius = Number(radius);

//circumference = 2 * pi * radius;

document.getElementById("submit").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("circumference").textContent = `Circumference is ${circumference}`+" cm";
}