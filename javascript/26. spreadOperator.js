//Allows an iterable (array, string) to be expanded into separate elements (unpacks the elements)
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers); //result will be "NaN", since it's an array
let maxNum = Math.max(...numbers); //now we allowed to spread (unpack) the array into different elements
let minNum = Math.min(...numbers);
console.log(maxNum, minNum);

let trackTitle = "Various Storms & Saints";
let letters = [...trackTitle]; //created an array and spread the string into it
console.log(letters); //['V', 'a', 'r', 'i', 'o', 'u', 's', ' ', 'S', 't', 'o', 'r', 'm', 's', ' ', '&', ' ', 'S', 'a', 'i', 'n', 't', 's'] is the result
letters = [...trackTitle].join("-"); //.join() adds the specified character(s) to the unpacked version of a string within an array
console.log(letters); //V-a-r-i-o-u-s- -S-t-o-r-m-s- -&- -S-a-i-n-t-s (not an array)

//off the previous exercise let's use the fruits array
let newFruits = [...fruits]; //a copy array containing the same values from the previous exercise
let vegetables = ["carrots", "tomatoes", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"]; //we can add 2 arrays with spread operator for a new one and also write new elements too

console.log(foods);