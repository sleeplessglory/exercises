//Keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)
class MathUtil {
    static PI = 3.14159; //no need to create an object to access this property
    static getDiameter(radius) {
        return radius*2;
    }
    static getCircumference(radius) {
        return 2*this.PI*radius;
    }
    static getArea(radius) {
        return this.PI*radius*radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


class User {
    static userCount = 0; //can't be accessed by "this", only by class (commented below)
    constructor(username) {
        this.username = username;
        User.userCount++; //"userCount" is static and belongs to the class only
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Florence");
const user2 = new User("Elizabeth");

console.log(user1.username);
console.log(user2.username);
//console.log(user1.userCount); //won't be executed since "userCount" is static and belongs to the class only
console.log(User.userCount); //now we can access userCount
User.getUserCount();

user1.sayHello();
user2.sayHello();