class Beverage {
    constructor(category, name, price){
        this.category = category;
        this.name = name;
        this.price = price;
    }
    info(){
        console.log(`Category: ${this.category}`);
        console.log(`The name: ${this.name}`);
        console.log(`The price: $${this.price}`);
    }
    totalPrice(quantity){
        console.log(`The total price for ${quantity} ${this.name} is $${(quantity*this.price).toFixed(2)}`);
    }
}

const water = new Beverage("water", "Bottle of water (1l)", 0.1);
const cider = new Beverage("alcohol", "Alska cider (Swedish)", 5);
const juice = new Beverage("juice", "PRO SOK (Cherry)", 1.5);

console.log(water.category);
console.log(water.name);
console.log(water.price);
water.info();
water.totalPrice(7);

cider.info();
cider.totalPrice(9);

juice.info();
juice.totalPrice(11);