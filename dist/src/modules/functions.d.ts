import { BaseProduct } from '../types/types';
export declare const findProduct: <T extends BaseProduct>(products: T[], id: number) => T | undefined;
export declare const filterByPrice: <T extends BaseProduct>(products: T[], maxPrice: number) => T[];
//# sourceMappingURL=functions.d.ts.map