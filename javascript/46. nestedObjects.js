//Objects inside of other objects
//Allows you to represent more complex data structures
//Person{Adress{}, ContactInfo{}}
//ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
const person = {
    fullName: "Florence Welch",
    age: 37,
    isSinger: true,
    hobbies: ["reading", "writing", "cooking"],
    address: {
        street: "God only knows...",
        city: "London",
        country: "Great Britain"
    }
};

console.log(person.fullName);
console.log(person.hobbies);
console.log(person.address); //returns an entire object
console.log(person.address.city); //in order to access the property of the nested class you must use "." again after its name

for(const property in person.address) { //to loop through nested object's properties
    console.log(person.address[property]);
}


class Person {
    constructor(name, age, ...address){ //rest parameter is used
        this.name = name;
        this.age = age;
        this.address = new Address(...address); //calling the constructor of "Address" class (spread operator used)
    }
}
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Florence", 37, "Secret Street", 
                                           "London", 
                                           "Great Britain");

const person2 = new Person("Ann", 28, "Sunny Alley",
                                      "Milan",
                                      "Italy");

const person3 = new Person("Martin", 25, "Night Knight",
                                         "Montreal",
                                         "Canada");

console.log(person1.address.street);
console.log(person3.address.country);