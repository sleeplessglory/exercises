//"this" is a reference to the object where "this" is used. The object depends on the immediate context.
//Used in object methods, where "this" refers to the object that the method is attached to, thus allowing the same method to be reused on different objects
//person.name = this.name
const person = {
    name: "Stefani",
    favFood: "spaghetti",
    sayHello: function(){console.log(`I'm ${this.name}`)}, //we use "this.name" (or can use "person.name"), otherwise it won't show it
    eat: () => {console.log(`${person.name} is eating ${person.favFood}`)}, //"this." doesn't work with arrow functions. Use the function() itself or specify properties as "objectName." ("person.")
};
person.sayHello();
person.eat();

const person2 = {
    name: "Martin",
    favFood: "pizza",
    sayHello: function(){console.log(`I'm ${this.name}`)}, //we use "this.name" (or can use "person.name"), otherwise it won't show it
    eat: () => {console.log(`${person2.name} is eating ${person2.favFood}`)}, //"this." doesn't work with arrow functions. Use the function() itself or specify properties as "objectName." ("person." this time)
};
person2.eat();