//Objects that contain values that represet dates and times
//These date objects can be changed and formatted
let date = new Date(); //assigns your current time (we created "date" object, the "new Date()" is a constructor)
console.log(date); //current date and time

//Date(year, month /from 0 to 11, as arrays/, day, hour, minute, second, ms)
date = new Date(2024, 0, 1, 2, 3, 4, 5); //Mon Jan 01 2024 02:03:04 GMT+0300
console.log(date); //Mon Jan 01 2024 02:03:04 GMT+0300

date = new Date("2024-01-02T12:00:00Z"); //"T" stands for "time" and "Z" for the UTC time
console.log(date); //Tue Jan 02 2024 15:00:00 GMT+0300 since it's +0300 to ours

date = new Date(1700000000000); //ms since the epic date (date when computer thinks it started);
console.log(date); //Wed Nov 15 2023 01:13:20 GMT+0300

const year = date.getFullYear(); //gets the year of the "date"
console.log(year); //2023 (off the last "date" assignment)

const month = date.getMonth();
console.log(month); //10, since November is 10 and January is 0

const day = date.getDate(); //.getDate() is for numbers (of the month), but .getDay() will assign numbers of the week (1 for Monday, 2 for Tuesday, etc.)
console.log(day); //15

const hour = date.getHours();
console.log(hour); //1

const minutes = date.getMinutes();
console.log(minutes); //13

const seconds = date.getSeconds();
console.log(seconds); //20

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);
console.log(date); //Mon Jan 01 2024 02:03:04 GMT+0300

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1) {
    console.log("Happy New Year!");
}