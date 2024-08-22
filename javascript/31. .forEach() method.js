//Method used to iterate over the elements of an array and apply a specified function (callback) to each element
//element, index and array are provided automatically
let numbers = [1, 2, 3, 4, 5];

function double(element, index, array) {
    array[index] = element * 2;
}

function tripple(element, index, array) {
    array[index] = element * 3;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function display(element) {
    console.log(element);
}

numbers.forEach(double);
numbers.forEach(tripple);
numbers.forEach(square);

numbers.forEach(display);

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalise);
fruits.forEach(upperCase); //calls are executed consequently

fruits.forEach(display);

function capitalise(element, index, array) {
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}