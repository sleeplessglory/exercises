//Creating a substring out of another with .slice(starting index, ending index+1)
const fullName = "sleepless glory";
let firstName = fullName.slice(0, 9); //Despite "s" has index 8, we have to write 9, since the last index is exclusive for this method
console.log(firstName);
let lastName = fullName.slice(10, 15); //This time you can use just .slice(10), if you want it till the end
console.log(lastName);
let lastChar = fullName.slice(-1); //Starts from the end. -1 is for the last character, -5 will return the last 5 characters
console.log(lastChar);
//A better way is to find when " " is met:
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);

const email = "sleeplessglory@outlook.com";
let userName1 = email.slice(0, email.indexOf("@"));
console.log(userName1);
let extension = email.slice(email.indexOf("@")+1);
console.log(extension);