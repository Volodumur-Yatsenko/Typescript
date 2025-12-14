"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByPrice = exports.findProduct = void 0;
// Функція для пошуку товару за id
const findProduct = (products, id) => {
    return products.find(product => product.id === id);
};
exports.findProduct = findProduct;
// Функція для фільтрації товарів за ціною
const filterByPrice = (products, maxPrice) => {
    return products.filter(product => product.price <= maxPrice);
};
exports.filterByPrice = filterByPrice;
//# sourceMappingURL=functions.js.map