// inventory.js

const fs = require('fs');

class Product {
    constructor(name, productId, price, stock = 0) {
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.stock = stock;
    }

    addStock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
            this.logAction(`Added ${quantity} units of ${this.name}. New stock: ${this.stock}`);
        } else {
            this.logAction("Invalid stock quantity.");
        }
    }

    sell(quantity) {
        if (quantity > 0 && this.stock >= quantity) {
            this.stock -= quantity;
            this.logAction(`Sold ${quantity} units of ${this.name}. Remaining stock: ${this.stock}`);
        } else {
            this.logAction(`Insufficient stock for ${this.name}. Available: ${this.stock}`);
        }
    }

    logAction(message) {
        console.log(message);
        fs.appendFileSync('output.txt', message + '\n');
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        this.logAction(`Added product: ${product.name}`);
    }

    sellProduct(productId, quantity) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            product.sell(quantity);
        } else {
            this.logAction("Product not found.");
        }
    }

    checkStock(productId) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            this.logAction(`Stock for ${product.name}: ${product.stock}`);
        } else {
            this.logAction("Product not found.");
        }
    }

    logAction(message) {
        console.log(message);
        fs.appendFileSync('output.txt', message + '\n');
    }
}

// Clear previous output
fs.writeFileSync('output.txt', '');

// Testing the Inventory System
const inventory = new Inventory();

const product1 = new Product("Laptop", 101, 1200);
const product2 = new Product("Phone", 102, 800, 10);

inventory.addProduct(product1);
inventory.addProduct(product2);

product1.addStock(5);
product2.sell(3);
inventory.sellProduct(101, 2);
inventory.checkStock(101);
inventory.checkStock(102);
