const passwordLength = 22;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=\|/<>?'`;:,.{}[]~";

    let allowedChars = "";
    let password = "";
    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0) {
        return "Password length must be at least 1";
    }
    else if(allowedChars.length === 0) {
        return "At least 1 set of character needs to be selected";
    }
    else {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.trunc(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        return password;
    }
}

const password = generatePassword (passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);