//JSON (Java Script Object Notation) data-interchange format
//Used for exchanging data between a server and a web application
//JSON files {key: value} OR [value1, value2, value3] OR [{}, {}, {}]

//JSON.stringify() converts a JS object/array to a JSON string
//JSON.parse() converts a JSON string to a JS object/array
//.json() is asynchronous and returns a Promise object that resolves to a JavaScript object
const names = ["Florence", "Elizabeth", "Stefani", "Adele"];
console.log(names);
let jsonString = JSON.stringify(names);
console.log(jsonString);

const person = {"name": "Florence", "age": 37, "isEmployed": true, "hobbies": ["singing", "cooking"]}
console.log(person);
jsonString = JSON.stringify(person);
console.log(jsonString);

const people = [{"name": "Florence", "age": 37, "isEmployed": true},
                {"name": "Elizabeth", "age": 39, "isEmployed": true},
                {"name": "Stefani", "age": 38, "isEmployed": true},
                {"name": "Adele", "age": 36, "isEmployed": true}]
console.log(people);
jsonString = JSON.stringify(people);
console.log(jsonString);


//In order to convert a JSON string to a JS object/array, use a pair of ` ` around them and .parse()
const jsonNames = `["Florence", "Elizabeth", "Stefani", "Adele"]`;
console.log(jsonNames);
let parsedData = JSON.parse(jsonNames);
console.log(parsedData);

const jsonPerson = `{"name": "Florence", "age": 37, "isEmployed": true, "hobbies": ["singing", "cooking"]}`
console.log(jsonPerson);
parsedData = JSON.parse(jsonPerson);
console.log(parsedData);

const jsonPeople = `[{"name": "Florence", "age": 37, "isEmployed": true},
                     {"name": "Elizabeth", "age": 39, "isEmployed": true},
                     {"name": "Stefani", "age": 38, "isEmployed": true},
                     {"name": "Adele", "age": 36, "isEmployed": true}]`;
console.log(jsonPeople);
parsedData = JSON.parse(jsonPeople);
console.log(parsedData);


fetch("json/person.json") //the file directory specified
    .then(response => response.json()) //we'll be provided by response object which we convert into JSON format (response.json()) which returns a Promise
    .then(value => console.log(value))
//  .then(values => values.forEach(value => console.log(value))); if you wanna iterate through all the objects separately, use this line instead of the last
//  you can specify the properties of the objects (e.g. value.name or value.age)
    .catch(error => console.error(error)); //if rejections are detected