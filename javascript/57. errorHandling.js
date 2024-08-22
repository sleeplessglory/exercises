//Error is an object created to represent a problem that occurs
//often with user input or establishing a connection. Issues that 
//generate errors: network errors, promise rejection, security problems

//console.lag("Hello"); //Uncaught TypeError (interrupts the flow, so the rest of the code won't be executed)
//console.log(x); //Uncaught ReferenceError (interrupts too)
//console.log("You've reached the end!");
//Handling errors with blocks (so, errors won't interrupt the rest of the code):
//try {} encloses code that might potentially cause an error
//catch {} catches and handles any thrown errors from "try {}"
//finally {} (optional) always executes. Used mostly for clean up
//e.g. close files, close connections, release resources
try { //encloses the potential problem
    console.log(x);
}
catch(error) { //catches from "try {}" and handles it
    console.error(error); //ReferenceError: x is not defined. Use "console.error" to highlight it
}
finally { //optional block (used whether an error occurs or not)
    console.log("This always executes");
}
console.log("You've reached the end!");


try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0) {
        throw new Error("You can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)) { //if these variables aren't numbers
        throw new Error("Values must be a number");
    }
    
    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.error(error);
}
console.log("You've reached the end again!");