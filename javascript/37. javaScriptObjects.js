//Collections of related properties and/or methods that can represent real world objects (people, products, places)
// object = {key:value,        //properties
//               function()};  //methods
const person = { //an object ("const" is optional)
    firstName: "Florence", //key: value,
    lastName: "Welch", //for object properties or methods we separate them with "," (even functions end with it, not ";")
    age: 37,
    isEmployed: true,
    sayHello: function() {console.log("Hi! I'm Florence. I'm English. AHAHAHHA")}, //Do not use ";" in the end. Use "," within objects instead
    sing: () => {console.log("Some things you let go in order to live. While all around you the buildings sway, You sing it out loud, Who made us this way?")}, //arrow functions can be applied too
    eat: () => {console.log("I'm eating this salad now!")},
};

console.log(person.firstName); //access any property of the object
console.log(person.lastName);
console.log(person.age);
person.sayHello(); //access any method of the object
person.sing();
person.eat();