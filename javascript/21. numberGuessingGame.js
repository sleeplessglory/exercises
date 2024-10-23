const minNum = 50;
const maxNum = 100;
const answer = Math.trunc(Math.random()*(maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)){ //isNan() is a method that checks whether the variable has a number data type or not
        window.alert("Enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Enter a valid number");
    }
    else {
        attempts++;
        if(guess < answer){
            window.alert("Too low. Try again");
        }
        else if(guess > answer){
            window.alert("Too high. Try again");
        }
        else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts!`);
            running = false;
        }
    }
}