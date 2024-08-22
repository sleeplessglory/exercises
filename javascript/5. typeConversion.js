let age = window.prompt("How old are you?") //User input will be string
age = Number(age); //Converting into number
age+=1;
console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number(x);
y = String(y);
z = Boolean (z);
console.log(x, typeof x); //NaN (not a number)
console.log(y, typeof y); //pizza (string)
console.log(z, typeof z); //true (boolean), as long as "z" is not empty