//"and" is "&&", "or" is "||", "not" is "!"
const temp = 20;
if(temp > 0 && temp <= 30) {
    console.log("The weather is good");
}
else {
    console.log("The weather is bad");
}

if(temp <= 0 || temp > 30) {
    console.log("The weather is bad");
}
else {
    console.log("The weather is good");
}

const isSunny = true;
if(!isSunny){
    console.log("It's cloudy");
}
else {
    console.log("It's sunny");
}