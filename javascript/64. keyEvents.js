//eventListener listens for specific events to create interactive web pages
//These events also include: keydown, keyup
//document.addEventListener(event, callback);

document.addEventListener("keydown", event =>{ //when we press any key on the keyboard
    //console.log(event);
    //console.log(`Key down = ${event.key}`);
});
document.addEventListener("keyup", event => {
    //console.log(`Key up = ${event.key}`);
});


const keyBox = document.getElementById("keyBox");
document.addEventListener("keydown", event =>{ //when we press any key on the keyboard
    keyBox.textContent = "😲";
    keyBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
    keyBox.textContent = "😊";
    keyBox.style.backgroundColor = "lightblue";
});

const moveAmount = 10;
let x = 0; //initial X-axis value;
let y = 0; //initial Y-axis value;
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) { //eventListener works only if the "event.key" starts with "Arrow" (left, up, right, down)
        event.preventDefault(); //won't be scrolling alongside with the slide bar, just on its own
        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        keyBox.style.top = `${y}px`; //"top" property in pair with "relative" position value in CSS
        keyBox.style.left = `${x}px`; //"left" property in pair with "relative" position value in CSS
    }
});