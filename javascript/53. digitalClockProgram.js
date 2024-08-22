function updateClock() {
    const now = new Date(); //the current date is stored within this object
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "p.m." : "e.m.";
    hours = hours % 12 || 12; //"|| 12" means that if the remainder equals 0, then 12 will be showed instead
    hours = hours.toString().padStart(2, 0); //.toString() returns a string representation of an object, and .padStart(), as was previously learned, sets 2 characters for hours and it starts with "0", if only one character's used
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000); //will call the function repeatedly, where 1000 ms means every second