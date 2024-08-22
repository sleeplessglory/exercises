//(ES6 feature) provide a more structured and cleaner way to work with objects compared to traditional constructure functions
// e.g. static keyword, encapsulation, inheritence
class Products { //this class is reusable
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct(){ //inside classes no need to use keywords for functions
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`); //.toFixed() method shows 2 digits in the decimal part
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Products("Shirt", 19.99); //creating an object
const product2 = new Products("Pants", 22.50);
const product3 = new Products("Underwear", 100);
const salesTax = 0.05; //5%
const total = product1.calculateTotal(salesTax); //for shirt

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
console.log(`Total price (with tax): $${total.toFixed(2)}`);