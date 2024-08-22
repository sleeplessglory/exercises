let userName3 = "";

while(userName3 === "" || userName3 === null) {
    userName3 = window.prompt("What's your username?");
}

do { //the same variation as above, but now we're able not to assign the initial userName3
    userName3 = window.prompt("What's your username?");
} while(userName3 === "" || userName3 === null)
console.log(userName3);

let loggedIn = false;
let userName4;
let password;

while(!loggedIn) {
    userName4 = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");
    if (userName4 === "myUsername" && password == "myPassword") {
        loggedIn = true;
        console.log("You're logged in");
    }
    else {
        console.log("Invalid credentials! Please, try again");
    }
}