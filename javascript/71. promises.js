//An object that manages asynchronous operations. Wrap a Promise Object
//around {asynchronous code}. "I promise to return a value"
//PENDING -> RESOLVED or REJECTED
//new Promise((resolve, reject) => {asynchronous code})

//Do these chores in order:
//1. Walk the dog
//2. Clean the kitchen
//3. Take out the trash
function walkDog(){
    return new Promise((resolve, reject) => { //returns a promise object
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked) {
                resolve("You walk the dog"); //resolve() function with its parameter
            }
            else {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;
            if(kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut) {
                resolve("You take out the trash");
            }
            else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}
//walkDog(() => { //Callback Hell
//    cleanKitchen(() => {
//        takeOutTrash(() => console.log("You finished all the chores!"));
//    })
//})
walkDog().then(value => {console.log(value); return cleanKitchen();}) //method chaining
         .then(value => {console.log(value); return takeOutTrash();}) //method chaining
         .then(value => {console.log(value); console.log("You finished all the chores!")}) //method chaining
         .catch(error => console.error(error)); //in case any rejections will be caught, where error is the message specified accordingly for reject case
//After walkDog() is executed, then pass its value to the arrow function which shows it and also return the next function/chore, and so on...
//If any reject is being caught, the rest of the tasks won't be invoked later on