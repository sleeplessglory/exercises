//A way to define functions as values or variables (not a function declaration)
const hello = function() { //Assigning a function to a variable
    console.log("Hello");
};

hello(); //The function() will be called now by the name it was assigned to

setTimeout(hello, 3000); //hello() will be executed after 3000ms = 3s
setTimeout(function(){ //An entire f() was passed as an argument (treated as a value)
    console.log("Hey");
}, 3000); //The end of arguments for setTimeout()


const numbers = [1, 2, 3, 4, 5, 6];
const squares1 = numbers.map(square1);

console.log(squares1);

function square1(element) { //This time it's a function declaration
    return Math.pow(element, 2);
}

const squares2 = numbers.map(function(element) { //This time we used a function expression instead. No need to name a function then ('cause it's used just once)
    return Math.pow(element, 2);
});

console.log(squares2);

const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
});

console.log(cubes);

const evenNums = cubes.filter(function(element) {
    return element % 2 === 0;
});

console.log(evenNums);

const sumEvenNums = evenNums.reduce(function(accumulator, element) {
    return accumulator + element;
});

console.log(sumEvenNums);