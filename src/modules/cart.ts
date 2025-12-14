// src/modules/cart.ts
import { BaseProduct } from '../types/types';

export type CartItem<T> = {
  product: T;
  quantity: number;
};

// Додавання товару в кошик
export const addToCart = <T extends BaseProduct>(cart: CartItem<T>[], product: T, quantity: number): CartItem<T>[] => {
  cart.push({ product, quantity });
  return cart;
};

// Підрахунок загальної вартості
export const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
