//Allows to extract value from arrays and objects, then assign them to variables in a convenient way
//"[]" is used to perform array destructuring
//"{}" to perform object destructuring
//Let's swap the value of 2 variables
let a = 1;
let b = 2;

[a, b] = [b, a]; //[a, b] is destructuring
console.log(a, b); //2 and 1 (swapped)


//Swap 2 elements in array
const colours = ["red", "green", "blue", "black", "white"];

[colours[0], colours[4]] = [colours[4], colours[0]];

console.log(colours); // ["white", "green", "blue", "black", "red"]


//Assign array elements to variables
//arrayName = [firstElementName, secondElementName, ];
// [firstVariableName, secondVariableName, ... (if we want)] = arrayName; that's how we destruct the array and assign array elements to variables
const [firstColour, secondColour, thirdColour, ...extraColours] = colours; //for the rest 2 colours we used "rest" parameter (...) and called them as a new array ("extraColours")

console.log(firstColour);
console.log(secondColour);
console.log(thirdColour);
console.log(extraColours);


//Extract values from objects
const person1 = {
    firstName: "Florence",
    lastName: "Welch",
    age: 37,
    job: "Singer"
}
const person2 = {
    firstName: "Stefani",
    lastName: "Germanotta",
    age: 38,
  //job: "Singer" let's pretend there's no such property
}

const {firstName, lastName, age, job="unemployed"} = person2; //we can set a default value while destructuring (e.g. for job)
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


//Destructure in function parameters
function displayPerson({firstName, lastName, age, job="unemployed"}){ //when the object is received, it's destructured within "{firstName, ...}" parameter
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
displayPerson(person1); //let's pass "person1" object to the function