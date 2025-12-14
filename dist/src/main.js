"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./modules/functions");
const cart_1 = require("./modules/cart");
// Тестові дані
const electronics = [
    { id: 1, name: 'Phone', price: 10000, category: 'electronics', brand: 'BrandX', model: 'X100' },
    { id: 2, name: 'Laptop', price: 15000, category: 'electronics', brand: 'BrandY', model: 'Y200' }
];
const clothing = [
    { id: 3, name: 'T-shirt', price: 500, category: 'clothing', size: 'M', material: 'Cotton' },
    { id: 4, name: 'Jeans', price: 1000, category: 'clothing', size: 'L', material: 'Denim' }
];
const books = [
    { id: 5, name: 'JavaScript: The Good Parts', price: 200, category: 'book', author: 'Douglas Crockford', genre: 'Programming' },
    { id: 6, name: 'Eloquent JavaScript', price: 300, category: 'book', author: 'Marijn Haverbeke', genre: 'Programming' }
];
// Тестування функцій
const phone = (0, functions_1.findProduct)(electronics, 1);
console.log('Found product:', phone);
const filteredProducts = (0, functions_1.filterByPrice)(electronics, 12000);
console.log('Filtered products by price:', filteredProducts);
const cart = (0, cart_1.addToCart)([], phone, 1);
console.log('Cart:', cart);
const total = (0, cart_1.calculateTotal)(cart);
console.log('Total price:', total);
//# sourceMappingURL=main.js.map