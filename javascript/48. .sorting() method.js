//.sort() method is used to sort elements of an array in place. We sort them as strings in lexicographic order, not alphabetical.
//lexicographic = (alphabet + numbers + symbols) as strings
let fruits = ["apple", "orange", "banana"];
let numbers = [5, 6, 2, 3, 1, 7, 4, 9, 8, 10];
const people = [{name: "Florence", age: 37}, 
                {name: "Stefani", age: 38}, 
                {name: "Elizabeth", age: 39}, 
                {name: "Adele", age: 36}];

fruits.sort();
console.log(fruits); //["apple", "banana", "orange"]

//numbers.sort();
//console.log(numbers); //[1, 10, 2, 3, 4, 5, 6, 7, 8, 9] meaning sorting by the first digit priority and then the second, so on... We treat them as strings, not numbers
numbers.sort((a, b) => a - b); //(a, b) means comparing the current and the next element of initial array (without swapping). (a - b) returns a negative, 0 or a positive number
console.log(numbers); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.sort((a, b) => b - a); //for a reverse sorting/order
console.log(numbers);

people.sort((a, b) => a.age - b.age); //"a" is the 1st object, "b" is the 2nd. "a.age" will access its property, same with "b.age"
console.log(people); //Objects are sorted by their ages: 36, 37, 38, 39
people.sort((a, b ) => a.name - b.name);
console.log(people); //Adele, Florence, Stefani, Elizabeth (making no sense now). Use another formula for strings within the objects!
people.sort((a, b) => a.name.localeCompare(b.name)); //Adele, Elizabeth, Florence, Stefani
people.sort((a, b) => b.name.localeCompare(a.name)); //for a reverse option: Stefani, Florence, Elizabeth, Adele
console.log(people);