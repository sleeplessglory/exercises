//Call one method after another in one continuous line
//let userName2 = window.prompt("Enter your username:");
//No method chaining:
userName2 = userName2.trim();
let letter = userName2.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName2.slice(1);
extraChars = extraChars.toLowerCase();
userName2 = letter + extraChars;
console.log(userName2);
//Method chaining:
userName2 = userName2.trim().charAt(0).toUpperCase() + userName2.trim().slice(1).toLowerCase();
console.log(userName2);