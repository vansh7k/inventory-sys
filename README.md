# Inventory Management System

## Project Description
This Inventory Management System is built using JavaScript. It consists of two main classes:

1. **Product Class**: Represents an individual product with properties like name, productId, price, and stock.
2. **Inventory Class**: Manages a collection of products, allowing stock additions, product sales, and stock checks.

## Features
- Add stock to products.
- Sell products if enough stock is available.
- Check available stock for a product.

## Expected Output
Below is a sample output when the script is executed:
```
Added product: Laptop
Added product: Phone
Added 5 units of Laptop. New stock: 5
Sold 3 units of Phone. Remaining stock: 7
Sold 2 units of Laptop. Remaining stock: 3
Stock for Laptop: 3
Stock for Phone: 7
```

## How to Run in VS Code
1. Ensure you have **Node.js** installed.
2. Open **VS Code** and navigate to the folder containing `inventory.js`.
3. Open the integrated terminal in VS Code by pressing **Ctrl + `** (backtick) or going to **View > Terminal**.
4. Run the script using the command:
   ```sh
   node inventory.js
   ```
5. Observe the console output in the terminal for expected results.
