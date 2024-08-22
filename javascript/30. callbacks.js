//Functions that are passed as an argument to another function (e.g. we want functions to be executed consequently)
//JavaScript won't wait when one function is executed to go further
//Used to handle asynchronous operations: reading a file, network requests, interacting with databases. So, another function ain't executed before these operations
hello(wait);
function hello(callback) {
    console.log("Hello!");
    callback(); //wait() is called now
}

function wait() {
    console.log("Wait!");
}


function sum(callback, x, y) { //"callback" is specified as a parameter
    let result = x + y;
    callback(result); //passing the result to a callback function
}
sum(displayConsole, 1, 2); //"displayConsole" is a callback funtion specified without "()"

function displayConsole(result) {
    console.log(result);
}

function displayDOM(result){
    document.getElementById("h1CallBack").textContent = result;
}
sum(displayDOM, 22, -48);