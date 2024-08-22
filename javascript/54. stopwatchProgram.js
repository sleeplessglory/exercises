const display = document.getElementById("display");
let timer; //"null" means no value, holds the ID of "setInterval" function
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if(!isRunning) { //if it's false
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); //every 10 ms will be updated
        isRunning = true;
    }
}
function stop() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; //in milliseconds

    let hours = Math.trunc(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.trunc(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.trunc(elapsedTime / 1000 % 60);
    let milliseconds = Math.trunc(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0); //same as in the previous exercise
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);
    
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}