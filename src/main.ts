// src/main.ts
import { Electronics, Clothing, Book } from './types/types';
import { findProduct, filterByPrice } from './modules/functions';
import { addToCart, calculateTotal } from './modules/cart';

// Тестові дані
const electronics: Electronics[] = [
  { id: 1, name: 'Phone', price: 10000, category: 'electronics', brand: 'BrandX', model: 'X100' },
  { id: 2, name: 'Laptop', price: 15000, category: 'electronics', brand: 'BrandY', model: 'Y200' }
];

const clothing: Clothing[] = [
  { id: 3, name: 'T-shirt', price: 500, category: 'clothing', size: 'M', material: 'Cotton' },
  { id: 4, name: 'Jeans', price: 1000, category: 'clothing', size: 'L', material: 'Denim' }
];

const books: Book[] = [
  { id: 5, name: 'JavaScript: The Good Parts', price: 200, category: 'book', author: 'Douglas Crockford', genre: 'Programming' },
  { id: 6, name: 'Eloquent JavaScript', price: 300, category: 'book', author: 'Marijn Haverbeke', genre: 'Programming' }
];

// Тестування функцій
const phone = findProduct(electronics, 1);
console.log('Found product:', phone);

const filteredProducts = filterByPrice(electronics, 12000);
console.log('Filtered products by price:', filteredProducts);

const cart = addToCart([], phone!, 1);
console.log('Cart:', cart);

const total = calculateTotal(cart);
console.log('Total price:', total);
