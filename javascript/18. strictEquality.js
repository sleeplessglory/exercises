// "=" is assignment operator
// "==" is comparison operator
// "===" is strict equality operator (compare whether values & data types are equal)
// "!=" is inequality operator
// "!==" is strict inequality operator
const e = 2.7;

if(e == "2.7") { //with "===" the else statement would be executed, because of different data types
    console.log("That is e");
} 
else {
    console.log("That is not e");
}

if(e != "2.7") {
    console.log("That is not e");
}

if(e !== "2.7") { //checking the value & data type as well
    console.log("That is not e");
}