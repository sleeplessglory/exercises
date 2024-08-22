//A function defined inside of another function
//The inner function has access to the variables and scope of the outer function
//Allows for private variables and state maintenance
function outer() {
    let message = "Hello";
    function inner(){ //has access to everything within "outer()"
        console.log(message);
    }
    inner();
}
message = "Goodbye"; //won't affect the "message" within "outer()"
outer(); //message will be shown if we invoke "inner()" within "outer()"


function increment(){
    let count = 0; //no state maintenance in this example (check out the example below)
    count++;
    console.log(`Count increased to ${count}`);
}

increment();
increment();
increment(); //"count" is still = 1, since it's initialised while invoking "increment()"


function createCounter(){
    let count = 0; 

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    //return {increment} //{increment: increment} is the same, but full version for this line. We return object with the method of "increment"
    //let's add another function and modify what we return now
    function getCount(){
        return count;
    }
    return {increment, getCount}; //we added another property "getCount"
}

const counter = createCounter();

counter.increment(); //count = 1;
counter.increment(); //count = 2;
counter.increment(); //count = 3; Similar to invoking the class methods!

//counter.count = 0;
//console.log(count); //error: "count" is not defined
//console.log(counter.count); //undefined

console.log(`The current count is ${counter.getCount()}`);


function createGame(){ //Closure (now the code inside of it is enclosed for security)
    let score = 0;
    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }

    return{increaseScore, decreaseScore, getScore}; //additional code to return an object
}

const game = createGame();

game.increaseScore(5); //after enclosing the functions into the closure we must use "game" object
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);