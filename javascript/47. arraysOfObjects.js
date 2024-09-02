const fruits = [{name: "apple", colour: "green", calories: 90},
                {name: "orange", colour: "orange", calories: 45},
                {name: "banana", colour: "red", calories: 105},
                {name: "coconut", colour: "white", calories: 159},
                {name: "pineapple", colour: "yellow", calories: 37}];

console.log(fruits[0].name); //first access the element and then the property as you always do

fruits.push({name: "grape", colour: "purple", calories: 62}); //adding an object to the end
fruits.pop(); //removes the last object of the array
fruits.splice(1, 2); //.splice() removes the specified objects! (not .split() method)

fruits.forEach(fruit => console.log(fruit.name)); //arrow function meaning "for every 'fruit' do this (=>) console.log(fruit.propertyName)". Instead of "fruit" we could use "i" too, which means "for every 'i'..."

const fruitNames = fruits.map(fruit => fruit.name); //created a new array with .map() method and out of each fruit we picked their names
console.log(fruitNames);

const yellowFruits = fruits.filter(fruit => fruit.colour === "yellow");
console.log(yellowFruits);
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalFruits);

const maxCalFruit = fruits.reduce((currentMax, fruit) => 
                                   fruit.calories > currentMax.calories ? //ternary operator
                                   fruit : currentMax); //if true, return the new fruit, otherwise the current one remains
console.log(maxCalFruit.calories); //if you need calories and not the whole object