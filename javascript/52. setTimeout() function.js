//Allows to schedule the execution of a function after an amount of time (milliseconds)
//Times are approximated (values based on the workload of the JS runtime environment)
//Not for precise stuff (like stopwatch)
//setTimeout(callback, delay);
//clearTimeout(timeoutId) can cancel a timeout before it triggers
function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000); //3 seconds delay
setTimeout(() => {window.alert("Hello")}, 5000); //anonymous function

let timeoutId = setTimeout(() => {window.alert("Hello")}, 9000);
clearTimeout(timeoutId); //nothing's gonna happen now


//let timeoutId; //needs to be declared, but has already been
function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 4000);
    console.log("Started the timer");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared the timer");
}