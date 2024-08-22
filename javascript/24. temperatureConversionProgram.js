const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() { //in HTML file for the line of "Submit" button specify an attribute "onclick" with value "convert()" in order to execute whis function 
    if(toFahrenheit.checked) {
        temp=Number(textBox.value);
        temp=temp*9/5+32; //conversion formula
        result.textContent=temp.toFixed(1) + "°F"; //.toFixed(1) gives us additional 1 digit for more precision
    }
    else if(toCelsius.checked) {
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9); //conversion formula
        result.textContent=temp.toFixed(1) + "°F"; //.toFixed(1) gives us additional 1 digit for more precision
    }
    else {
        result.textContent = "Select a unit";
    }
}