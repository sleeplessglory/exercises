//Object() that represents the page you see in the web browser and
//provides you with an API to Internet with it. Web browser constructs
//the DOM when it loads an HTML document and structures all the elements
//in a tree-like representation. JS can access the DOM to dynamically
//change the content, structure and style of a web page
console.log(document); //shows the DOM in the console
console.dir(document); //(directory) shows all the properties of the object

//document.title = "How Big, How Blue, How Beautiful"; //accessed the "title" property and changed it
//document.body.style.backgroundColor = "hsl(241, 88%, 26%)";
const username = "sleeplessglory";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? "Guest" : username;