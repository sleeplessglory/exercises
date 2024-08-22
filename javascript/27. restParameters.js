//Allows a function work with a variable number of arguments by bundling them into an array
//'spread' expands an array into separate elements
//'rest' bundles separated elements into an array
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods) { //rest parameters (...foods) allows to accept any number of arguments
    console.log(...foods); //spread parameters (a string is shown) unpacked the array
}
openFridge(food1, food2, food3, food4, food5);

function getFood(...foods) { //rest parameters are bundled as an array now
    console.log(foods); //shows an array
}
getFood(food1, food2, food3, food4, food5);

function sum(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    console.log(`Your total is $${result}`);
}
sum(4, 7, 11);

function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    console.log(`Your total is $${result/numbers.length}`);
}
getAverage(11, 11, 11);

function combineStrings(...strings){ //bundled as an array
    return strings.join(" ") //.join(" ") will add strings together with " " in between them (a string will be returned)
}
const fullName = combineStrings("Florence", "+", "The", "Machine");
console.log(fullName);