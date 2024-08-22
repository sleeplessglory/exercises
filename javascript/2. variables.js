//Numbers
let x; //declaration of a variable
x=100; //assignment
let y = 200; //both declaration and assignment
let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(`I am ${age}`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);
console.log(typeof age);

//Strings
let firstName = "sleeplessglory";
let favouriteFood = "pizza";
let email = "sleeplessglory@outlook.com"
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);

//Booleans
let online = true;
let forSale = false;
console.log(typeof online);
console.log(`sleeplessglory is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);

let fullName = "sleepless glory";
age = 22;
let isStudent = false;
document.getElementById("par1").textContent = `Your name is ${fullName}`;
document.getElementById("par2").textContent = `You're ${age}`;
document.getElementById("par3").textContent = `Enrolled: ${isStudent}`;