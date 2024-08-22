const Mall = {
    name: "Red & White",
    floors: 4,
    estimatedValue: 1000000,
    address: {
        country: Canada,
        city: Montreal
    }
}
console.log(Mall.address.country);

class Person {
    constructor(name, age, ...details) {
        this.name = name;
        this.age = age;
        this.university = new University(...details);
    }
}
class University {
    constructor(name, major, graduationYear) {
        this.name = name;
        this.major = major;
        this.graduationYear = graduationYear;
    }
}

const personObject = new Person ("Marin", 22, "RTU MIREA", "Software Engineering", 2023);
console.log(personObject.university.major);