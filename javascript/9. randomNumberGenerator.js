const min = 50;
const max = 100;
//By default random() will get the number between 0 and 1: interval (0; 1). So, to set it between 20 and 30, interval (0; 1) will be * (30-20) = (0; 10) and also + 20 to each side is = (20; 30)
let randomNum1 = Math.trunc(Math.random() * 6) + 1;
console.log(randomNum1);

let randomNum2 = Math.random() * (max - min) + min; //From 50 to 100: interval (50; 100). Check the explanation above
console.log(randomNum2);
//Let's make a random number generator for the dice
const myButton = document.getElementById("myButton"); //Already assigned with "document.getEl...". Won't need to type it again while calling the function() below
const myLabel = document.getElementById("myLabel"); //Same as above
const minDice = 1;
const maxDice = 6;
let randNum;

myButton.onclick = function() { //Already assigned "myButton" earlier
    randNum = Math.trunc(Math.random() * maxDice) + minDice;
    myLabel.textContent = randNum;
}