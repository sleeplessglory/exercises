//Window prompt
let username = window.prompt("What's your username?"); //The input of users will be assigned to this variable
console.log(username);

//HTML textbox
let usename;
document.getElementById("mySubmit").onclick = function() { //Specifying the button, then "onclick" calling the "function()" which assigns the "value" from the box to the username specified
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH2").textContent = `Hello, ${username}!`;
}