//Allows to extract value from arrays and objects, then assign them to variables in a convenient way
//"[]" is used to perform array destructuring
//"{}" to perform object destructuring
//Let's swap the value of 2 variables
let n = 7;
let r = 11;

[n, r] = [r, n];
console.log(n, r);


//Swap 2 elements in array
const children = ["Ann", "Martin", "Andrew"];
[children[0], children[2]] = [children[2], children[0]];
console.log(children);


//Assign array elements to variables
const [firstChild, secondChild, thirdChild] = children;
console.log(firstChild, secondChild, thirdChild);


//Extract values from objects
const house1 = {
    price: 1000000,
    colour: "White and purple",
    owner: "Me"
}
const house2 = {
    price: 500000,
    colour: "White"
}
const {price, colour, owner="newOwner"} = house2;
console.log(price, colour, owner);


//Destructure in function parameters
//Let's use the "house2" object again
function describeHouse({price, colour, owner="anotherOwner"}){
    console.log(`Price is ${price}`);
    console.log(`Colour is ${colour}`);
    console.log(`Owner is ${owner}`);
}
describeHouse(house2); //Let's pass the previously declared "house2" object