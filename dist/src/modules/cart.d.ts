import { BaseProduct } from '../types/types';
export type CartItem<T> = {
    product: T;
    quantity: number;
};
export declare const addToCart: <T extends BaseProduct>(cart: CartItem<T>[], product: T, quantity: number) => CartItem<T>[];
export declare const calculateTotal: <T extends BaseProduct>(cart: CartItem<T>[]) => number;
//# sourceMappingURL=cart.d.ts.map