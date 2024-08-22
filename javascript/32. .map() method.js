//Accepts a callback and applies that function to each element of an array, then returns a new array (similar to .forEach(), but returns a new array)
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}


const students = ["Florence", "Adele", "Stefani", "Elizabeth"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element) {
    return element.toUpperCase();
}


const dates = ["2024-8-11", "2020-1-1", "2021-7-19"]; //Let's declare the date as YYYY-MM-DD
const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates (element) {
    const parts = element.split("-"); //.split("-") splits an element where "-" is detected. Now the parts are: "2024", "8", "11", "2020", "1", "1", "2021", "7", "19"
    //console.log(parts); "parts" now consists of many arrays. The 1st array is made out of the 1st element of the initial array: ["2024", "8", "11"]. The 2nd is made out of the 2nd, etc.
    return `${parts[2]}/${parts[1]}/${parts[0]}` //rearranging the date format as DD-MM-YYYY. Every index stands for its element within each array of "parts" (commented above)
}