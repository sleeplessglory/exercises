//Ternary operator is a shortcut to if() and else() statements, which helps to assign a variable based on a condition:
//condition ? codeIfTrue : codeIfFalse;
let a = 22;
let message = a >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let hungry = true;
let state = hungry ? "I'm hungry" : "I'm not hungry"; //With booleans we just use its variable
console.log(state);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? purchaseAmount*0.9 : purchaseAmount;
console.log(discount);