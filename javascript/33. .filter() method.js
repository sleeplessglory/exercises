//Creates a new array by filtering out elements (based on "true" or "false")
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums, oddNums);

function isEven(element) { //callback function
    return element % 2 === 0; //returning "true" or "false"
}

function isOdd(element) { //callback function
    return element % 2 !== 0;
}


const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const minors = ages.filter(isMinor);

console.log(adults, minors);

function isAdult(element) { //callback function
    return element >= 18;
}

function isMinor(element) {
    return element < 18;
}


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords, longWords);

function getShortWords(element) {
    return element.length < 7;
}

function getLongWords(element) {
    return element.length >= 7;
}