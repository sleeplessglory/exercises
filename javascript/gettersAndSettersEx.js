class Pizza {
    constructor(name, size, amount) {
        this.name = name;
        this.size = size;
        this.amount = amount;
    }
    description(){
        console.log(`This is ${this.name} pizza. Its size is ${this.size} and your amount is ${this.amount}`);
    }
    delivery(totalPrice){
        totalPrice > 8 ? console.log("Your delivery is free") : console.log("Your total price must be above $8!")
    }
    set name(newName) {
        if(newName === "Pepperoni" || newName === "Deluxe") {
            this._name = newName;
        }
        else {
            console.error("The pizza names can only be: Pepperoni or Deluxe");
        }
    }
    get name() {
        return this._name;
    }
    set size(newSize) {
        if(newSize === 30 || newSize === 45) {
            this._size = newSize;
        }
        else {
            console.error("Size can only be 30 or 45");
        }
    }
    get size(){
        return this._size;
    }
    set amount(newAmount){
        if(newAmount > 0 && typeof newAmount === "number") {
            this._amount = newAmount;
        }
        else {
            console.error("Amount must be above 0 and a number");
        }
    }
    get amount(){
        return this._amount;
    }
}

class Pepperoni extends Pizza {
    static price30 = 4; //for 30cm
    static price45 = 5; //for 45cm
    constructor(name, size, amount) {
        super(name, size, amount);
    }
    /*
    totalPrice() {
        if(this.size === 45){
            totalPrice = Pepperoni.price45*this.amount;
        }
        else {
            totalPrice = Pepperoni.price30*this.amount;
        }
    }
    */
}

class Deluxe extends Pizza {
    static price30 = 5;
    static price45 = 7;
    totalPrice=0;
    constructor(name, size, amount) {
        super(name, size, amount);
    }
    /*
    totalPrice() {
        if(this.size === 45){
            totalPrice = Deluxe.price45*this.amount;
        }
        else {
            totalPrice = Deluxe.price30*this.amount;
        }
    }
    */
}

const order1 = new Pepperoni("Pepperoni", 45, 2);
const order2 = new Deluxe("Deluxe", 45, 1);

console.log(order2);
console.log(order1);
order1.description();