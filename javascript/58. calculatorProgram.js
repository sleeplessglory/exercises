const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try {
        display.value = eval(display.value); //eval() is kind of a calculator itself, which returns what you specify within "()"
    }
    catch (error) {
        display.value = "Error";
    }
}