//Reduces the elements of an array to a single value
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, element) { //previous sum of elements and a current element
    return previous + element; //this sum is a new "previous" element for the next pair of elements (explained below)
}
// [5, 30, 10, 25, 15, 20]; for the first iteration the sum (5+30=35). Now the initial array is reduced to a smaller one: [35, 10, 25, 15, 20]
// [35, 10, 25, 15, 20]; for the second iteration the sum is 35+10=45. The reduced array now is [45, 25, 15, 20]
// [45, 25, 15, 20]; for the next iteration now the sum is 45+25=70. The new array: [70, 15, 20]
// [70, 15, 20] will be reduced into [85, 20]
// [85, 20] will be reduced to the final single value sum=85+20=105. The whole array has been reduced into the value (according to the rule of sum specified)
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(previous, element) { //"previous" can also be called "accumulator"
    return Math.max(previous, element); //
}