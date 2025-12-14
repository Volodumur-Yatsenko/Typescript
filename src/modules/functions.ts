// src/modules/functions.ts
import { BaseProduct } from '../types/types';

// Функція для пошуку товару за id
export const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
  return products.find(product => product.id === id);
};

// Функція для фільтрації товарів за ціною
export const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
  return products.filter(product => product.price <= maxPrice);
};
