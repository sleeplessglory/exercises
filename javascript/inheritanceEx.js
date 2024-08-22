class SchoolClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    isStudent = true;
    see(){
        console.log(`I'm ${this.name} and I can see!`);
    }
}

class Child1 extends SchoolClass { //super(name, age) is recommended to use
    draw(){
        console.log(`I'm ${this.name} and I can draw!`); //better use "super" keyword to access the constructor of a parent class
    }
}

class Child2 extends SchoolClass{
    swim(){
        console.log(`I'm ${this.name} and I can swim!`);
    }
}

Martin = new Child1("Martin", 25);
console.log(Martin);
console.log(Martin.isStudent);
Martin.see();
Martin.draw();

Stefani = new Child2("Stefani", 30);
console.log(Stefani.isStudent);
Stefani.see();
Stefani.swim();