//For if statements "and" is used as "&&", "or" is used as "||"
let time = 14;
if (time < 12) {
    console.log("Good morning");
}
else {
    console.log("Good afternoon!")
}

let isStudent = false;
if (isStudent) {
    console.log("You are a stundent");
}
else {
    console.log("You ain't a student");
}

let hasLicence=false;
if (age>=16) {
    console.log("You're old enough to drive");
    if(hasLicence){
        console.log("You have your licence");
    }
    else {
        console.log("You do not have your licence yet");
    }
}
else {
    console.log("You have to be 16+ to gave a licence");
}

const myText1 = document.getElementById("myText1");
const mySubmit1 = document.getElementById("mySubmit1");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit1.onclick = function() {
    age = Number(myText1.value); //Already declared myText1 constant above. Text will be converted into number before comparisons
    if(age >= 18) { //If it's true, the rest "else" statements will be skipped
        resultElement.textContent="You're old enough to enter this site";
    }
    else if (age < 0) {
        resultElement.textContent="Your age can't be below 0";
    }
    else if (age == 0) { //Comparison is used with "=="
        resultElement.textContent="You can't enter. You were just born";
    }
    else if (age >=100) { //Will be skipped because it works for the first "if" statement with >=18
        resultElement.textContent="You're too old to enter this site";
    }
    else {
        resultElement.textContent="You must be 18+ to enter this site";
    }
    //In this case it's better to check if age is >=100 first, then the other statements
}