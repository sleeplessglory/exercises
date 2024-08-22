//Allows a new class to inherit properties and methods from an existing class (parent -> child)
class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal { //"extends" sets a relationship that "Animal" is a parent class for a "Rabbit" (child class)
    name = "rabbit";
    run() {
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal {
    name = "fish";
    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal {
    name = "hawk";
    fly() {
        console.log(`This ${this.name} is flyng`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//rabbit.alive = false; //can be changed

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
//fish.run(); //an error, because it can't run (according to our methods)
//hawk.swim(); //same as above
//rabbit.fly(); //same as above