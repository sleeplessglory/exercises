class App {
    static userCount = 0;
    static greeting(){
        console.log(`Hi there! This app has ${App.userCount} users signed up!`);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
        App.userCount++;
    }
    userGreeting(){
        console.log(`Hi! I'm ${this.name}. I'm ${this.age} years old`);
    }
}

user1 = new App("Ann", 22);
App.greeting();
user1.userGreeting();