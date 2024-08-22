//Small text file stored on your computer used to remember
//information about the user, saved in name=value pairs
console.log(navigator.cookieEnabled); //returns true, meaning cookies're enabled

//document cookie property can hold more than 1 object
document.cookie = "firstName = sleeplessglory; expires = 11 November, 2024 12:00:00 UTC; path=/"; //default path is used, firstName is chosen as a type of cookie. An object, not a string
document.cookie = "age = 22; expires = 11 January 2024 12:00:00 UTC; path=/"; //won't be shown since expired
console.log(document.cookie);


//to overwrite use it again with another values
document.cookie = "firstName = Stefani; expires = 11 December, 2024 12:00:00 UTC; path=/"; //default path is used, firstName is chosen as a type of cookie. An object, not a string
document.cookie = "age = 38; expires = 28 March 2025 12:00:00 UTC; path=/";
console.log(document.cookie);


function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`; //pattern to assemble cookies (not manually)
}
setCookie("email", "random@gmail.com", 365);
console.log(document.cookie);


function deleteCookie(name){
    setCookie(name, null, null);
}
deleteCookie("email");
deleteCookie("firstName");
deleteCookie("age");
console.log(document.cookie);


setCookie("firstName", "Florence", 365);
setCookie("lastName", "Welch", 365);
function getCookie(name) {
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split("; ");
    console.log(cookieArray);
    let result = null;

    cookieArray.forEach(element => {
        if(element.indexOf(name) == 0) {
            result = element.substring(name.length + 1); //substring of "firstName=Florence" element which returns "Florence" only
        }
    })
    return result;
}
console.log(getCookie("firstName")); //Florence
console.log(getCookie("lastName")); //Welch
console.log(document.cookie);


const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submit-button");
const cookieBtn = document.querySelector("#cookie-button");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});