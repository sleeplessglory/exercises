//External files that contain reusable code that can be imported into other JS files
//Write reusable code for many different apps. Can contain variables, classes, functions, etc.
//Introduced as part of ECMAScript 2015 update
//Created mathUtil.js file within the current folder to import it
//The current JS file must have "module" type specified within its HTML file in order to import files
import {PI, getCircumference, getArea, getVolume} from "./mathUtil.js" //destructuring within {}

console.log(PI);

const circumference = getCircumference(10);
console.log(circumference.toFixed(2));