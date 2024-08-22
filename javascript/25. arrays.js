let fruits = ["apple", "orange", "banana"]; //indexing from 0

fruits.push("coconut"); //.push() adds the next element to the end of an array
fruits.pop(); //.pop() removes the last element of an array;
fruits.unshift("mango"); //.unshift() adds the specified element to the beginning of an array
fruits.shift(); //.shift() removes the first element of an array;

console.log(fruits.length); //the length (amount of elements) of an array
console.log(fruits.indexOf("apple")); //defining the index of the specified element, same as for strings
//in case the .indexOf() returns "-1", that means that the specified element does not exist in an array
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//or there's a simple way:
for (let fruit of fruits) {
    console.log(fruit); //"fruit" is chosen instead of "i", could be anything
}

fruits.sort(); //sort the elements alphabetically
fruits.sort().reverse(); //sort the elements in a reverse alphabetical way