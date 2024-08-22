let userName = "   sleeplessglory";

console.log(userName.charAt(0)); //.charAt() returns the character of specified index of a string. Starts with index "0" (like arrays) for the 1st letter
console.log(userName.indexOf("o")); //indexOf() returns the index of the specified character that was detected for the 1st time
console.log(userName.lastIndexOf("s")); //lastIndexOf() returns the index of the last time where character was detected
console.log(userName.length); //Just the length property of the variable
console.log(userName.trim()); //Trims white spaces from the beginning and the end of a string
console.log(userName.toUpperCase()); //All letters will be capitalised
console.log(userName.toLowerCase()); //The reverse
console.log(userName.repeat(2)); //.repeat() repeats the string by the specified amount of time
console.log(userName.startsWith("7")); //.startsWith() returns the boolean value, whether the string starts with "7" or not
console.log(userName.endsWith("y")); //.endsWith() returns the boolean value, whether the string ends with "y" or not
console.log(userName.includes("less")); //.includes() returns the boolean value, whether the string includes the specified sequence of characters or not

let phoneNumber = "8-800-555-35-35";
phoneNumber = phoneNumber.replaceAll("-", ""); //.replaceAll("-", "") replaces the "-" characters with "" characters in the string
console.log(phoneNumber);
phoneNumber = phoneNumber.padStart(15, "0"); //.padStart(15, "0") sets 15 characters for the string to end up with and "0" will be added to the beginning to have these 15 characters eventually
console.log(phoneNumber);
phoneNumber = phoneNumber.padEnd(17, "0"); //.padEnd(17, "0") will do the same but at the end of the string
console.log(phoneNumber);