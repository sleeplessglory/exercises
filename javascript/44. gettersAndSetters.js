//Getter is a special method that makes a property readable
//Setter is a special method that makes a property writable
//Can be used to modify a value when reading/writing a property. So, users don't input inappropriate values
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){ //for a Setter we specify the property "width"
        if(newWidth > 0) {
            this._width = newWidth; //"_width" means it's a private property that shouldn't be touched by other developers
        }
        else {
            console.error("Width must be a positive number"); //"".error" is used to show an error within the console
        }
    }
    set height(newHeight){
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number"); //"".error" is used to show an error within the console
        }
    }
    get width(){
        return this._width; //now width is not only writable but also readable
    }
    get height(){
        return this._height;
    }

    get area(){ //with Getter now this will be accessed as if it was a property below (technically it's not)
        return this._width * this._height;
    }
}

//const rectangle = new Rectangle(-1000000, "pizza"); //testing setters
const rectangle = new Rectangle(3, 4); //still are undefined, since with Setters they're writable now, but not readable yet! Add Getters now. Values are shown now

rectangle.width = 5; //can be changed
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area); //"area" is being accessed as if it was a property (technically it's not)


class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >=0 ) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a positive number");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){ //still can add this Getter even if we don't have such property (pretending as it was)
        return this._firstName + " " + this._lastName;
    }
    get age(){
        return this._age;
    }
}
//const person1 = new Person(420, 69, "pizza"); //variables are inappropriate (we'll use setters again)
const person1 = new Person("Florence", "Welch", 37); //legitimate values now

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);