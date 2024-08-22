class Parent {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    jump(jumpHeight){
        console.log(`I'm ${this.name} and I can jump above ${jumpHeight} meters!`)
    }
}

class Child1 extends Parent{
    constructor(name, age, height){
        super(name, age);
        this.jumpHeight = height;
    }
    run(){
        console.log(`I'm ${this.name}, I'm ${this.age} and I can run!`);
        super.jump(this.jumpHeight);
    }
}

const Mike = new Child1("Mike", 27, 1.2);
console.log(Mike);
Mike.run();
//Overall: keep in mind to use "this." before properties, if they're defined within the current class!