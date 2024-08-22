//An efficient replacement to many "if"/"else" statements
let day = 1;

switch(day) {
    case 1:
        console.log("It is Monday");
        break; //helps to get out of the switch, otherwise next cases will be executed
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default: //If there're no matches with cases
        console.log(`${day} is not a day`);
}

let testScore = 94;
let letterGrade;

switch(true) { //"true" means that the case will be executed, if the statement is true, otherwise will be skipped
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);