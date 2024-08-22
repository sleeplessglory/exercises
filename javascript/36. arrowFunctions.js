//A concise way to write function expressions. Good for simple functions that're only used once
//(patameters) => {some code}
const hello = function() { //function expression. Now there's a hello() function
    console.log("Hello");
};

hello(); //function expression invoking (calling)

const hello2 = (name, age) => {console.log(`Hello, ${name}!`); //if more than 1 line, then use "{ }" around
                               console.log(`You're ${age} years old!`);}; //hello2() is an arrow function now

hello2("sleeplessglory", 22); //arrow function invoking (calling it)


setTimeout(() => console.log("Goodbye!"), 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2)); //We don't "return" those elements
console.log(squares);

const oddNums = numbers.filter((element) => element % 2 !== 0); //We don't "return" the elements back when using "=>"
console.log(oddNums);

const sum = numbers.reduce((accumulator, element) => accumulator + element);
console.log(sum);