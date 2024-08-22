//Synchronous code executes line by line consecutively in a sequential
//manner. Code that waits for an operation to complete
//Asynchronous code allows multiple operations to be performed concurrently
//without waiting. Doesn't block the execution flow and allows the program
//to continue (I/O operations, network requests, fetching data). Handled
//with: callbacks, promises, async/await
//Synchronous code (line by line) example:
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
//Asynchronous code example:
setTimeout(() => console.log("Task 0"), 3000); //Task 0 will be finished after 3 seconds. Tasks 1-3 will be finished earlier


function f1(callback){ //asynchronous function
    setTimeout(() => {console.log("Task 0")
                      callback()}, 3000);

}
function f2(){ //will be executed after f1()
    console.log("Task 4");
    console.log("Task 5");
    console.log("Task 6");
}
f1(f2);