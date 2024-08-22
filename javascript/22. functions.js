function happyBirthday(userName5, age) { //function with parameters to be received
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday, dear ${userName5}!`);
    console.log(`You're ${age} years old!`);
}
happyBirthday("sleeplessglory", "22"); //Calling the function and passing it specific arguments to be used within
happyBirthday("Alex", "20");

function add(x, y) {
    let result = x + y;
    return result;
}
console.log(add(2, 3));

function isEven(number1) {
    if(number1 % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
    //another way is to use ternary operator again: 
    //return number1 % 2 === 0 ? true : false
}
console.log(isEven(10));

function isValidEmail(email) {
    if(email.includes("@")){
        return true;
    }
    else {
        return false;
    }
    //another way is to use ternary operator again: 
    //return email.includes("@") ? true : false
}
console.log(isValidEmail("sleeplessglory@outlook.com"));